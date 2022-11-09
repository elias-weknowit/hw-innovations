import { adminAuth } from './initAdmin';
import type { NextApiRequest, NextApiResponse } from 'next'
import { DecodedIdToken} from 'firebase-admin/auth';
import { Timestamp as FirebaseTimestamp, DocumentData } from "firebase/firestore";
import { Advertisement } from '../models';
import moment, { Moment } from 'moment';

export function internalError(res: NextApiResponse, err: any, message?: string){
    console.error(err);
    res.status(500).send(message ? message : err);
}

export async function decodeCookie(sessionCookie: string): Promise<DecodedIdToken>{
    // Verify the session cookie. In this case an additional check is added to detect
    // if the user's Firebase session was revoked, user deleted/disabled, etc.
    return adminAuth
        .verifySessionCookie(sessionCookie, true /** checkRevoked */)
}

type FirestoreAdvertisement = Omit<Advertisement, 'createdAt' | 'updatedAt' | 'period'> & {
    createdAt?: FirebaseTimestamp;
    updatedAt?: FirebaseTimestamp;
    period?: {
        start: FirebaseTimestamp;
        end?: FirebaseTimestamp;
    }
}

export const timestampConverter = {
    toFirestore: (advertisement: Advertisement) => {
        const {createdAt, updatedAt, period, ...rest} = advertisement;
        const newObj: FirestoreAdvertisement = {...rest};
        if(advertisement.createdAt){
            newObj.createdAt = FirebaseTimestamp.fromDate(advertisement.createdAt.toDate());
        }
        if(advertisement.updatedAt){
            newObj.updatedAt = FirebaseTimestamp.fromDate(advertisement.updatedAt.toDate());
        }
        if(newObj.period){
            if(newObj.period.start){
                newObj.period.start = FirebaseTimestamp.fromDate(newObj.period.start.toDate());
            }
            if(newObj.period.end){
                newObj.period.end = FirebaseTimestamp.fromDate(newObj.period.end.toDate());
            }
        }else{
            console.log('no period');
        }
        return newObj;
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
    momentToFirebaseTimestamp: (moment: Moment) => FirebaseTimestamp.fromDate(moment.toDate()),
}
