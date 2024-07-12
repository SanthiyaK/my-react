import React from 'react'
import { useState } from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';
import {auth } from '../Firebase'


/* import { storeUserData } from './services/Storage';
import { RegisterApi } from './services/Api'; */

const Register = () => {
      // States for registration 
      const [email, setEmail] = useState(""); 
      const [password, setPassword] = useState(""); 
     
      const navigate =useNavigate();

      const handlePassword = (e) => { 
        setPassword(e.target.value); 
        
    };
  
    
      // Handling the email change 
      const handleEmail = (e) => { 
          setEmail(e.target.value); 
         
      }; 
    
  
    
      // Handling the form submission 
      const handleSubmit = async (e) => { 
        e.preventDefault(); 
        try{
            await auth.signInWithEmailAndPassword(email,password);
            console.log(email+" "+password);
            console.log("successfully login");
            navigate("/Tenant");
          }
          catch(error){
            console.error(error);
            alert(error);
          }
        
      };
      return ( 
        <div>  
        <h1>Login </h1> 
   
          <div className="form"> 
              <form> 
                  {/* Labels and inputs for form data */} 
               
    
                  <label id="email" className="label">Email</label> 
                  <input 
                      onChange={handleEmail}
                      name="email" 
                      className="input"
                      value={email} 
                      placeholder="your@gmail.com"
                      type="text"
                  /> 
                     <label  id="name" className="label">Password</label> 
                  <input 
                      onChange={handlePassword} 
                      name="name"
                      className="input"
                      value={password} 
                      placeholder=" Pls enter strong password"
                      type="password"
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