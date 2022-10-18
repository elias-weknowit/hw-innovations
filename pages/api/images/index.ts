import type { NextApiRequest, NextApiResponse } from 'next'
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { DecodedIdToken } from 'firebase-admin/auth';
import { internalError} from '../../../util/firebase/adminUtil';
import { decodeCookie } from '../../../util/firebase/adminUtil';

const storage = getStorage();

/* PUT-call to upload image to Firebase Storage and overwrite previous image if it exists */
async function handlePUT(req: NextApiRequest, res: NextApiResponse, cookie: DecodedIdToken){
    const userId = cookie.uid;
    if(!userId || userId !== cookie.uid) {
        res.status(401).send("Unauthorized");
        return;
    }

    const file = req.body;
    
    const fileRef = ref(storage, `images/profile-pictures/${userId}.jpg`);
    uploadBytes(fileRef, file).then((snapshot) => {
        console.log('file uploaded, snapshot:', snapshot);
      });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(!storage) internalError(res, "Storage not initialized");
    const decodedCookie = await decodeCookie(req.cookies.session).catch(err => {internalError(res, err, "Faulty cookie"); return null;});
    if(!decodedCookie) return;

    switch(req.method){
        case 'PUT':
            await handlePUT(req, res, decodedCookie);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
    }
}