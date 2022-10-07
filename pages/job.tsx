import React, { useState } from "react";
import Head from "next/head";
import SearchBar from "../components/Ad/SearchBar";
import FilterButton from "../components/Ad/FilterButton";
import AdDetail from "../components/Ad/AdDetail";
import FilterView from "../components/Ad/FilterView";
import AdView from "../components/Create-Ad/AdView";
import ToggleButton from "../components/Ad/ToggleButton";
import SelectTypeTabs from "../components/Ad/SelectTypeTabs";
import { getDocs, documentId, setDoc, deleteDoc, addDoc, doc, updateDoc, getFirestore, collection, Firestore, DocumentData, QuerySnapshot, query, where, QueryConstraint, limit, startAfter, startAt, orderBy, serverTimestamp } from 'firebase/firestore'
import moment, {Moment} from 'moment';
import { Timestamp as FirebaseTimestamp } from "firebase/firestore";
import { Advertisement } from '../util/models';


type FirestoreAdvertisement = Omit<Advertisement, 'createdAt' | 'updatedAt' | 'period'> & {
  createdAt?: FirebaseTimestamp;
  updatedAt?: FirebaseTimestamp;
  period?: {
      start: FirebaseTimestamp;
      end?: FirebaseTimestamp;
  }
}

const timestampConverter = {
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

export default function Job() {
  const [selectedTab, setSelectedTab] = useState<string>("Sök Jobb")

  return (
    <>
      <Head>
        <title>Work 2 Do | Annonser</title>
      </Head>
      <div className="px-8 sm:px-12 md:px-16 lg:px-32 mt-40 md:mt-20">
        <div>
          <div className="flex flex-row items-center justify-center">
            <SearchBar placeholder="Sök efter jobb" />
            <FilterButton />
            </div>
            <div className="flex flex-row items-center justify-center">
            <SelectTypeTabs className="w-1/1 mt-10 md:w-1/2" tabs={["Sök Jobb", "Arbetskraft"]} selectedTab={selectedTab} onSelect={setSelectedTab} />

            </div>
          <div className="flex items-center justify-between mt-10">
            <div className="block md:hidden font-mulish font-semibold text-md mb-2">
              Nya Jobb
              </div>
              </div>
              </div>
              <div className="md:flex mb-5">
              <div className="hidden md:block md:w-1/4">
              <FilterView />
              </div>
              <div className="md:w-1/3 p-1">
              <div>
              <AdDetail />
              <AdDetail />
              <AdDetail />
              <AdDetail />
              </div>
              </div>
              <div className="hidden md:block md:w-1/2 p-1">
            AdView ska mapas här. Hur?
            <button className="bg-primary-color text-white font-mulish font-semibold text-md px-4 py-2 rounded-lg" onClick={async (e) => {
              const db: Firestore = getFirestore();
              const collectionRef = collection(db, 'advertisements').withConverter(timestampConverter);
              const queryConstraints: QueryConstraint[]  = [];
              queryConstraints.push(limit(10));
              
              //If hiringIn is set then we order by period.start
              queryConstraints.push(orderBy('createdAt', 'asc'));
              //Otherwise we order by createdAt
              //startAt and startAfter will be ID's so a fetch must be done to get the actual date
              let docRef;
          
              docRef = doc(db, 'advertisements', 'HnqCrA2kWQ4qL9bSINMK');
              queryConstraints.push(startAt(docRef));
          
              const toTimestamp = timestampConverter.momentToFirebaseTimestamp;
          
              const createdAfter = moment().subtract(1, 'years');
              if(createdAfter.isValid()) queryConstraints.push(where('createdAt', '>=', toTimestamp(createdAfter)));
          
              const createdBefore = moment().add(1, 'years');
              if(createdBefore.isValid()) queryConstraints.push(where('createdAt', '<=', toTimestamp(createdBefore)));
          
              const hiringIn = Number(2);
              
              queryConstraints.push(where('creatorId', '==', '8zhojt4yOXVvO0KpuKjeqbNGQtz1'));
              queryConstraints.push(where('location', '==', 'Sweden'));
          
              await getDocs(query(collectionRef, ...queryConstraints)).then(snapshotRes => {
                  const snapshot: QuerySnapshot<Advertisement> = snapshotRes;
                 snapshot.docs.map(doc =>{ if(doc.data().period.start.isBefore(moment().add(hiringIn, 'weeks'))) console.log(doc.data())});
              }).catch(console.log);
            }}>Test</button>
          </div>
        </div>
      </div>
    </>
  );
}
