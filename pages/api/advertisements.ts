// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getDocs, setDoc, doc, updateDoc, getFirestore, collection, Firestore, DocumentData, QuerySnapshot } from 'firebase/firestore'
import type { Advertisement, AdvertisementModel } from '../../util/models'
import { Timestamp as FirebaseTimestamp } from "firebase/firestore";

const db: Firestore = getFirestore();


const converter = {
    toFirestore: (advertisement: AdvertisementModel) => {
        return {...advertisement, 
            createdAt: FirebaseTimestamp.fromDate(advertisement.createdAt), 
            updatedAt: FirebaseTimestamp.fromDate(advertisement.updatedAt),
            info: {...advertisement.info,
                whenStart: FirebaseTimestamp.fromDate(advertisement.info.whenStart),
                whenEnd: FirebaseTimestamp.fromDate(advertisement.info.whenEnd),
            },
        };
    },
    fromFirestore: (snapshot: DocumentData) => {
        return {...snapshot.data(), id: snapshot.data().id,
            createdAt: new Date(snapshot.data().createdAt),
            updatedAt: new Date(snapshot.data().updatedAt),
            info: {...snapshot.data().info,
                whenStart: new Date(snapshot.data().info.whenStart.toDate()),
                whenEnd: snapshot.data().info.whenEnd ? new Date(snapshot.data().info.whenEnd?.toDate()) : undefined,
            },
        } as Advertisement;
    },
}

async function handleGET(req: NextApiRequest, res: NextApiResponse){
    const collectionRef = collection(db, 'advertisements').withConverter(converter);
    const snapshotRes: QuerySnapshot<Advertisement> | void = await getDocs(collectionRef).catch( err => res.status(500).send(err));
    if(!snapshotRes){
        res.status(500).send('No snapshot');
    } else{
        const snapshot: QuerySnapshot<Advertisement> = snapshotRes;
        res.status(200).json(snapshot.docs.map(doc => doc.data()));
    }
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse){
    const createdAt = new Date();
    const newAdvertisement: AdvertisementModel = {...req.body, createdAt, updatedAt: createdAt};
    console.log(newAdvertisement);
    await setDoc(doc(db, 'advertisements'), newAdvertisement).catch( err => res.status(500).send(err)).then(result => res.status(200).json(result));
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