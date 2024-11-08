import { PanelRightDashed, Search } from 'lucide-react';
import React from 'react';
import { useAppDispatch } from '../../../store/store';
import { sidebarCollapser } from '../../../store/indexes/App';
import Iconpro from './Subcomps/Iconpro';
import Calender from './Subcomps/Calender';
import Notification from './Subcomps/Notification';
import Settings from './Subcomps/Settings';

const Navbar: React.FC = () => {

    const dispatch = useAppDispatch()
    
    return (
        <div className={`flex bg-[var(--primary)] items-center w-full sticky top-0 left-0 z-50 justify-between px-4 p-4 border-b dark:bg-black/90 dark:border-white/30`}>
            <div className='flex items-center gap-4'>
                <PanelRightDashed 
                className="text-white dark:text-white"
                onClick={()=>{
                    dispatch(sidebarCollapser())
                }}
                strokeWidth={1} size={20} />
                <span className='lg:flex md:hidden sm:hidden p-2 text-white bg-[var(--dark-primary)] dark:bg-black/20 items-center gap-2 rounded-md'>
                    <Search />
                    <input placeholder='Search' className='bg-transparent  focus:outline-0  placeholder:text-white font-normal focus:border-0 w-80' type="text" />
                </span>
            </div>
            <div className='flex items-center gap-3'>
                <Calender />
                <Settings />
                <Notification />
                <Iconpro />
            </div>
        </div>
    );
};

export default Navbar;