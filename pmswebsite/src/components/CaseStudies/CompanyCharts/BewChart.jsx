import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const BewChart = () => {
  const [chartOptions, setChartOptions] = useState({
    data: [
        { year: '', price:  127.60},
        { year: 'Oct 2021', price:  319.45},
        { year: 'Mar 2022', price: 772.72},
        { year: 'Aug 2022',  price:  965.00},
        { year: 'Jan 2023',  price: 621.50},
        { year: 'Jun 2023',  price: 1200.00 },
        { year: '  ',  price: 1728.25},
        { year: 'Nov 2023',  price: 1610.25 },
        { year: ' ', price: 1595.00},
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

export default BewChart