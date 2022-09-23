// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getDocs, setDoc, deleteDoc, addDoc, doc, updateDoc, documentId, getFirestore, collection, Firestore, DocumentData, QuerySnapshot, query, where, QueryConstraint, limit, startAfter, startAt, orderBy, serverTimestamp } from 'firebase/firestore'
import { DecodedIdToken } from 'firebase-admin/auth';
import { timestampConverter } from '../../../util/firebase/adminUtil';
import moment from 'moment';
import { decodeCookie, internalError } from '../../../util/firebase/adminUtil';

const db: Firestore = getFirestore();

async function handleDELETE(req: NextApiRequest, res: NextApiResponse, cookie: DecodedIdToken) {
    const collectionRef = collection(db, 'advertisements').withConverter(timestampConverter);
    const adId: string = typeof req.query.adId === 'string' ? req.query.adId : req.query.adId[0];
    const docRef = doc(collectionRef, adId);
    
    //Check if user is creator of advertisement
    //Really should be done in firestore rules but I couldn't figure out how to send the cookie to the rules as request.auth
    const snapshot = await getDocs(query(collectionRef, where('creatorId', '==', cookie.uid), where(documentId(), '==', adId))).catch( err => internalError(res, err));
    if(!snapshot){
        internalError(res, 'No snapshot');
    } else{
        if(snapshot.docs.length === 0){
            res.status(401).send('User is not creator of advertisement');
        }
        else{
            await deleteDoc(docRef).catch( err => internalError(res, err)).then(result => res.status(200).json(result));
        }
    }
}

async function handlePUT(req: NextApiRequest, res: NextApiResponse, cookie: DecodedIdToken) {
    const collectionRef = collection(db, 'advertisements').withConverter(timestampConverter);
    const updateObject: any = req.body;
    const adId: string = typeof req.query.adId === 'string' ? req.query.adId : req.query.adId[0];
    const docRef = doc(collectionRef, adId);
    const updatedAt = moment();

    //Delete fields which cannot be updated
    delete updateObject.updatedAt;
    delete updateObject.createdAt;
    delete updateObject.creatorId;
    delete updateObject.id;
    
    //Check if user is creator of advertisement
    //Really should be done in firestore rules but I couldn't figure out how to send the cookie to the rules as request.auth
    const snapshot = await getDocs(query(collectionRef, limit(1), where('creatorId', '==', cookie.uid), where(documentId(), '==', adId))).catch( err => internalError(res, err));
    if(!snapshot){
        internalError(res, 'No snapshot');
    } else{
        if(snapshot.docs.length === 0){
            res.status(401).send('User is not creator of advertisement');
        }
        else{
            await setDoc(docRef, {...updateObject, updatedAt}).catch( err => internalError(res, err)).then(result => res.status(200).json(result));
        }
    }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(!db) internalError(res, 'Firebase not initialized');
    const decodedCookie = await decodeCookie(req.cookies.session).catch(err => internalError(res, err));
    if(!decodedCookie) return;

    switch(req.method){
        /* case 'GET':
            await handleGET(req, res, decodedCookie);
            break;
        case 'POST':
            await handlePOST(req, res, decodedCookie);
            break;*/
        case 'PUT':
            await handlePUT(req, res, decodedCookie);
            break; 
        case 'DELETE':
            await handleDELETE(req, res, decodedCookie);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
    }
}