// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getDocs, setDoc, addDoc, doc, updateDoc, getFirestore, collection, Firestore, DocumentData, QuerySnapshot, query, where } from 'firebase/firestore'
import type { Advertisement } from '../../util/models'
import { Timestamp as FirebaseTimestamp } from "firebase/firestore";
import moment, { Moment } from 'moment';

const db: Firestore = getFirestore();


const converter = {
    toFirestore: (advertisement: Advertisement) => {
        return {...advertisement, 
            createdAt: FirebaseTimestamp.fromDate(advertisement.createdAt.toDate()), 
            updatedAt: FirebaseTimestamp.fromDate(advertisement.updatedAt.toDate()),
            period: {
                start: FirebaseTimestamp.fromDate(advertisement.period.start.toDate()),
                end: FirebaseTimestamp.fromDate(advertisement.period.end.toDate()),
            },
        };
    },
    fromFirestore: (snapshot: DocumentData) => {
        return {...snapshot.data(), id: snapshot.id,
            createdAt: moment(snapshot.data().createdAt.toDate()),
            updatedAt: moment(snapshot.data().updatedAt.toDate()),
            period: {
                start: moment(snapshot.data().period.start.toDate()),
                end: snapshot.data().period.end ? moment(snapshot.data().period.end?.toDate()) : undefined,
            },
        } as Advertisement;
    },
}

async function handleGET(req: NextApiRequest, res: NextApiResponse){
    const userId = req.query.userId;
    console.log(req.query);
    const collectionRef = collection(db, 'advertisements').withConverter(converter);
    const snapshotRes: QuerySnapshot<Advertisement> | void = await getDocs(userId ? query(collectionRef, where("creatorId", "==", userId)) : collectionRef).catch( err => res.status(500).send(err));
    if(!snapshotRes){
        res.status(500).send('No snapshot');
    } else{
        const snapshot: QuerySnapshot<Advertisement> = snapshotRes;
        res.status(200).json(snapshot.docs.map(doc => doc.data()));
    }
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse){
    const createdAt = moment();
    const newAdvertisement: Advertisement = {...req.body, createdAt, updatedAt: createdAt, period: {start: moment(req.body.period.start), end: moment(req.body.period?.end)}};
    console.log(newAdvertisement);
    const collectionRef = collection(db, 'advertisements').withConverter(converter);
    await addDoc(collectionRef, newAdvertisement).catch( err => res.status(500).send(err)).then(result => res.status(200).json({...newAdvertisement, id: result})); //id: result.id 
}

async function handlePUT(req: NextApiRequest, res: NextApiResponse) {
    const collectionRef = collection(db, 'advertisements').withConverter(converter);
    const updateObject: any = req.body;
    if('updatedAt' in updateObject || 'createdAt' in updateObject){
        res.status(400).send('Cannot update createdAt or updatedAt');
    } else{
        const updatedAt = new Date();
        const docRef = doc(collectionRef, updateObject.id);
        await updateDoc(docRef, {...updateObject, updatedAt}).catch( err => res.status(500).send(err)).then(result => res.status(200).json(result));
    }

   
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(!db) res.status(500).send('Firebase not initialized');

    switch(req.method){
        case 'GET':
            await handleGET(req, res);
            break;
        case 'POST':
            handlePOST(req, res);
            break;
        case 'PUT':
            handlePUT(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
    }
}