import React from 'react'
import { RiMoneyCnyCircleFill } from "react-icons/ri";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { GiMoneyStack } from 'react-icons/gi';

const PmsNNMHouse = () => {
    return (
        <div className='pms-about-section'>
            <div className='container'>
                <div className='section-heading'>
                    <h1>The NNM House</h1>
                    <p>NNM Group is a more than 70 years old financial vintage powerhouse. We cater to almost the
                        entire gamut of financial services, through <br /> our flagship companies:
                    </p>
                </div>
                <div className='pms-about-company'>
                    <div className='row company-row'>
                        <div className='col-lg-4 company-col'>
                            <GiMoneyStack className='company-icon' />
                            <h3>NNM Securities Private
                                <br />Limited</h3>
                            <p>This is our flagship company
                                incorporated in 1997, which has
                                operation in the field of Equities,
                                Derivatives, Commodities, Currencies
                                and also a SEBI registered portfolio
                                manager.</p>
                        </div>
                        <div className='col-lg-4 company-col'>
                            <RiMoneyCnyCircleFill className='company-icon' />
                            <h3>NNM Investment And Wealth<br /> Advisory LLP</h3>
                            <p>Offers services such as Portfolio
                                Management Services, Wealth
                                Management, Investment and
                                Insurance. We pride ourselves on offering a diverse range of services tailored to meet your financial needs</p>
                        </div>
                        <div className='col-lg-4 company-col'>
                            <MdOutlineSupervisorAccount className='company-icon' />
                            <h3>NNM NextGen Advisory<br /> Private Limited</h3>
                            <p>Engaged in providing Investment Banking
                                services, underwriting IPOs, Business
                                Consulting, Advisory, Compliance
                                services to listed and unlisted entities,
                                SMEs and Start-ups.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PmsNNMHouse