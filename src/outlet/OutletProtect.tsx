import React from 'react';
import Navbar from '../components/components/navbar/Navbar';
import Sidebar from '../components/components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const OutletProtect: React.FC = () => {
    return (
        <div className='flex h-screen w-full'>
            <Sidebar />
            <div className='w-full h-full overflow-y-auto'>
                <Navbar />
                <Outlet />
            </div>
        </div>

    );
};

export default OutletProtect;