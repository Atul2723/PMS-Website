import React from 'react'

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
export default VisionSection