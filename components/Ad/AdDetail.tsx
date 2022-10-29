import React, { useEffect } from 'react';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Image, { StaticImageData } from 'next/image';
import { IconButton } from '@mui/material';
import { Advertisement } from '../../util/models';
import moment from 'moment';
import logo from '../../public/Logo.svg';

interface AdDetailsProp {
  ad: Advertisement;
  selectedAd: Advertisement | null;
  // onClick: () => void;
}

export default function AdDetail({ ad, selectedAd }: AdDetailsProp
) {
  const [isSelected, setIsSelected] = React.useState(false);

  useEffect(() => {
    setIsSelected(ad.id === selectedAd?.id);
    console.log(ad.id)
  }, [selectedAd]);

  return (
    <div className={`${isSelected ? "bg-primary-color" : "bg-profile-sections hover:bg-primary-color-hover"} shadow-md rounded-md p-4 mb-3 cursor-point`}>
      {/**Company img and edit button */}

      <div className='flex flex-row justify-between items-center '>
        <div className='items-center'>
          <Image alt={'Logo'} src={logo} width='50%' height='50%' />
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
          25 minuter sedan
        </p>
      </div>
    </div>
  );
}
