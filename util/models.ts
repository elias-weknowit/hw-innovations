
//Declare firestore type for advertisments collection
import type { Moment } from 'moment';

export type Advertisement = {
    id?: string;
    type: 'work' | 'labour';
    //creatorId: string;
    title: string;
    company: string;
    location: string;
    period: {
        start?: Moment;
        end?: Moment;
    };
    amount: number;
    collectiveAgreement: boolean;
    contractForm: string;
    typeOfWork?: string;
    description: string;
    requirements: string;
    contact?: {
        name?: string;
        email?: string;
        phone?: string;
        address?: string;
        city?:string;
        postCode?:string;
    };
    createdAt?: Moment;
    updatedAt?: Moment;
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