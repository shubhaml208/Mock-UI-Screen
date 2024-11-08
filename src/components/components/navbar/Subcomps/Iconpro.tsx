import React, { useRef, useState } from 'react';
import profileImg from '../../../../assets/profile.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { Cog, CreditCard, User } from 'lucide-react';
import CustomSwitch from '../../switches/Custom';
import useOnClickOutside from '../../../../hooks/OutsideClick';
import useTheme from '../../../../hooks/useTheme';


const Iconpro: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const { toggleDark, isDark } = useTheme()

    const closer = () => {
        setIsOpen(false);
    }

    const ref = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(isOpen, ref, closer)

    return (
        <motion.div className="relative">
            {/* Profile Icon */}
            <span
                        ref={ref}
                className="cursor-pointer rounded-lg flex items-center gap-2 pl-4 p-2 bg-[var(--dark-primary)] dark:bg-black/20"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='block'>
                   <p className='dark:text-white text-white font-light text-[10px]'>rohan@xyx.com</p>
                   <p className='dark:text-white text-white font-semibold text-[14px]'>ELTZ PVT LTD</p>
                </span>
                <img src={profileImg} className="w-8 h-8 rounded-full object-cover" alt="Profile" />
            </span>

            {/* Dropdown Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1,}}
                        exit={{ opacity: 0, }}
                        transition={{ duration: 0.3 }}
                        className="h-min w-64 bg-white cursor-pointer dark:bg-black/90 absolute top-[calc(100%+4px)] right-0 shadow-lg  overflow-y-auto overflow-hidden shadow-gray-400/10 rounded-xl"
                    >
                        <div className="divide-y dark:divide-white/50">
                            <div className='space-y-3  p-4'>
                                <span className='flex items-center gap-2'>
                                    <CreditCard className="dark:text-white" />
                                    <p className='text-black dark:text-white font-normal'>Bilings</p>
                                </span>
                                <span className='flex items-center gap-2'>
                                    <Cog className="dark:text-white" />
                                    <p className='text-black dark:text-white font-normal'>Settings</p>
                                </span>
                                <span className='flex items-center gap-2'>
                                    <User className="dark:text-white" />
                                    <p className='text-black dark:text-white font-normal'>My Profile</p>
                                </span>
                            </div>
                            <div className='space-y-2 p-4'>
                                <span className='flex items-center justify-between gap-2'>
                                    <p className='text-black dark:text-white font-normal'>Dark Mode</p>
                                    <CustomSwitch checked={isDark} onClick={toggleDark} />
                                </span>
                            </div>
                            <div className='space-y-2  p-4'>
                                <span className='flex items-center gap-2'>
                                    <p className='text-black dark:text-white font-normal'>Customize</p>
                                </span>
                                <span className='flex items-center gap-2'>
                                    <p className='text-black dark:text-white font-normal'>Manage Team</p>
                                </span>
                                <span className='flex items-center gap-2'>
                                    <p className='text-black dark:text-white font-normal'>Sign Out</p>
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Iconpro;
