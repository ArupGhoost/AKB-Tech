import React from 'react';
// import Image1 from '../public/Images/images.jpg'

function Service() {
    return (
        <>
        <div className='service_div' style={{textAlign:'center'}}>
            <h2 style={{color:'blueviolet'}}>Our Services</h2>
            <div className='serv_img'>
                <img src='/Images/images.jpg' alt='serviceimages'/>
            </div>
            <div className='serv_img2'>
                <img src='/Images/app-development-banner_33099-1720.jpg' alt='serviceimages'/>
            </div>
            <div className='serv_img3'>
                <img src='/Images/Android-app-development.jpg' alt='serviceimages' />
            </div>
            <div className='serv_img4'>
                <img src='/Images/history_and_evolution_of_digital_marketing.jpg' alt='serviceimages'/>
            </div>
        </div>
        
           
        </>
    )
}

export default Service
