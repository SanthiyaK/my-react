import React from 'react'
import { useState } from 'react';
import './Register.css'
import {auth } from '../Firebase'
import { useNavigate } from 'react-router-dom';
/* import { storeUserData } from './services/Storage';
import { RegisterApi } from './services/Api'; */

const Register = () => {
      // States for registration 
      const [name, setName] = useState(""); 
      const [password, setPassword] = useState(""); 
      const [email, setEmail] = useState(""); 
      const [number, setPhoneNum] = useState(""); 
      const [address, setAddress] = useState(""); 
      const navigate =useNavigate();
    
      // Handling the name change 
      const handleName = (e) => { 
          setName(e.target.value); 
          
      }; 
      const handlePassword = (e) => { 
        setPassword(e.target.value); 
        
    }; 
    
      // Handling the email change 
      const handleEmail = (e) => { 
          setEmail(e.target.value); 
         
      }; 
    
      // Handling the password change 
      const handlePhoneNum = (e) => { 
          setPhoneNum(e.target.value); 
    
      }; 
      const handleAddress = (e) => { 
        setAddress(e.target.value); 
        
    }; 
   
    
      // Handling the form submission 
       
    
      const handleSubmit = async (e) => { 
        e.preventDefault(); 
        try{
            await auth.createUserWithEmailAndPassword(email,password);
            alert(" E-mail ID has been Registered successfully")
            navigate("/Login");
          }
          catch(error){
            console.error(error);
            alert(error);
          }
        
     
    }; 
    
      return ( 
        <div>  
        <h1>User Registration</h1> 
   
          <div className="form"> 
              <form> 
                  {/* Labels and inputs for form data */} 
                  <label  className="label">Name</label> 
                  <input 
                      onChange={handleName} 
                      className="input"
                      value={name} 
                      placeholder=" Enter Your Name"
                      type="text"
                  /> 
                   <label  className="label">Password</label> 
                  <input 
                      onChange={handlePassword} 
                      className="input"
                      value={password} 
                      placeholder=" Enter strong password"
                      type="password"
                  /> 
    
                  <label className="label">Email</label> 
                  <input 
                      onChange={handleEmail} 
                      className="input"
                      value={email} 
                      placeholder="your@gmail.com"
                      type="text"
                  /> 
                   <label className="label">Telephone Number</label> 
                  <input 
                      onChange={handlePhoneNum} 
                      className="input"
                      value={number} 
                      placeholder="+91-000-000-0000"
                      type="text"
                  /> 
    
                  <label className="label">Address</label> 
                  <textarea
                      onChange={handleAddress} 
                      className="input"
                      value={address} 
                      placeholder=" Enter your Address"
                      type="textarea"
                  /> 
                  <button onClick={handleSubmit} className="btn" type="submit"> 
                      Submit 
                  </button> 
              </form> 
          </div> 
          </div>
      ); 
  } 
export default Register
