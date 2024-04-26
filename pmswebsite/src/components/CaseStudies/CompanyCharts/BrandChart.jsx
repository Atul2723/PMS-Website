import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const BrandChart = () => {
  const [chartOptions, setChartOptions] = useState({
    data: [
        { year: '2021', price:  26.50},
        { year: '2022', price:  48.35},
        { year: '2023', price: 271.25},
        { year: '2024',  price:  790.50},
        { year: '',  price: 760.50},
        
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

export default BrandChart