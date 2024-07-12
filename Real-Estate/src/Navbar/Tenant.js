import React from 'react'
import { useState, useEffect } from 'react';
import './Register.css'
import apiRequest from '../Apirequest';
import { useNavigate } from 'react-router-dom';

  /* import { storeUserData } from './services/Storage';
  import { RegisterApi } from './services/Api'; */
  
  const Tenant = () => {
    const navigate=useNavigate();
     const API_URL='http://localhost:3500/items';

     const[items,setItems]=useState([]);
    
        // States for registration 
       
        const [location, setLocation] = useState(""); 
        const [min, setMin] = useState("");
        const [max, setMax] = useState("");
        const [pro_type, setProtype] = useState("");
        const [message, setMessage] = useState(""); 
        const [BorR, setBorR] = useState(""); 
        const [bedrooms, setBedrooms] = useState(""); 
       /*  const [fetchError, setFetchError] = useState(null);  */
  
        useEffect(() => {
            const fetchItems= async ()=> {
                try{
               const respone = await fetch(API_URL);
               console.log(respone)
               const  listItems = await respone.json();
               setItems(listItems)
                }
                catch(err){
                console.log(err.stack)
                }
            }
           (async() => await fetchItems())()
          
        },[])
      const handleLocation = (e) => { 
          setLocation(e.target.value); 
          
      }; 
      
        
      const handleMin = (e) => { 
          setMin(e.target.value); 
         
      }; 
      const handleMax = (e) => { 
          setMax(e.target.value); 
          
      }; 
      const handleProType = (e) => { 
          setProtype(e.target.value); 
          
      }; 
  
      const handleMessage = (e) => { 
          setMessage(e.target.value); 
          
      };
      const handleBorR = (e) => { 
        setBorR(e.target.value); 
        
    };
    const handleBedrooms = (e) => { 
        setBedrooms(e.target.value); 
        
    }; 
     /*  const [searchText, setSearchText] = useState("");
      const [data, setData] = useState(dataList); */
        // Handling the form submission 
        const handleSearch = async (item) => { 
            item.preventDefault();
          const id=items.length ? items[items.length -1].id+1 : 1;
          const addsearch = (id, location, BorR,min,max,bedrooms,pro_type,message)
          const listItems =[...items, addsearch]  
          setItems(listItems)  
               
      
         // localStorage.setItem("list1", JSON.stringify(listItems))
         const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(addsearch)
         }
           await apiRequest(API_URL,postOptions)
           navigate("/Logout")
         
        };
      
        return ( 
          <div>  
          <h1> Tenant Information </h1> 
          
            <div className="form"> 
                <form> 
                    {/* Labels and inputs for form data */} 
                     <label  id="location" className="label">Location</label> 
                    
                    <input 
                        onChange={handleLocation} 
                        name="location"
                        className="input"
                        value={location} 
                        placeholder=" Enter Your Location"
                        type="location"
                    /> 
          
                      <label id="BorR" className="label">
                      Do you wish to buy or rent?:
                          <select>
                          <option value="" disabled selected hidden>Please Choose...</option>
                              <option value={BorR}  onChange={handleBorR} >I am looking to buy</option>
                              <option value={BorR}  onChange={handleBorR}>I am looking to sell</option>
                          </select>
                        </label>
                        <label  id="min" className="label">Minimum Price</label>
                        <input 
                        onChange={handleMin} 
                        name="min"
                        className="input"
                        value={min} 
                        placeholder="Enter Your MinPrice"
                        type="text"
                    /> 
                     <label  id="max" className="label">Maximum Price</label>
                        <input 
                        onChange={handleMax}
                        name="max" 
                        className="input"
                        value={max} 
                        placeholder="Enter Your MaxPrice"
                        type="text"
                    /> 
                <label id="bedrooms" className="label">
                     Minimum Bedrooms:
                          <select>
                          <option value="" disabled selected hidden>Please Choose...</option>
                              <option value={bedrooms}  onChange={handleBedrooms}>1 Bedroom</option>
                              <option value={bedrooms} onChange={handleBedrooms}>2 Bedrooms</option>
                              <option value={bedrooms} onChange={handleBedrooms}>3 Bedrooms</option>
                              <option value={bedrooms} onChange={handleBedrooms}>4 Bedrooms</option>
                              <option value={bedrooms} onChange={handleBedrooms}>5 Bedrooms</option>
                              <option value={bedrooms} onChange={handleBedrooms}>6 Bedrooms</option>
                              <option value={bedrooms} onChange={handleBedrooms}>7 Bedrooms</option>
                          </select>
                        </label>
  
                        <label  id="pro_type" className="label">Type of Property Required</label> 
                    <input 
                        onChange={handleProType}
                        name="protype" 
                        className="input"
                        value={pro_type} 
                        placeholder="Enter Your Property Type"
                        type="text"
                    /> 
                    
                    <label  id="message" className="label">Message</label> 
                    <textarea
                        onChange={handleMessage} 
                        name="message"
                        className="input"
                        value={message}
                        placeholder="Enter Your Message"
                        type="textarea"
                        
                    />  
            
                    <button onChange={handleSearch}  className="btn" type="submit"> 
                       SEARCH
                    </button> 
                </form> 
                
            </div> 
            </div>
        ); 
    } 
 
export default Tenant