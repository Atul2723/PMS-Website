import React from 'react'
import { RiExchangeFundsFill, RiMoneyCnyCircleFill } from 'react-icons/ri'
import { SiAwsorganizations } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';

const Fund = () => {
    return (
        <div className='fund-details'>
            <div className='container'>
                <div className='section-heading'>
                    <h1>Fund Details</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla veniam animi cum culpa aperiam tenetur similique corrupti neque labore sit!</p>
                </div>
                <div className='row fund-row '>
                    <div className='col-lg-12 fund-col '>
                        <FundLeftCol icon={<RiMoneyCnyCircleFill className='fund-icons' />} heading='Minimum Investment' paragraph='INR 0.50  Cr (as per SEBI guidelines)' />
                        <FundLeftCol icon={<RiExchangeFundsFill className='fund-icons' />} heading='Fund Size' paragraph='INR 1,000 Cr (INR 200 Cr + INR 800 Cr)' />
                        <FundLeftCol icon={<SiAwsorganizations className='fund-icons' />} heading='Tenor' paragraph='The tenor of the fund is for 3 years' />
                        <FundLeftCol icon={<VscGraph className='fund-icons' />} heading='Benchmark' paragraph='BSE SME / NSE Emerge' />
                    </div>
                    <NavLink className='fund-btn' to='/fund-details'>Read More</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Fund

function FundLeftCol({ icon, heading, paragraph }) {
    return (<>
        <div className='fund-left'>
            {icon}
            <h1>{heading}</h1>
            <p>{paragraph}</p>
        </div>
    </>)
}

