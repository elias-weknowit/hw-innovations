// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getDocs, documentId, setDoc, deleteDoc, addDoc, doc, updateDoc, getFirestore, collection, Firestore, DocumentData, QuerySnapshot, query, where, QueryConstraint, limit, startAfter, startAt, orderBy, serverTimestamp } from 'firebase/firestore'
import { DecodedIdToken } from 'firebase-admin/auth';
import type { Advertisement } from '../../../util/models'
import { internalError, timestampConverter } from '../../../util/firebase/adminUtil';
import moment from 'moment';
import { decodeCookie } from '../../../util/firebase/adminUtil';

async function handleGET(req: NextApiRequest, res: NextApiResponse, cookie: DecodedIdToken, db: Firestore){
    const amount = Number(req.query.amount ? req.query.amount : 10);
    if(!amount){
        res.status(400).send('Invalid type for "amount"');
        return;
    }

    const collectionRef = collection(db, 'advertisements');
    const queryConstraints: QueryConstraint[]  = [];

    if(req.query.startAfter){
        queryConstraints.push(orderBy(documentId()));
        queryConstraints.push(startAfter(req.query.startAfter));
    } else if(req.query.startAt){
        queryConstraints.push(orderBy(documentId()));
        queryConstraints.push(startAt(req.query.startAt));
    }
    queryConstraints.push(limit(amount));
    if(req.query.creatorId) queryConstraints.push(where('creatorId', '==', req.query.creatorId));
    await getDocs(query(collectionRef, ...queryConstraints)).then(  snapshotRes => { 
        res.status(200).json(snapshotRes.docs.map(doc => ({...doc.data(), id: doc.id})));
    }).catch( err => internalError(res, err));
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse, cookie: DecodedIdToken, db: Firestore){
    const createdAt = moment();
    const newAdvertisement: Advertisement = {...req.body, createdAt, updatedAt: createdAt, period: {start: moment(req.body.period.start), end: moment(req.body.period?.end)}};
    const collectionRef = collection(db, 'advertisements').withConverter(timestampConverter);
    await addDoc(collectionRef, newAdvertisement).catch( err => internalError(res, err)).then(result => res.status(200).json({...newAdvertisement, id: result})); //id: result.id 
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db: Firestore = getFirestore();

    if(!db) internalError(res, "Firestore not initialized");
    const decodedCookie = await decodeCookie(req.cookies.session).catch (err => internalError(res, err));
    if(!decodedCookie) return res.status(401).send('Unauthorized');

    switch(req.method){
        case 'GET':
            try{
                await handleGET(req, res, decodedCookie, db);
            }catch(err){
                internalError(res, "Error handling GET request");
            }
            break;
        case 'POST':
            await handlePOST(req, res, decodedCookie, db);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
    }
}