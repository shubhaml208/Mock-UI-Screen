import React from 'react';
import Spacetop from './subcomps/Spacetop';
import Cards from './subcomps/Cards';
import { BarChartHero } from './subcomps/Barchart';
import ShipmentAnalytics from './subcomps/ShippingAnalytics';
import Datamap from './subcomps/Datamap';
import Topsales from './subcomps/Topsales';
import Toppurchase from './subcomps/Toppurchase';

const Home: React.FC = () => {

    return (
        <div className='divide-y dark:divide-white/30 overflow-y h-full'>
            <Spacetop />
            <div>
                <Cards />
                <div className={`w-full h-full space-y-4 px-4 py-0 overflow-y-auto dark:bg-black/90`}>
                    <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:gap-4'>
                        <div className='h-max '><BarChartHero /></div>
                        <div className='h-full overflow-hidden w-full col-span-2 rounded-lg bg-white dark:bg-black/20 dark:text-white'>
                            <ShipmentAnalytics />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-2 bg-white lg:divide-x p-2 dark:bg-black/20'>
                        <Datamap />
                        <Topsales />
                        <Toppurchase />
                    </div>
                    <div className='border container-pattern h-80 w-full rounded-lg'></div>
                    <div className='border container-pattern h-80 w-full rounded-lg'></div>
                </div>
            </div>
        </div>
    );
};

export default Home;