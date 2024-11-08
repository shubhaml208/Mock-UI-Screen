import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import logo from '../../../assets/logo.png'
import { Book, Box, ChartArea, CircleHelp, Cog, Receipt, Share, ShoppingBagIcon } from 'lucide-react';
const Sidebar: React.FC = () => {

    const isSidebarCollapsed = useSelector((state: RootState) => state.app.sidebarCollapse);

    const menus = [
        { title: "dashboard",icon:Box },
        { title: "products", icon: Book },
        { title: "customers", icon: Receipt },
        { title: "orders", icon: Share },
        { title: "reports", icon: ChartArea },
        { title: "settings", icon: ShoppingBagIcon },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: isSidebarCollapsed ? 0 : 1, width: isSidebarCollapsed ? 0 : '8%' }}
            transition={{ duration: 0.3, type: "spring" }} className={`h-full ${isSidebarCollapsed ? 'p-0' : 'p-4 border-r'} lg:flex md:hidden sm:hidden space-y-4 items-center flex-col justify-between overflow-hidden dark:bg-black/90 dark:border-white/30`}
        >
            <div className='space-y-4'> 
            <span>
                <img src={logo} alt="" />
            </span>

            <div className='space-y-4 '>
                {menus.map((item,idx)=>{
                    return(
                        <motion.div
                            key={idx}
                            className={`
                                ${idx === 0 ? "bg-[var(--primary)] rounded text-white" : ""}
                                flex items-center justify-center
                                p-2 text-sm py-2.5 font-medium text-gray-500 dark:text-white transition-all duration-300 ${isSidebarCollapsed? 'hidden' : ''}`}
                        >
                            <item.icon className=" !stroke-2" />
                        </motion.div>
                    )
                })}
            </div>
            </div>

            <div className='space-y-4 divide-y flex items-center flex-col'>
                <CircleHelp className="!w-7 !h-7 bg-[var(--primary)] rounded-full text-white" />
                <Cog className="!w-12 dark:text-white pt-4 !h-12 " />
            </div>
        </motion.div>
    );
};

export default Sidebar;
