"use client"

import { BarChart } from "../../../components/charts/Barchart"

const chartdata = [
    {
        date: "Mon",
        Sales: 2890,
        Purchases: 2338,
    },
    {
        date: "Tues",
        Sales: 2756,
        Purchases: 2103,
    },
    {
        date: "Wed",
        Sales: 3322,
        Purchases: 2194,
    },
    {
        date: "Thurs",
        Sales: 3470,
        Purchases: 2108,
    },
    {
        date: "Fri",
        Sales: 3475,
        Purchases: 1812,
    },
    {
        date: "Sat",
        Sales: 3129,
        Purchases: 1726,
    },
    {
        date: "Sun",
        Sales: 3490,
        Purchases: 1982,
    },
]

export const BarChartHero = () => (
    <div className="h-full bg-white dark:bg-black/20 p-4 rounded">
        <div className="flex justify-between">
        <span>
        <p className="text-sm text-gray-700 font-semibold dark:text-gray-300">
        Inventory Overview
      </p>
      <p className="mt-2 text-xs font-medium text-gray-400 dark:text-gray-50">
      In-Stock Products: <strong>3,200 Units</strong>
      </p>
        </span>
      <span className='p-1 h-min flex items-center gap-2 bg-[var(--gray)] dark:bg-black/90 dark:text-white rounded-full '>
                <p className='font-medium text-[13px] px-4 py-1'>Week</p>
                <p className='font-medium text-[13px] bg-[var(--primary)] rounded-full text-white px-4 py-1'>Month</p>
            </span>

        </div>
    <BarChart
        className="h-80"
        data={chartdata}
        index="date"
        barCategoryGap={5}
        colors={['primary', 'primarylight']}
        categories={["Sales", "Purchases"]}
        valueFormatter={(number: number) =>
            `$${Intl.NumberFormat("us").format(number).toString()}`
        }
        showGridLines={true}
        showYAxis={false}
        showXAxis={true}
        yAxisLabel="Total Items (in 1000s)"
        onValueChange={(v) => console.log(v)}
        />
        </div>
)