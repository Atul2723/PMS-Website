import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const SensexChart = () => {
    const [chartOptions, setChartOptions] = useState({
        data: [
            { year: 2019, price: 39067.33 },
            { year: 2020, price: 41464.61 },
            { year: 2021, price: 46973.79 },
            { year: 2022, price: 58253.61 },
            { year: 2023, price: 60840.74 },
            { year: 2024, price: 72026.15 },
            { year: '', price: 73648.62 },
        ],
      series: [{ type: 'area', xKey: 'year', yKey: 'price', fill:'rgba(151,67,65,0.7)' },
        {
            type: 'line',
            xKey: 'year',
            yKey: 'price',
            label: {
                enabled: true,
                fontWeight: 'bold',
                fontSize: 8
            },
            marker:{
                fill:'#921E31'
            },
            stroke:'#921E31'

        },
        

        ],

    });

    return (
        <AgChartsReact options={chartOptions} />
    );
}

export default SensexChart