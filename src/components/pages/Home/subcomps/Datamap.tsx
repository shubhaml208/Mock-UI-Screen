
import React, { useEffect } from 'react';
import datamapImg from '../../../../assets/image 9.png'
const Datamap: React.FC = () => {
    return (
        <div className='p-4 lg:col-span-2 gap-2 flex flex-col justify-between'>
            <span className='flex items-center justify-between'>
            <p className='font-semibold text-sm dark:text-white text-black'>Spotlight</p>
            <p className='ring-[1px] w-max px-4 py-1 dark:text-white bg-[var(--gray)] text-xs font-semibold dark:bg-black/90 dark:text-white text-black ring-[1px] ring-black/5 rounded-md'>All Region</p>
            </span>
            <div id='hs-users-datamap' className='hs-users-datamap h-full relative'>
                <img src={datamapImg} className='h-full object-cover' alt="" />
            </div>
        </div>
    );
};

export default Datamap;