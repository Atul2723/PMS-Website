import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const BBChart = () => {
  const [chartOptions, setChartOptions] = useState({
    data: [
        { year: 2019, price: 47.00 },
        { year: 2020, price: 37.50},
        { year: 2021,  price:  53.50},
        { year: 2022,  price: 175.00},
        { year: 2023,  price: 235.00 },
        { year: 2024,  price:280.00},
        { year: '', price: 264.45},
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

export default BBChart