
import type { NextApiRequest, NextApiResponse } from 'next'
import { getDocs, setDoc, deleteDoc, addDoc, doc, updateDoc, getFirestore, collection, Firestore, DocumentData, QuerySnapshot, query, where, QueryConstraint, limit, startAfter, startAt, orderBy } from 'firebase/firestore'
import { DecodedIdToken } from 'firebase-admin/auth';
import type { Advertisement } from '../models'
import { timestampConverter } from './adminUtil';
import moment from 'moment';
import { decodeCookie } from './adminUtil';
import { getDownloadURL, getStorage, uploadBytes, ref } from 'firebase/storage';

export const db: Firestore = getFirestore();
export const advertisements = collection(db, 'advertisements').withConverter(timestampConverter);
export const users = collection(db, 'users');

