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

export const timestampConverter = {
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
