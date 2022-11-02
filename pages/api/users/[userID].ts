import { NextApiRequest, NextApiResponse } from "next";
import { db, users  } from "../../../util/firebase/firestoreUtil";
import { getDocs, setDoc, deleteDoc, addDoc, doc, updateDoc, getFirestore, collection, Firestore, DocumentData, QuerySnapshot, query, where, QueryConstraint, limit, startAfter, startAt, orderBy } from 'firebase/firestore'
import { DecodedIdToken } from "firebase-admin/auth";
import { decodeCookie } from "../../../util/firebase/adminUtil";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(!db) res.status(500).send('Firebase not initialized');
    const decodedCookie = await decodeCookie(req.cookies.session).catch(err => res.status(500).send(err));
    if(!decodedCookie) return;

    switch(req.method){
        case 'GET':
            await handleGET(req, res, decodedCookie);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
    }
}

async function handleGET(req: NextApiRequest, res: NextApiResponse, cookie: DecodedIdToken){
    const userId = req.query.userID;
    const snapshot = await getDocs(query(users, where('id', '==', userId))).catch(err => res.status(500).send(err));
    if(!snapshot) return;
    if(snapshot.size === 0){
        res.status(404).send('User not found');
        return;
    }
    const user = snapshot.docs[0].data();
    res.status(200).json(user);
}