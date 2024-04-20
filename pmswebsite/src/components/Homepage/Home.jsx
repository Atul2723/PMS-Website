import React from 'react';
import './Home.css';
import { GiMoneyStack } from "react-icons/gi";
import { RiMoneyCnyCircleFill } from "react-icons/ri";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { FaBullseye } from "react-icons/fa6";
import { GiStairsGoal } from "react-icons/gi";
import Team from './Team';
import WhyChooseUs from './WhyChooseUs';
import HowWeDoIt from './HowWeDoIt';
import Fund from './Fund';

const VisionSection = ({ icon, heading, paragraph }) => {
    return (
        <div className='vision-inner-col'>
            {icon}
            <div className='vision-content'>
                <h1>{heading}</h1>
                <p>{paragraph}</p>
            </div>
        </div>
    );
};



const Home = () => {


    return (
        <>
            <div className='pms-home '>
                <div className='container'>
                    <div className='home-row row '>
                        <div className='col-lg-6  home-col'>
                            <h3>
                                Make your Next Move The Best Move
                            </h3>
                            <h1>NNM Amritkaal Emerging Fund By NNM Securities Private Limited
                            </h1>
                            <button>
                                Explore More
                            </button>
                        </div>
                        <div className='col-lg-6 home-img  '>
                            <img src='/homesvg.svg' alt="NNM Securities Pvt Ltd" />
                        </div>
                    </div>
                </div>
            </div>

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

            <div className='pms-about-us'>
                <div className='container'>
                    <div className='about-us-row'>
                        <div className='col-lg-6 about-us-col details-col'>
                            <h3>About Us</h3>
                            <h5>Our Latest Offering: NNM Amritkaal Emerging Fund</h5>
                            <p>NNM Amritkaal Emerging Fund is a new offering from the NNM Group, which is more than 70 years old financial vintage powerhouse.
                            </p>
                            <p> We cater to almost the entire gamut of financial services, through our flagship company NNM Securities Private Limited which was incorporated in 1997, which has operation in the field of Equities, Derivatives, Commodities, Currencies and also a SEBI registered portfolio manager.</p>

                        </div>
                        <div className='col-lg-6 about-us-col img-col'>
                            <img src='/aboutsvg.svg' />
                        </div>
                    </div>
                </div>
            </div>
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
                    {/* <hr /> */}
                </div>
            </div>
            <div className='vision-mission'>
                <div className='container'>
                    <div className='row vision-row'>
                        <div className='col-lg-6 vision-col'>
                            <img src='/visionsvg.svg' alt="Vision" />
                        </div>
                        <div className='col-lg-6 vision-col'>
                            <VisionSection
                                icon={<IoMdEye className='vision-icons' />}
                                heading="Our Vision"
                                paragraph="Providing services as customer centric rather than market centric, thus want every client to be a well informed investor"
                            />
                            <VisionSection
                                icon={<FaBullseye className='vision-icons' />}
                                heading="Our Mission"
                                paragraph="To emerge as one of the leading and trusted institution and we recognized as one stop shop for Financial and Corporate Advisory"
                            />
                            <VisionSection
                                icon={<GiStairsGoal className='vision-icons' />}
                                heading="Our Goal"
                                paragraph="To emerge as one of the leading and trusted institution and we recognized as one stop shop for Financial and Corporate Advisory"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Fund />
            {/* <Philosophy/> */}
            <WhyChooseUs />
            <HowWeDoIt />

            <Team />

        </>
    );
};

export default Home;
