import React from 'react'
import { useState } from 'react'

function SignIn() {
       
    const[inputDet, setinputDet] = useState({
        fname : '',
        lname : '',
        email : '',
        phone : ''
    })
    // const[superInput, setsuperInput] = useState([])

    const changeHandler = (event) => {
           const{name, value} = event.target;
           setinputDet((prevData) => {
               return {
                   ...prevData,
                   [name] : value
               }

           })
           
    }
    const clickHandler = () =>{
           alert(`Hii im ${inputDet.fname} ${inputDet.lname} my email is ${inputDet.email} and my phone number is ${inputDet.phone} `)
    }
      
    return (
        <>
           <div className='input1'>
               <input type='text' placeholder='Enter Your First Name' 
                   onChange={changeHandler} name='fname' value={inputDet.fname}
               /> <br /><br />
               <input type='text' placeholder='Enter Your Last Name' 
                   onChange={changeHandler} name='lname'  value={inputDet.lname}
               />
               <br /><br />
               <input type='text' placeholder='Enter Your Email' 
                   onChange={changeHandler} name='email'  value={inputDet.email}
               /><br /><br />
               <input type='text' placeholder='Enter Your Phone Number' 
                   onChange={changeHandler} name='phone'  value={inputDet.phone}
               /><br /><br />
               
               <button className='button1' onClick={clickHandler} type='button'>Submit</button>

           </div>
        </>
    )
}

export default SignIn
