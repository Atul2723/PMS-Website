import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { MdArrowCircleRight } from 'react-icons/md';
import AreaChart from './AreaChart';
import ChartHeader from './ChartHeader';
import SensexChart from './SensexChart';

// Chart Component
const ScopeOfReturns = () => {
  const [chartOptions, setChartOptions] = useState({
    data: [
      { year: 2012, returns: 100 },
      { year: 2013, returns: 210.1 },
      { year: 2014, returns: 735.88 },
      { year: 2015, returns: 748.48 },
      { year: 2016, returns: 765.32 },
      { year: 2017, returns: 1288.88 },
      { year: 2018, returns: 1854.24 },
      { year: 2019, returns: 1757.83 },
      { year: 2020, returns: 1391.48 },
      { year: 2021, returns: 1590.71 },
      { year: 2022, returns: 14453.47 },
      { year: 2023, returns: 46528 },
    ],
    series: [{
      type: 'bar',
      xKey: 'year',
      yKey: 'returns',
      fill: 'rgba(151,67,65,0.7)',

    },
    {
      type: 'line',
      xKey: 'year',
      yKey: 'returns',
      stroke:'rgb(151,67,65)',

      marker: {
        // fill: '#1E4D92'
        size: 0 // Hide markers
      },
      label: {
        enabled: true,
        fontWeight: 'bold',
        fontSize: 8
      },
      data: [
        { year: 2012, returns: 100 }, // Start point of the line (null y-value)
        { year: 2023, returns: 46528 } // End point of the line (null y-value)
      ],
    }],







  });

  return (
    <>
      <div className='scope-of-returns'>
        <div className='scope-of-returns-header'>
          <h1 data-aos='fade-up'  data-aos-delay="100">Scope Of Returns</h1>
          <p data-aos='fade-up'  data-aos-delay="100">SME Stocks Emerge as Prime Candidates for Astute Investors, Offering Substantial Returns and Growth Potential.</p>


        </div>
        <div className='container'>

          <div className='row chart-row'>
            <div className='col-lg-6 chart-list-col'>
              <h3 data-aos='fade-up'  data-aos-delay="100">There has never been a better time to buy SME stocks than Now</h3>

              <ul data-aos='fade-up'  data-aos-delay="100">
                <li><MdArrowCircleRight className='desc-icon' />Stocks listed on the SME platforms of BSE and NSE have already drawn deep pocketed investors because of the massive returns they have generated
                </li>
                <li><MdArrowCircleRight className='desc-icon' />Power of investment in SME and keeping faith:</li>
                <li className='italic-font'><MdArrowCircleRight className='desc-icon' />If you had invested INR 1 Lakh in 2012 in the SME Index, your wealth would have increased to ~ INR 5.5 Cr now…!!</li>


              </ul>

            </div>
            <div className='col-lg-6 charts-col ' data-aos='fade-up'  data-aos-delay="100">
              <ChartHeader heading='BSE SME IPO INDEX' />

              <div className='charts-line-content'>
                <h3 >CAGR: ~174.79%</h3>
              </div>
              <div className='charts-container'>
                <AgChartsReact options={chartOptions} />
              </div>
            </div>
          </div>

          <div className='row sensex-row'>
            <h1 data-aos='fade-up'  data-aos-delay="100">5 Year Returns</h1>
            <div className='col-lg-6 sensex-col' data-aos='fade-up'  data-aos-delay="100">
              <h3><strong>SME IPO :-</strong> 3073%</h3>
              <ChartHeader heading='S&P BSE SME IPO Index' />
              <div className='charts-container' data-aos='fade-up'  data-aos-delay="100">
                <AreaChart />
              </div>
            </div>
            
            <div className='col-lg-6 sensex-col' data-aos='fade-up'  data-aos-delay="100">
              <h3><strong>SENSEX :-</strong> 98.64%</h3> 
              <ChartHeader heading='BSE SENSEX' />
              <div className='charts-container' data-aos='fade-up'  data-aos-delay="100">
                <SensexChart />
              </div>

            </div>
          </div>
          <div className='sensex-content'>
            <ul data-aos='fade-up'  data-aos-delay="100">
              <li><MdArrowCircleRight className='desc-icon'/>An investment of Rs 1 Lakh into the Nifty 50 index a year ago would have yield Rs 1.21 Lakhs today. In contrast, the same investment in the S&P BSE SME IPO index would have yield Rs 2.24 Lakhs.</li>
              <li><MdArrowCircleRight className='desc-icon'/>Over the past 5 years, the S&P BSE SME IPO index grew almost 30 times, whereas the BSE Sensex grew just under 2 times.</li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}

export default ScopeOfReturns