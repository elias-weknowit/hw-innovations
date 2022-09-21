// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getDocs, setDoc, deleteDoc, addDoc, doc, updateDoc, getFirestore, collection, Firestore, DocumentData, QuerySnapshot, query, where, QueryConstraint, limit, startAfter, startAt, orderBy } from 'firebase/firestore'
import { DecodedIdToken } from 'firebase-admin/auth';
import { timestampConverter } from '../../../util/firebase/adminUtil';
import { decodeCookie } from '../../../util/firebase/adminUtil';

const db: Firestore = getFirestore();

async function handleDELETE(req: NextApiRequest, res: NextApiResponse, cookie: DecodedIdToken) {
    const collectionRef = collection(db, 'advertisements').withConverter(timestampConverter);
    const docRef = doc(collectionRef, req.body.id);
    
    //Check if user is creator of advertisement
    //Really should be done in firestore rules but I couldn't figure out how to send the cookie to the rules as request.auth
    const snapshot = await getDocs(query(collectionRef, where('id', '==', cookie.uid))).catch( err => res.status(500).send(err));
    if(!snapshot){
        res.status(500).send('No snapshot');
    } else{
        if(snapshot.docs.length === 0) res.status(401).send('User is not creator of advertisement');
        else{
            await deleteDoc(docRef).catch( err => res.status(500).send(err)).then(result => res.status(200).json(result));
        }
    }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(!db) res.status(500).send('Firebase not initialized');
    const decodedCookie = await decodeCookie(req.cookies.session).catch(err => res.status(500).send(err));
    if(!decodedCookie) return;

    switch(req.method){
        /* case 'GET':
            await handleGET(req, res, decodedCookie);
            break;
        case 'POST':
            await handlePOST(req, res, decodedCookie);
            break;
        case 'PUT':
            await handlePUT(req, res, decodedCookie);
            break; */
        case 'DELETE':
            await handleDELETE(req, res, decodedCookie);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
    }
}