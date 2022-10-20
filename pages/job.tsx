import { Advertisement } from './../util/models';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import SearchBar from '../components/Ad/SearchBar';
import FilterButton from '../components/Ad/FilterButton';
import AdDetail from '../components/Ad/AdDetail';
import FilterView from '../components/Ad/FilterView';
import AdView from '../components/Create-Ad/AdView';
import ToggleButton from '../components/Ad/ToggleButton';
import SelectTypeTabs from '../components/Ad/SelectTypeTabs';
import { Pagination } from '@mui/material';
import axios from "axios";
import { ClipLoader } from 'react-spinners';


export default function Job() {
  const [selectedTab, setSelectedTab] = useState<string>('Sök Jobb');
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [selectedAd, setSelectedAd] = useState<Advertisement | null>(null);

  useEffect(() => {
    //Fetch first visible page
    let query = `/api/advertisements/?amount=10`;
    //startAt and startAfter parameters can be used for paging if kept track of.
    //When the forwards arrow is pressed the last id fetched can be used with startAfter to fetch the next page
    //and the first id fetched can be stored then used when going back a page with startAt to fetch the previous page
    axios.get(query).then((res) => {
      const ads: Advertisement[] = res.data;
      setAds(ads);
      console.log(ads)
    }).finally(() => {
      setLoading(false);
    });

  }, [page]);
  const showAds = () => {
    return ads.map((ad, index) => {
      return (
        <div>
          <AdDetail
            key={index}
            ad={ad}
          />
        </div>
      );
    });
  };

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
            <SearchBar placeholder='Sök efter jobb' />
            <FilterButton />
          </div>
          <div className='flex flex-row items-center justify-center'>
            <SelectTypeTabs
              className='w-1/1 mt-10 md:w-1/2'
              tabs={['Sök Jobb', 'Arbetskraft']}
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
                ads.map((ad, index) => {
                  const handleClick = () => { setSelectedAd(ad) };
                  return (
                    <div onClick={handleClick}>
                      <AdDetail
                        key={index}
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
