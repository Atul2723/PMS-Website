import React from 'react'
import './Home.css'
import { GiMoneyStack } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { RiMoneyCnyCircleFill } from "react-icons/ri";
import { IoIosEye } from "react-icons/io";
import { FaBullseye } from "react-icons/fa6";
import { TbScanEye } from "react-icons/tb";
import { GiStairsGoal } from "react-icons/gi";

const Home = () => {
    return (
        <>
            <div className='pms-home '>
                <div className='container'>
                    <div className='home-row row '>
                        <div className='col-lg-6  home-col'>
                            <h1>NNM Securities Pvt Ltd:Investing in SME's for Long Term Success</h1>
                            <p>Discover the transformative power of strategic wealth management. Our tailored solutions are designed to help you achieve your financial goals and build a legacy that lasts.</p>
                            <button>
                                Explore More
                            </button>
                        </div>
                        <div className='col-lg-6 home-img  '>
                            <img src='/pmsHome.png' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#F8F9F9" fill-opacity="1" d="M0,0L80,26.7C160,53,320,107,480,117.3C640,128,800,96,960,96C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
            <div className='pms-organization'>
                <div className='container'>
                    <div className='row product-row '>
                        <div className='col-lg-2 product-col'>
                            <h1> Highlights</h1>
                        </div>
                        <div className='col-lg-10 product-col'>
                            <ul>
                                <li><strong>20+ Years</strong><br />of Experience in Wealth <br />Management</li>
                                <li><strong>80+ IPO's</strong><br />Experience of assisting in one<br /> or the other
                                    capacity</li>
                                <li><strong>100+ SME's</strong><br />Listed and Unlisted</li>
                                <li><strong>250+ Members</strong><br />of professional and <br />supporting staff</li>

                            </ul>

                        </div>
                    </div>
                    <hr></hr>
                </div>
            </div>
            <div className='pms-about-section'>
                <div className='container'>
                    <div className='pms-about-heading'>
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
                                <h3>NNM Investment And Wealth<br/> Advisory LLP</h3>
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
            <div className='vision-mission'>
                <div className='container'>
                    <div className='row vision-row'>
                        <div className='col-lg-6 vision-col'>
                            <img src='/vision.png' />
                        </div>
                        <div className='col-lg-6 vision-col'>
                            <div className='vision-inner-col'>

                                <IoIosEye className='vision-icons' />

                                <div className='vision-content'>
                                    <h1>Our Vision</h1>
                                    <p>Providing services as customer centric rather than
                                        market centric, thus want every client to be a well
                                        informed investor</p>
                                </div>
                            </div>
                            <div className='vision-inner-col'>

                                <FaBullseye className='vision-icons' />

                                <div className='vision-content'>
                                <h1>Our Mission</h1>
                            <p>To emerge as one of the leading and trusted
                                institution and we recognized as one stop shop for
                                Financial and Corporate Advisory</p>
                                </div>
                            </div>
                            <div className='vision-inner-col'>

                                <GiStairsGoal className='vision-icons' />

                                <div className='vision-content'>
                                <h1>Our Goal</h1>
                            <p>To emerge as one of the leading and trusted
                                institution and we recognized as one stop shop for
                                Financial and Corporate Advisory</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home