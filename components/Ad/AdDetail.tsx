import React, { useEffect } from 'react';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Image, { StaticImageData } from 'next/image';
import { IconButton } from '@mui/material';
import { Advertisement, User } from '../../util/models';
import moment from 'moment';
import logo from '../../public/Logo.svg';
import loadingPlaceholderImage from '../../public/gray.jpeg';
import axios from 'axios';

interface AdDetailsProp {
  ad: Advertisement;
  selectedAd: Advertisement | null;
  // onClick: () => void;
}

export default function AdDetail({ ad, selectedAd }: AdDetailsProp
) {
  const [isSelected, setIsSelected] = React.useState(false);
  const [loadingUser, setLoadingUser] = React.useState(true);
  const [user, setUser] = React.useState<User>(null);

  useEffect(() => {
    if (!ad.creatorId) return
    axios.get(`/api/users/${ad.creatorId}`).then(res => {
      setLoadingUser(false);
      setUser(res.data);
      return;
    })

    setLoadingUser(false);
  }, []);

  useEffect(() => {
    setIsSelected(ad.id === selectedAd?.id);
  }, [selectedAd]);

  return (
    <div className={`${isSelected ? "bg-primary-color" : "bg-profile-sections hover:bg-primary-color-hover"} shadow-md rounded-md p-4 mb-3 cursor-point`}>
      {/**Company img and edit button */}

      <div className='flex flex-row justify-between items-center '>
        <div className='block bg-black bg-opacity-40 rounded-full w-12 h-12 items-center justify-center text-white overflow-hidden'>
          <Image alt={'Logo'} src={(loadingUser || user == null) ? loadingPlaceholderImage : user.photoURL} layout="intrinsic" objectFit="cover" width="100%" height="100%" />
        </div>
      </div>
      {/**Description and place */}
      <div>
        <div>
          <p className='text-md font-mulish font-semibold'>{ad.title}</p>
        </div>
        <div className='flex flex-row'>
          <div>
            <p className='text-md text-black font-mulish text-opacity-70'>
              {ad.company}            </p>
          </div>
          <p className='font-mulish ml-1 mr-1 text-black text-opacity-70'>.</p>
          <div>
            <p className='text-md font-mulish text-black text-opacity-70'>
              {ad.location}
            </p>
          </div>
        </div>
      </div>
      {/**Ad: nr of empolyee, available and typ of work */}
      <div className='flex flex-row mt-3 mb-2 items-start'>
        <div className='bg-profile-available rounded-lg p-1 mr-2'>
          <p className='font-mulish mx-3 text-sm'>{ad.amount} st</p>
        </div>
        <div className='bg-profile-available rounded-lg p-1 mr-2'>
          <p className='font-mulish mx-1 text-sm'>12 aug -</p>
        </div>

        {/** 
          <div className="bg-profile-available rounded-lg p-1 mr-2">
            <p className="font-mulish mx-1 text-sm">
              Till {moment(ad.period.end).format("YYYY-MM-DD")}
            </p>
          </div>
          */}
      </div>
      {/**Time of post */}
      <div className='flex'>
        <p className='font-mulish text-black text-opacity-70 text-sm'>
          {
            //@ts-ignore
            moment.unix(ad.createdAt.seconds).fromNow()
          }
        </p>
      </div>
    </div>
  );
}
