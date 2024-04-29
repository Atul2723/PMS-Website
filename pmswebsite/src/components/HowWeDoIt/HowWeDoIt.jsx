import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './HowWeDoIt.css'

import React from 'react'

const HowWeDoIt = () => {
    return (
        <>
            <div className='timeline-heading'>
                <div className='container'>
                    <div className='row timeline-heading-row'>
                        <div className='col-lg-6 timeline-heading-details'>
                            <h1  data-aos='fade-up'  data-aos-delay="100">How We Do It?</h1>
                            <p  data-aos='fade-up'  data-aos-delay="100">At NNM Amritkal Fund, we follow a comprehensive approach to investment management. Our process involves meticulous planning, thorough research, and disciplined execution. We begin by analyzing market trends, identifying potential opportunities, and assessing risks. Our team of experts then crafts tailored investment strategies to optimize returns while mitigating risks. </p>
                        </div>
                        <div className='col-lg-6 timeline-heading-img'>
                            <img  data-aos='fade-up'  data-aos-delay="100" src='/process.svg' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='vertical-container'>
                <h3 className='text-center text-white steps-heading'  data-aos='fade-up'  data-aos-delay="100">Steps:</h3>
                <VerticalTimeline className='vertical-timeline' lineColor='white' layout='2-columns' >
                    <VerticalTimelineBox heading='SME Company Identification' paragraph=' Identification of growth industries and companies in each sector with quality products and strong financials indicating growth potential' icon='1' />
                    <VerticalTimelineBox heading='Due Diligence and Analysis  ' paragraph='Our plan is to invest early in right growth opportunity businesses with a track record of generating revenues and a sound plan for scalability which can yield outsized returns over time. Company Analysis include Fundamental and Technical Analysis. The companies are selected based on the feasibility, scalability and complete in-depth analysis of the company' icon='2' />
                    <VerticalTimelineBox heading='Company Selection' paragraph=' Identification of growth industries and companies in each sector with quality products and strong financials indicating growth potential' icon='3' />
                    <VerticalTimelineBox heading='SME IPO' paragraph=' Identification of growth industries and companies in each sector with quality products and strong financials indicating growth potential' icon='4' />
                    <VerticalTimelineBox heading='Reporting and Controlling' paragraph='We track the utilization of Funds. In case of any divergence, we discuss with the promoters and align their updated goals with our investments.' icon='5' />
                    <VerticalTimelineBox heading='Continuous Handholding' paragraph=' Identification of growth industries and companies in each sector with quality products and strong financials indicating growth potential' icon='6' />
                    <VerticalTimelineBox heading='Wealth Creation' paragraph='It does not STOP here. This is the first step towards wealth creation' icon='7' />
                    <VerticalTimelineBox heading='Investing' paragraph='We may invest at the time of the IPO. We carry out Underwriting and Market Making activities  for such companies to maintain transparency. We also participate in the process of fundraise through our own funds.' icon='8' />
                    <VerticalTimelineBox heading='Advisory for new opportunities' paragraph='We identify growth opportunities and advise the companies accordingly' icon='9' />
                    <VerticalTimelineBox heading='Mainboard Migration' paragraph='We track their market cap and growth to make them ready for the right time to migrate to the mainboard' icon='10' />
                    <VerticalTimelineBox heading='Exit' paragraph='Once the company is migrated to the mainboard, we time our right exit' icon='11' />


                </VerticalTimeline>
            </div>
        </>
    )
}

function VerticalTimelineBox({ heading, paragraph, icon }) {

    return (
        <>
            <VerticalTimelineElement layout='1-column-right'
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                iconStyle={{ background: 'white', color: 'black' }}
                icon={icon}>
                <h3 className="vertical-timeline-element-title">{heading}</h3>
                <p>
                    {paragraph}
                </p>
            </VerticalTimelineElement>

        </>
    )

}

export default HowWeDoIt;