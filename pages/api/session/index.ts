import type { NextApiRequest, NextApiResponse } from 'next'
import { adminAuth } from '../../../util/firebase/initAdmin';
import { serialize } from 'cookie';

async function handlePOST(req: NextApiRequest, res: NextApiResponse){
    const idToken = req.body.idToken.toString();
    // Set session expiration to 5 days.
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    // Create the session cookie. This will also verify the ID token in the process.
    // The session cookie will have the same claims as the ID token.
    // To only allow session cookie setting on recent sign-in, auth_time in ID token
    // can be checked to ensure user was recently signed in before creating a session cookie.
    return await adminAuth
        .createSessionCookie(idToken, { expiresIn })
        .then(
        (sessionCookie) => {
            // Set cookie policy for session cookie.
            const options = { maxAge: expiresIn, httpOnly: true, secure: true, path: '/' };
            res.setHeader('Set-Cookie', serialize('session', sessionCookie, options,));
            res.end(JSON.stringify({ status: 'success' }));
        },
        (error) => {
            console.log(error)
            res.status(401).end();
        }
        );

}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    switch(req.method){
        case 'POST':
            handlePOST(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
    }
}