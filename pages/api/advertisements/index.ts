// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getDocs, documentId, setDoc, deleteDoc, addDoc, doc, updateDoc, getFirestore, collection, Firestore, DocumentData, QuerySnapshot, query, where, QueryConstraint, limit, startAfter, startAt, orderBy, serverTimestamp, FirestoreError } from 'firebase/firestore'
import { DecodedIdToken } from 'firebase-admin/auth';
import type { Advertisement } from '../../../util/models'
import { internalError, timestampConverter } from '../../../util/firebase/adminUtil';
import moment from 'moment';
import { decodeCookie } from '../../../util/firebase/adminUtil';
import { FilterValues } from '../../../components/Ad/FilterView';
import { Timestamp } from 'firebase/firestore';

const db: Firestore = getFirestore();



//Possible queries:
//Created at
//  "Nyligen", "Förra veckan", "Förra månaden", "När som helst"
//Stad
//  Oklart hur denna ska göra. Föredefinierad lista som väljs när man skapar kanske? Exakt matching för nuläget
//Anställ om
//  "Nu", "1 v", "2 v", "3 v"


interface GetQuery {
    amount?: number;
    startAfter?: string;
    startAt?: string;
    creatorId?: string;
    createdAfter?: string;
    createdBefore?: string;
    location?: string;
    hiringIn?: string;
    textSearch?: string;
    type?: string;
    filterValues?: FilterValues;
};

//function for generating trigrams from textSearch, used for search queries with textSearch
const trigrams = (txt: string) => {
    const map = [];
    const s1 = (txt || '').toLowerCase();
    const n = 3;
    for (let k = 0; k <= s1.length - n; k++) map.push(s1.substring(k, k + n))
    return map;
  };

async function handleGET(req: NextApiRequest, res: NextApiResponse, cookie: DecodedIdToken){
    const getQuery: GetQuery = req.query;

    const amount = Number(getQuery.amount ? getQuery.amount : 10);
    if(!amount){
        res.status(400).send('Invalid type for "amount"');
        return;
    }

    const filterValues: FilterValues = getQuery.filterValues; 

    filterValues ? console.log(filterValues) : console.log('no filter values'); 

    const collectionRef = collection(db, 'advertisements');
    const queryConstraints: QueryConstraint[]  = [];
    queryConstraints.push(limit(amount));
    
    //Otherwise we order by createdAt
    //queryConstraints.push(getQuery.type ? orderBy('title', 'desc') : orderBy('createdAt', 'desc'));
    //startAt and startAfter will be ID's so a fetch must be done to get the actual date
    let docRef;
    
    //use trigram function to generate trigrams from textSearch
    if(getQuery.textSearch && getQuery.textSearch != ""){
        const trigramsArray = trigrams(getQuery.textSearch);
        console.log(trigramsArray)
        queryConstraints.push(where('trigram', 'array-contains-any', trigramsArray));
    }

    if(getQuery.filterValues){
        if(getQuery.filterValues.location && getQuery.filterValues.location != ""){
            queryConstraints.push(where('location', '==', getQuery.filterValues.location));
        }
    
        if(getQuery.filterValues.startDate){
            queryConstraints.push(where('start', '>=', getQuery.filterValues.startDate));
        }
    
        if(getQuery.filterValues.uploadDate){
            queryConstraints.push(where('createdAt', '>=', getQuery.filterValues.uploadDate));
        }  
    
        if(getQuery.filterValues.location) {
            queryConstraints.push(where('location', '==', getQuery.filterValues.location));
        }
    }   

    if(getQuery.startAfter){
        docRef = doc(db, 'advertisements', getQuery.startAfter);
        queryConstraints.push(startAt(docRef));
    } else if(getQuery.startAt){
        docRef = doc(db, 'advertisements', getQuery.startAt);
        queryConstraints.push(startAt(docRef));
    }

    if(getQuery.type) queryConstraints.push(where('type', '==', getQuery.type));

    const toTimestamp = timestampConverter.momentToFirebaseTimestamp;

    const createdAfter = moment(getQuery.createdAfter);
    //if(createdAfter.isValid()) queryConstraints.push(where('createdAt', '>=', toTimestamp(createdAfter)));

    const createdBefore = moment(getQuery.createdBefore);
    //if(createdBefore.isValid()) queryConstraints.push(where('createdAt', '<=', toTimestamp(createdBefore)));

    const hiringIn = Number(getQuery.hiringIn);
    
    if(getQuery.creatorId) queryConstraints.push(where('creatorId', '==', getQuery.creatorId));
    if(getQuery.location) queryConstraints.push(where('location', '==', getQuery.location));        
    
    await getDocs(query(collectionRef, ...queryConstraints)).then(snapshotRes => {
        const snapshot: QuerySnapshot<DocumentData> = snapshotRes; 
        const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));  
        //res.status(200).json(snapshot.docs.map(doc => doc.data()).filter(doc => doc.period.end.isAfter(moment()) && doc.period.start.isBefore(moment().add(hiringIn, 'weeks'))));
        res.status(200).json(data);
    }).catch( FirestoreError => {
        console.log(FirestoreError) 
        res.status(500).send('Internal server error');});
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse, cookie: DecodedIdToken){
    console.log(req.body.period)
    const newAdvertisement: Advertisement = {...req.body, createdAt: moment(), updatedAt: moment(), start: Timestamp.fromDate(moment(req.body.period.start).toDate()), end: Timestamp.fromDate(moment(req.body.period?.end).toDate())};
    //convert to period start and period end to firebase timestamp
    const timestamps = timestampConverter.toFirestore(newAdvertisement)
    console.log(timestamps)

    console.log(newAdvertisement)

    const collectionRef = collection(db, 'advertisements')
    const trigramsArray = {trigram: trigrams(newAdvertisement.title)};
    await addDoc(collectionRef, {...newAdvertisement, ...timestamps, ...trigramsArray}).catch( err => internalError(res, err)).then(result => res.status(200).json({...newAdvertisement, id: result})); //id: result.id 
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(!db) internalError(res, "Firestore not initialized");
    const decodedCookie = await decodeCookie(req.cookies.session).catch (err => internalError(res, err));
    if(!decodedCookie) return res.status(401).send('Unauthorized');

    switch(req.method){
        case 'GET':
            try{
                await handleGET(req, res, decodedCookie);
            }catch(FirestoreError){
                console.log(FirestoreError)
                internalError(res, "Error handling GET request");
            }
            break;
        case 'POST':
            await handlePOST(req, res, decodedCookie);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
    }
}