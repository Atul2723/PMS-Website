import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'

const PmsHome = ({heading , subHeading ,img , buttonText}) => {
    return (
        <>
            <div className='container'>
                <div className='home-row row '>
                    <div className='col-lg-6 home-col'>
                        <h3>
                            {heading}
                        </h3>
                        <h1>
                            {subHeading}
                        </h1>
                        <NavLink to={buttonText==='Explore More'?'/fund-details':'/contact-us'}>
                            {buttonText}
                        </NavLink>
                    </div>
                    <div className='col-lg-6 home-img  '>
                        <img src={img} alt="NNM Securities Pvt Ltd" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PmsHome