import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, ShoppingCart, TrendingUpIcon, WalletCards } from 'lucide-react';
import React from 'react';
const Cards: React.FC = () => {
    return (
        <div className='px-4 py-4 grid lg:grid-cols-4 gap-4 dark:bg-black/90'>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='bg-white dark:bg-black/20 flex justify-between p-4 space-y-1 rounded-xl ring-[1px] ring-black/5'>
                <div className='space-y-1.5'>
                    <p className='font-medium text-gray-400'>Payment Recievables</p>
                    <span className='flex items-end gap-1'>
                        <p className='text-[var(--primary)] text-2xl !font-bold'>₹23,19,000</p>
                        <span className='flex items-end pb-1 text-green-500'>
                            <p className=' text-[14px] !font-medium'>+3.87%</p>
                            <ArrowUpRight className="!stroke-2 !h-[14px] !w-[14px]" />
                        </span>
                    </span>
                    <p className='font-normal text-gray-400'>Overdue Payments : ₹23,19,000</p>
                </div>
                <Briefcase className="text-green-400 bg-green-400/20 rounded-lg !w-8 !h-8 p-2 !stroke-2" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='bg-white dark:bg-black/20 flex justify-between p-4 space-y-1 rounded-xl ring-[1px] ring-black/5'>
                <div className='space-y-1.5'>
                    <p className='font-medium text-gray-400'>Payment Made</p>
                    <span className='flex items-end gap-1'>
                        <p className='text-[var(--primary)] text-2xl !font-bold'>₹9,50,000</p>
                    </span>
                    <p className='font-normal text-gray-400'>Next Week Due Payment : 1 Week</p>
                </div>
                <WalletCards className="text-[#0065BE] bg-[#EDEDFC] bg-blue-100/20 rounded-lg !w-8 !h-8 p-2 !stroke-2" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='bg-white dark:bg-black/20 flex justify-between p-4 space-y-1 rounded-xl ring-[1px] ring-black/5'>
                <div className='space-y-1.5'>
                    <p className='font-medium text-gray-400'>Total Purchases</p>
                    <span className='flex items-end gap-1'>
                        <p className='text-[var(--primary)] text-2xl !font-bold'>₹15,19,000</p>
                        <span className='flex items-end pb-1 text-green-500'>
                            <p className=' text-[14px] !font-medium'>+3.87%</p>
                            <ArrowUpRight className="!stroke-2 !h-[14px] !w-[14px]" />
                        </span>
                    </span>
                    <p className='font-medium text-gray-400'>Suppliers : 6</p>
                </div>
                <ShoppingCart className="text-green-400 bg-green-400/20 rounded-lg !w-8 !h-8 p-2 !stroke-2" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='bg-white dark:bg-black/20 flex justify-between p-4 space-y-1 rounded-xl ring-[1px] ring-black/5'>
                <div className='space-y-1.5'>
                    <p className='font-medium text-gray-400'>Total Sales</p>
                    <span className='flex items-end gap-1'>
                        <p className='text-[var(--primary)] text-2xl !font-bold'>18,19,000</p>
                        <span className='flex items-end pb-1 text-green-500'>
                            <p className=' text-[14px] !font-medium'>+3.87%</p>
                            <ArrowUpRight className="!stroke-2 !h-[14px] !w-[14px]" />
                        </span>
                    </span>
                    <p className='font-medium text-gray-400'>Top Selling Product : Electronics</p>
                </div>
                <TrendingUpIcon className="text-[#B282F4] bg-[#F2E9FD] dark:bg-violet-100/10 rounded-lg !w-8 !h-8 p-2 !stroke-2" />
            </motion.div>

        </div>
    );
};

export default Cards;