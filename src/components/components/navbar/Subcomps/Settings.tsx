import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useOnClickOutside from '../../../../hooks/OutsideClick';
import { Bell, CalendarSearch, Cog } from 'lucide-react';

const Settings: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const closer = () => {
        setIsOpen(false);
    }

    const ref = useRef<HTMLDivElement | null>(null);

    useOnClickOutside(isOpen, ref, closer)

    return (
        <motion.div className="relative">
            {/* Profile Icon */}

            <Cog ref={ref} onClick={() => { setIsOpen(!isOpen) }} className="!stroke-2 text-white" />

            {/* Dropdown Panel */}
            <AnimatePresence
            >
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="h-80 w-80 bg-white shadow-xl dark:bg-black/90 absolute top-[calc(100%+4px)] right-0 shadow-lg  overflow-y-auto overflow-hidden shadow-gray-400/10 rounded-lg z-[79]"
                    >
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Settings;