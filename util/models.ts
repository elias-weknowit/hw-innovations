
//Declare firestore type for advertisments collection
import type { Moment } from 'moment';
import {Timestamp as FirebaseTimestamp} from 'firebase/firestore';

export type Advertisement = {
    id?: string;
    type: string;
    //creatorId: string;
    title: string;
    company: string;
    location: string;
    period: {
        start?: Moment | FirebaseTimestamp | {seconds: number, nanoseconds: number};
        end?: Moment | FirebaseTimestamp | {seconds: number, nanoseconds: number};
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
    createdAt?: Moment | FirebaseTimestamp | {seconds: number, nanoseconds: number};
    updatedAt?: Moment | FirebaseTimestamp | {seconds: number, nanoseconds: number};
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

export interface UserDetail extends User {
    experience: {
        title: string;
        company: string;
        startDate: string;
        endDate: string;
    }[]

    gearAndTools: string[]
    about: string
    skills: string[]
}
