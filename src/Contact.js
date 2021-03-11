import React from 'react'

function Contact() {

      const reDate = new Date().getUTCFullYear();


    return (
        <>
         <div className='contact'>
             <img src='https://svgsilh.com/svg/470346-5b257e.svg' alt='svg_images' className='image4'/>
            
         </div>   
         <div className='num1'>
                 <h2 style={{}}>7008045488</h2>
             </div>
             <div className='num2'>
                 <h2>arupbehera243@gmail.com</h2>
             </div>
             <div className='num3'>
                <h2>arupbehera142@gmail.com</h2>
             </div>
             <div style={{textAlign:'center', color:'blueviolet',textDecoration:'underline'}}>
                 <p>A CopyRight of AKB Tech {reDate}</p>
             </div>
        </>
    )
}

export default Contact
