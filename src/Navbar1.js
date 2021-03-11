import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar1() {
    return (
        <>
         <div className='container-fluid nav_bg'>

<div className='row'>
  <div className='col-10 mx-auto'> 
         <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/" style={{color:'blueviolet', outline:'outset'}}>AKB Tech</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" >
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" activeClassName='main_nav' 
          aria-current="page" to="/" style={{color:'blueviolet', paddingLeft:'50px'}}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="services" activeClassName='main_nav' style={{paddingLeft:'50px'}} exact>Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about" activeClassName='main_nav' style={{paddingLeft:'50px',color:'blueviolet'}} exact>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" activeClassName='main_nav' style={{paddingLeft:'50px'}}
          exact>Contact</NavLink>
          {/* <li className="nav-item">
          <a className="nav-link" to="#">Sign In</a>
        </li> */}
        </li>
        <NavLink className="btn btn-primary" to="/signin" role="button" style={{backgroundColor:'blueviolet',marginLeft:'50px'}}>
        SignIn</NavLink> 
      </ul> <br/>
      <div className='searchbar'>
           <input type='text' placeholder='Search' style={{}} className='input_main'/>
           <button type='button' style={{}} className='button_main'>Search</button>
      </div>
    </div>
  </div>
     </nav>   
    </div>
    </div>
    </div>
        </>
    )
}

export default Navbar1
