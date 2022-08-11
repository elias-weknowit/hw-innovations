
//Declare firestore type for advertisments collection


export type Advertisement = {
    id?: string;
    type: 'work' | 'labour';
    creatorId: string;
    title: string;
    company: string;
    location: string;
    period: {
        start: Date;
        end: Date;
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
    createdAt: Date;
    updatedAt: Date;
}