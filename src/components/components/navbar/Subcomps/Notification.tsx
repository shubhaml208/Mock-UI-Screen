import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useOnClickOutside from '../../../../hooks/OutsideClick';
import { Bell, CalendarSearch } from 'lucide-react';

const Notification: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const closer = () => {
        setIsOpen(false);
    }

    const ref = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(isOpen, ref, closer)

    return (
        <motion.div className="relative">
            {/* Profile Icon */}

            <Bell ref={ref} onClick={() => { setIsOpen(!isOpen) }} className="!stroke-2 text-white" />

            {/* Dropdown Panel */}
            <AnimatePresence>
    {isOpen && (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="h-80 w-80 bg-white shadow-xl dark:bg-black/90 absolute top-[calc(100%+4px)] lg:right-0 md:-right-[100%] md:translate-x-1/2 sm:-translate-x-1/2 shadow-lg overflow-y-auto overflow-hidden shadow-gray-400/10 rounded-lg z-[79]"
        >
        </motion.div>
    )}
</AnimatePresence>

        </motion.div>
    );
};

export default Notification;
