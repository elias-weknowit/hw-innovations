// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getDocs, setDoc, deleteDoc, addDoc, doc, updateDoc, getFirestore, collection, Firestore, DocumentData, QuerySnapshot, query, where, QueryConstraint, limit, startAfter, startAt, orderBy } from 'firebase/firestore'
import { DecodedIdToken } from 'firebase-admin/auth';
import type { Advertisement } from '../../../util/models'
import { internalError, timestampConverter } from '../../../util/firebase/adminUtil';
import moment from 'moment';
import { decodeCookie } from '../../../util/firebase/adminUtil';

const db: Firestore = getFirestore();

async function handleGET(req: NextApiRequest, res: NextApiResponse, cookie: DecodedIdToken){
    const amount = Number(req.query.amount ? req.query.amount : 10);
    if(!amount){
        res.status(400).send('Invalid type for "amount"');
        return;
    }

    const collectionRef = collection(db, 'advertisements').withConverter(timestampConverter);
    const queryConstraints: QueryConstraint[]  = [];

    if(req.query.startAfter){
        queryConstraints.push(orderBy('id'));
        queryConstraints.push(startAfter(req.query.startAfter));
    } else if(req.query.startAt){
        queryConstraints.push(orderBy('id'));
        queryConstraints.push(startAt(req.query.startAt));
    }
    queryConstraints.push(limit(amount));
    if(req.query.creatorId) queryConstraints.push(where('creatorId', '==', req.query.creatorId));
    
    await getDocs(query(collectionRef, ...queryConstraints)).then(snapshotRes => {
        const snapshot: QuerySnapshot<Advertisement> = snapshotRes;
        res.status(200).json(snapshot.docs.map(doc => doc.data()));
    }).catch( err => internalError(res, err));
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse, cookie: DecodedIdToken){
    const createdAt = moment();
    const newAdvertisement: Advertisement = {...req.body, createdAt, updatedAt: createdAt, period: {start: moment(req.body.period.start), end: moment(req.body.period?.end)}};
    const collectionRef = collection(db, 'advertisements').withConverter(timestampConverter);
    await addDoc(collectionRef, newAdvertisement).catch( err => internalError(res, err)).then(result => res.status(200).json({...newAdvertisement, id: result})); //id: result.id 
}

async function handlePUT(req: NextApiRequest, res: NextApiResponse, cookie: DecodedIdToken) {
    const collectionRef = collection(db, 'advertisements').withConverter(timestampConverter);
    const updateObject: any = req.body;
    delete updateObject.updatedAt;
    delete updateObject.createdAt;

    const updatedAt = new Date();
    const docRef = doc(collectionRef, updateObject.id);
    await updateDoc(docRef, {...updateObject, updatedAt}).catch( err => internalError(res, err)).then(result => res.status(200).json(result));
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(!db) internalError(res, "Firestore not initialized");
    const decodedCookie = await decodeCookie(req.cookies.session).catch(err => {internalError(res, err, "Faulty cookie"); return null;});
    if(!decodedCookie) return;

    switch(req.method){
        case 'GET':
            await handleGET(req, res, decodedCookie);
            break;
        case 'POST':
            await handlePOST(req, res, decodedCookie);
            break;
        case 'PUT':
            await handlePUT(req, res, decodedCookie);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
    }
}