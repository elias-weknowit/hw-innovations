
//Declare firestore type for advertisments collection
import type { Moment } from 'moment';
import {Timestamp as FirebaseTimestamp} from 'firebase/firestore';

export type Advertisement = {
    id?: string;
    type: 'work' | 'labour';
    //creatorId: string;
    title: string;
    company: string;
    location: string;
    period: {
        start?: Moment | FirebaseTimestamp;
        end?: Moment | FirebaseTimestamp;
    };
    amount: number;
    collectiveAgreement: boolean;
    contractForm: string;
    typeOfWork?: string;
    description: string;
    creatorId?: string;
    requirements: string;
    contact?: {
        name?: string;
        email?: string;
        phone?: string;
        address?: string;
        city?:string;
        postCode?:string;
    };
    createdAt?: Moment | FirebaseTimestamp;
    updatedAt?: Moment | FirebaseTimestamp;
    userObject?: User
}

export interface User {
    id?: string;
    company: boolean;
    name: string;
    email: string;
    phone?: string;
    photoURL?: string;
    createdAt?: Moment;
    updatedAt?: Moment;
}

export interface Company extends User {
    orgNumber: string;
    address: string;
    city: string;
    postCode: string;
}