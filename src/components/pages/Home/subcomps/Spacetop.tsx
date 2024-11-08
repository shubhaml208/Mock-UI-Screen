import React from 'react';
import logoSpace from '../../../../assets/userlog.png'
import CalenderFilter from './CalenderFilter';
const Spacetop: React.FC = () => {
    return (
        <div className='flex justify-between dark:bg-black/90 px-4 py-4'>
            <div className=' flex items-center gap-4'>
                <img src={logoSpace} alt="" />
                <span className='flex gap-1 space-y-[3px] space-x-2'>
                <span>
                   <p className='dark:text-white text-black font-semibold text-lg'>Hello, Rahul</p>
                   <p className='dark:text-white text-gray-500 font-semibold text-[10px]'>ELTZ PVT LTD</p>
                </span>
                <span className='font-medium text-white bg-[var(--primary)] px-3 py-1 rounded text-xs h-min'>Customer</span>
                </span>
            </div>
            <CalenderFilter />
        </div>
    );
};

export default Spacetop;