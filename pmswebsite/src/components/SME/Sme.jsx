import React from 'react'
import './Sme.css'
import { MdArrowCircleRight } from 'react-icons/md'

const Sme = () => {
    return (
        <>
            <div className='sme-details-section'>
                <div className='container'>
                    <div className='row sme-row'>
                        <div className='col-lg-6 sme-img'>
                            <img src='/smesvg.svg'/>
                        </div>
                        <div className='col-lg-6 sme-details'>
                            <h1>What is an SME IPO ?</h1>
                            <p><MdArrowCircleRight className='desc-icon'/> In 2012, the NSE and BSE collectively opened two exchanges for the listing of SME IPOs. These are: 
                            <ol>
                                <li>BSE SME platform by the Bombay Stock Exchange</li>
                                <li>NSE EMERGE by the National Stock Exchange</li>
                                
                                </ol></p>
                            <p><MdArrowCircleRight className='desc-icon'/> Just like any other company issues an IPO to raise funds, SME IPOs are meant to raise capital for a small and medium enterprise company. As SMEs are smaller than other companies, the SME IPO is smaller in issue size than a regular company’s IPO. After raising capital through an IPO, the shares trade on the SME exchange. </p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Sme