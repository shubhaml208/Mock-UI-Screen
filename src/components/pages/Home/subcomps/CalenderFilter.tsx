import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useOnClickOutside from '../../../../hooks/OutsideClick';

const CalenderFilter: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const closer = () => {
        setIsOpen(false);
    }

    const ref = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(isOpen, ref, closer)

    const dates = [
        {title : "Last 30 Days"},
        {title : "Last Month"},
        {title : "Last 6 Months"},
    ]

    return (
        <motion.div className="relative">
            {/* Profile Icon */}
                
                <span ref={ref} onClick={()=>{setIsOpen(!isOpen)}} className='font-semibold cursor-pointer text-gray-600 text-xs px-4 py-1 ring-[1px] ring-gray-200 dark:text-white rounded'>Last 30 Days</span>

            {/* Dropdown Panel */}
            <AnimatePresence
            >
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y:10 }}
                        animate={{ opacity: 1,y : 0}}
                        exit={{ opacity: 0,y:10 }}
                        transition={{ duration: 0.3 }}
                        className="h-min w-40 bg-white shadow-xl dark:bg-black/90 absolute top-[calc(100%+2px)] right-0 shadow-lg  overflow-y-auto overflow-hidden shadow-gray-400/10 rounded-lg z-[79]"
                    >
                        {dates.map((date)=>{
                            return(
                                <p className='font-semibold text-black dark:text-white py-2.5 pl-3 px-4'>{date.title}</p>
                            )
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default CalenderFilter;
