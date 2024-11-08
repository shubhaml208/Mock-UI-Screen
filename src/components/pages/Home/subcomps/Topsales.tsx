import React from 'react';

const Topsales: React.FC = () => {

    const data = [
        { title : "Automotive Parts",unit:"850" },
        { title : "Electronics Parts",unit:"500" },
        { title : "Steel Sheets",unit:"700" },
        { title : "Office Equipments",unit:"300" },
        { title : "Plastic Materials",unit:"600" },
    ]

    return (
        <div className='p-4'>
            <span className='flex items-center justify-between'>
            <p className='font-bold dark:text-white text-sm'>Top Items Sold</p>
            <span className='p-1 flex items-center gap-2 bg-[var(--gray)] dark:bg-black/90 dark:text-white rounded-full '>
                <p className='font-medium text-[13px] px-4 py-1'>Value</p>
                <p className='font-medium text-[13px] bg-[var(--primary)] rounded-full text-white px-4 py-1'>Vol</p>
            </span>
            </span>

            <div className='space-y-4 mt-4'>
                {data.map((item,idx)=>{return(
                    <div className='p-4 bg-[var(--gray)] dark:bg-black/20 dark:text-white flex items-center justify-between rounded-xl'>
                    <div className='bg-[var(--gray)] dark:bg-black/50 flex items-center gap-2'>
                    <p className='font-semibold text-sm'>#{idx + 1}</p>
                    <p className='font-medium text-sm'>{item.title}</p>
                    </div>
                    <span className='font-semibold text-[12px] ring-[1px] px-2 ring-black/10 rounded-lg'>{item.unit} Units</span>
                </div>
                )})}
            </div>
        </div>
    );
};

export default Topsales;