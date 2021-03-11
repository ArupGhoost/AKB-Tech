import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
     
  const nDate = new Date().getUTCFullYear();
   
    return (
        <>
          <section id='header' className=''>
              <div className='container-fluid '>
                <div className='row'>
                  <div className='col-10 mx-auto'>
                    <div className='col-md-10 pt-5 pt-lg-0 order-2 order-lg-1'>
                      <h1>Strengthening Business with <br/><strong style={{color:'blueviolet'}}> AKB Tech </strong></h1>
                      <h2 className='my-3'>
                        Developing top notch Websites and Apps with AKB's best Developers
                      </h2>
                      <div className='mt-3'>
                        <NavLink to='/services' className='anchor1'>Get Started</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>  
          <div>
          <img src='https://svgsilh.com/svg/1419136-361159.svg' alt='svg-images' className='image1'/>  
          <img src='https://svgsilh.com/svg/2243898-361159.svg' alt='svg-images' className='image2'/> 
          <img src='https://svgsilh.com/svg/1275342-361159.svg' alt='svg-images' className='image3'/> 
          </div>
          <div style={{position:'absolute', bottom:'275px', right:'625px'}}>
            <h3>Web</h3>

          </div>
          <div style={{position:'absolute', bottom:'175px',right:'570px'}}>
            <h3>Development</h3>
          </div>
          <div style={{position:'absolute', bottom:'300px', right:'208px'}}>
            <h3>Mobile</h3>
          </div>
          <div style={{position:'absolute', bottom:'150px',right:'215px'}}>
            <h3>Apps</h3>
          </div><br />
          <div style={{textAlign:'center', color:'blueviolet' ,marginTop:'5px',textDecoration:'underline'}}>
                 <p>A CopyRight of AKB Tech {nDate}</p>
             </div>
        </>
    )
}

export default Home
