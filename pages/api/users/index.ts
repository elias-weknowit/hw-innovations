import { NextApiRequest, NextApiResponse } from "next";
import { db, users } from "../../../util/firebase/firestoreUtil";
import { User, Company } from "../../../util/models";
import { getDocs, setDoc, deleteDoc, addDoc, doc, updateDoc, getFirestore, collection, Firestore, DocumentData, QuerySnapshot, query, where, QueryConstraint, limit, startAfter, startAt, orderBy, documentId } from 'firebase/firestore'
import { DecodedIdToken } from "firebase-admin/auth";
import { decodeCookie, internalError } from "../../../util/firebase/adminUtil";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(!db) res.status(500).send('Firebase not initialized');
    const decodedCookie = await decodeCookie(req.cookies.session).catch(err => res.status(500).send(err));
    if(!decodedCookie) return;

    switch(req.method){
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

async function handlePUT(req: NextApiRequest, res: NextApiResponse, cookie: DecodedIdToken){
    //Update user with id macthing id from cookie using information from request body
    const snapshot = await getDocs(query(collection(db, 'users'), where(documentId(), '==', cookie.uid))).catch(err => internalError(res,err));
    if(!snapshot) return;
    if(snapshot.size === 0){
        res.status(404).send('User not found');
        return;
    }

    const user = snapshot.docs[0].data();
    if(req.body.name) user.name = req.body.name;
    if(req.body.email) user.email = req.body.email;
    if(req.body.phone) user.phone = req.body.phone;
    if(req.body.photoURL) user.photoURL = req.body.photoURL;
    if(user.company){
        if(req.body.address) user.address = req.body.address;
        if(req.body.city) user.city = req.body.city;
        if(req.body.postCode) user.postCode = req.body.postCode;
    }
    user.updatedAt = new Date();
    await updateDoc(doc(db, 'users', cookie.uid), user).catch(err => internalError(res, err));
    //Update user information in firestore
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse, cookie: DecodedIdToken){
    //Use id from cookie and additional information from request body to create new user or company user
    const snapshot = await getDocs(query(collection(db, 'users'), where('id', '==', cookie.uid))).catch(err => internalError(res,err));
    if(!snapshot) return;
    if(snapshot.size > 0){
        res.status(400).send('User already exists');
    }
    let newUser;
    if(req.body.company){
        newUser = {
            id: cookie.uid,
            company: true,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone ? req.body.phone : '',
            orgNumber: req.body.orgNumber,
            photoURL: req.body.photoURL ? req.body.photoURL : '',
            address: req.body.address,
            city: req.body.city,
            postCode: req.body.postCode,
            createdAt: new Date(),
            updatedAt: new Date(),
            signedInAt: new Date()
        }
    } else{
        newUser = {
            id: cookie.uid,
            company: false,
            name: req.body.name,
            email: req.body.email,
            photoURL: req.body.photoURL ? req.body.photoURL : '',
            phone: req.body.phone ? req.body.phone : '',
            createdAt: new Date(),
            updatedAt: new Date(),
            signedInAt: new Date()
        }
    }
    await addDoc(collection(db, 'users'), newUser).then(result => res.status(200).json(result)).catch(err => res.status(500).send(err));
}