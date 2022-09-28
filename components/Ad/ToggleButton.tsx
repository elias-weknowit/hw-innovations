import React from 'react';

export default function ToggleButton() {
  return (
    <div className='inline-flex rounded-full' style={{ background: '#f3f3f4' }}>
      <a
        href='javascript:void(0)'
        className='
        py-[10px]
        sm:py-3
        px-[12px]
        sm:px-6
        inline-flex
        items-center
        justify-center
        font-bold 
        border-shadow
        text-center text-white text-sm background-white
        sm:text-base
        ransition-all
        hover:bg-primary hover:text-black hover:border-primary
        rounded-full
        focus:shadow-outline        
       '>
        Sök jobb
      </a>
      <a
        href='javascript:void(0)'
        className='
       py-[10px]
       sm:py-3
       px-[12px]
       sm:px-6
       inline-flex
       items-center
       justify-center
       font-bold 
       border-black
       text-center text-white text-sm background-white
       sm:text-base
       ransition-all
       hover:bg-primary hover:text-black hover:border-primary
       rounded-full
       '>
        Arbetskraft
      </a>
    </div>

    // <div>
    //   <label
    //     htmlFor="large-toggle"
    //     classNameName="inline-flex relative items-center cursor-pointer"
    //   >
    //     <input
    //       type="checkbox"
    //       value=""
    //       id="default-toggle"
    //       classNameName="sr-only peer"
    //     />
    //     <div classNameName="w-11 h-6 bg-primary-color peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
    //     <span classNameName="labels text-white" data-on="ON" data-off="OFF"></span>
    //   </label>
    // </div>
  );
}
