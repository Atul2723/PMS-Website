import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const AreaChart = () => {
  const [chartOptions, setChartOptions] = useState({
    data: [
        { year: 2019, price: 1748.59 },
        { year: 2020, price: 1750.12 },
        { year: 2021,  price:  1383.76},
        { year: 2022,  price: 20308.80},
        { year: 2023,  price: 24713.89 },
        { year: 2024,  price: 43484.89 },
        { year: '', price: 63404.18 },
    ],
    series: [{ type: 'area', xKey: 'year', yKey: 'price' , fill: 'rgba(151,67,65,0.7)'},
    {
        type: 'line',
        xKey: 'year',
        yKey: 'price',
        label: {
          enabled: true,
          fontWeight: 'bold',
          fontSize: 8
        },
        stroke:'#921E31',
        marker:{
          fill:'#921E31'
        }
       
      }

    ],

  });

  return (
    <AgChartsReact options={chartOptions} />
  );
}

export default AreaChart