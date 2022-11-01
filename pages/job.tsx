import React, { useEffect, useState } from "react";
import Head from "next/head";
import SearchBar from "../components/Ad/SearchBar";
import FilterButton from "../components/Ad/FilterButton";
import AdDetail from "../components/Ad/AdDetail";
import FilterView from "../components/Ad/FilterView";
import AdView from "../components/Create-Ad/AdView";
import ToggleButton from "../components/Ad/ToggleButton";
import SelectTypeTabs from "../components/Ad/SelectTypeTabs";
import { getDocs, documentId, setDoc, deleteDoc, addDoc, doc, updateDoc, getFirestore, collection, Firestore, DocumentData, QuerySnapshot, query, where, QueryConstraint, limit, startAfter, startAt, orderBy, serverTimestamp } from 'firebase/firestore'
import moment, { Moment } from 'moment';
import { Timestamp as FirebaseTimestamp } from "firebase/firestore";
import { Advertisement } from '../util/models';
import axios from "axios";
import { Pagination } from "@mui/material";

import { ClipLoader } from 'react-spinners';
import { useRouter } from 'next/router';

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
    const { createdAt, updatedAt, period, ...rest } = advertisement;
    const newObj: FirestoreAdvertisement = { ...rest };
    if (advertisement.createdAt) {
      newObj.createdAt = FirebaseTimestamp.fromDate(advertisement.createdAt.toDate());
    }
    if (advertisement.updatedAt) {
      newObj.updatedAt = FirebaseTimestamp.fromDate(advertisement.updatedAt.toDate());
    }
    if (newObj.period) {
      if (newObj.period.start) {
        newObj.period.start = FirebaseTimestamp.fromDate(newObj.period.start.toDate());
      }
      if (newObj.period.end) {
        newObj.period.end = FirebaseTimestamp.fromDate(newObj.period.end.toDate());
      }
    }
    return newObj;
  },
  fromFirestore: (snapshot: DocumentData) => {
    return {
      ...snapshot.data(), id: snapshot.id,
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
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<string>("work");
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [selectedAd, setSelectedAd] = useState<Advertisement | null>(null);
  const [filter, setFilter] = useState<QueryConstraint[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (!router.query.type) return
    setSelectedTab(router.query.type as string);
  }, [router.query]);

  useEffect(() => {
    setLoading(true)
    //Fetch first visible page
    //startAt and startAfter parameters can be used for paging if kept track of.
    //When the forwards arrow is pressed the last id fetched can be used with startAfter to fetch the next page
    //and the first id fetched can be stored then used when going back a page with startAt to fetch the previous page
    axios.get(
      `/api/advertisements/`,
      { params: { type: selectedTab, textSearch: search } })
      .then((res) => {
        const ads: Advertisement[] = res.data;
        setAds(ads);
      }).finally(() => {
        setLoading(false);
      });

  }, [selectedTab, search]);

  const onSearchChange = (search: string) => {
    setSearch(search);
  }

  function handlePaginationChange(e, value) {
    setPage(value);
    console.log(value)
  }

  return (
    <>
      <Head>
        <title>Work 2 Do | Annonser</title>
      </Head>
      <div className='px-8 sm:px-12 md:px-16 lg:px-32 mt-40 md:mt-20'>
        <div>
          <div className='flex flex-row items-center justify-center'>
            <SearchBar
              placeholder='Sök efter jobb'
              onChange={onSearchChange} />
            <FilterButton />
          </div>
          <div className='flex flex-row items-center justify-center'>
            <SelectTypeTabs
              className='w-1/1 mt-10 md:w-1/2'
              tabs={['work', 'labour']}
              selectedTab={selectedTab}
              onSelect={setSelectedTab}
            />
          </div>
          <div className='flex items-center justify-between mt-10'>
            <div className='block md:hidden font-mulish font-semibold text-md mb-2'>
              Nya Jobb
            </div>
          </div>
        </div>
        <div className='md:flex mb-5'>
          <div className='hidden md:block md:w-1/4'>
            <FilterView />
          </div>
          <div className='md:w-1/3 p-1'>
            <div>
              {loading ?
                <div className='flex flex-col items-center'>
                  <ClipLoader
                    color={'#8467AA'}
                    size={60}
                  />
                </div>
                :
                !ads.length ? <p>Inga aktiva annonser för tillfället.</p> :
                  ads.map((ad, index) => {
                    const handleClick = () => { setSelectedAd(ad) };
                    return (
                      <div
                        onClick={handleClick}
                        key={index}>
                        <AdDetail
                          key={index}
                          selectedAd={selectedAd}
                          ad={ad}
                        />
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className='hidden md:block md:w-1/2 p-1'>
            {selectedAd != null ? <AdView ad={selectedAd} /> : ''}
          </div>
        </div>
        <Pagination
          variant='outlined'
          color='primary'
          className='pagination'
          style={{ display: 'flex', justifyContent: 'space-around', margin: 10 }}
          page={page}
          onChange={handlePaginationChange}
          count={5}
        />
      </div>
    </>
  );
}
