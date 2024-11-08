import React from 'react';
import mapView from '../../../../assets/Rectangle 145 (1).png'
import { ArrowRight, Navigation, SlidersHorizontal } from 'lucide-react';
import truck from '../../../../assets/Group 712.png'
const ShippingAnalytics: React.FC = () => {
    return (
        <div className='grid lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 gap-2'>
            <div className='p-4 space-y-4 col-span-2 flex flex-col n'>
            <span className='flex items-center justify-between'>
            <p className='font-semibold text-sm'>Shipping Ananlytics</p>
            <span className='ring-[1px] sticky top-0 left-0 inline-block w-max px-4 py-1 bg-[var(--gray)] dark:text-white dark:bg-black/50 ring-gray-200 rounded-md font-medium flex gap-2 items-center'>
                <SlidersHorizontal className="!size-4" />
                <p>Filters</p>
            </span>
            </span>
            <div className='space-y-4 h-80 overflow-y-auto'>
                {Array(10).fill(1).map((item,idx)=>{
                    return(
                        <div className='bg-[var(--gray)] flex dark:bg-black/90 justify-between p-4 relative'>
                            <span className='space-y-2'>
                                <p className='font-light text-gray-600 text-[10px] leading-[12px]'>Shipment ID</p>
                                <p className='font-bold text-lg leading-[16px]'>#00{Math.floor(Math.random() * 69)}55MNP</p>
                                <span className='flex items-center gap-3'>
                                    <span className='flex items-center gap-2'>
                                    <span className='w-[16px] h-[16px] bg-green-500 block ring-2 rounded-full ring-green-100 block'></span>
                                    <p className='font-light text-gray-600 text-[10px] leading-[12px]'>87 Some Address</p>
                                    </span>
                                    <ArrowRight />
                                    <span className='flex items-center gap-2'>
                                    <Navigation className='!w-[16px] !h-[16px] p-1 text-white bg-[#4F45E4] block ring-2 rounded-full ring-[#C6D7E7] block' />
                                    <p className='font-light text-gray-600 text-[10px] leading-[12px]'>34 Some Address</p>
                                    </span>
                                </span>
                            </span>
                            <span className='absolute top-2 right-2'>
                                <img src={truck}  alt="" />
                            </span>
                        </div>
                    )
                })}
            </div>
            </div>
            <div className='p-4 space-y-2 col-span-3 flex flex-col justify-between'>
                <p className='ring-[1px] inline-block w-max px-3 py-1 bg-[var(--gray)] dark:bg-black/50 dark:ring-gray-100 ring-gray-200 rounded-full font-medium text-gray-400'>ID : <strong className='text-gray-500 font-medium'>#03455MNP</strong></p>
                <img src={mapView} className='w-full h-64 object-cover overflow-hidden rounded-lg' alt="" />
                <div className="grid lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 gap-4 lg:divide-x">
                    <div className=''>
                        <p className="text-gray-500 text-sm">Shipment ID</p>
                        <p className="font-semibold">#0124BCD</p>
                    </div>
                    <div className='px-4'>
                        <p className="text-gray-500 text-sm">Category</p>
                        <p className="font-semibold">Electronics</p>
                    </div>
                    <div className='px-4'>
                        <p className="text-gray-500 w-max text-sm">Total Weight</p>
                        <p className="font-semibold">329 kg</p>
                    </div>
                    <div className='px-4'>
                        <p className="text-gray-500 text-sm">Destination</p>
                        <p className="font-semibold">Bangalore</p>
                    </div>
                    <div className='px-4'>
                        <p className="text-gray-500 text-sm w-min">Est.Arrival</p>
                        <p className="font-semibold">2 Hrs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingAnalytics;