
//Declare firestore type for advertisments collection
import type { Moment } from 'moment';

export type Advertisement = {
    id?: string;
    type: 'work' | 'labour';
    creatorId: string;
    title: string;
    company: string;
    location: string;
    period: {
        start: Moment;
        end: Moment;
    };
    amount: number;
    collectiveAgreement: boolean;
    contractForm: string;
    typeOfWork?: string;
    description: string;
    requirements: string[];
    contact: {
        name: string;
        email?: string;
        phone?: string;
        address?: string;
    };
    createdAt?: Moment;
    updatedAt?: Moment;
}