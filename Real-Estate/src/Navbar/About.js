import React from 'react'
import img3 from '../images/img_about.jpg' 
import './Nav.css'

const About = () => {
  return (
    <>
    <section class="about">
    <h1>About Us</h1>
    <div class="about-info">
        <div>
        <p> Dylan Davies has been awarded “Top 500 status in 2024”, which means we’ve been ranked in the Top 500 agents in the entire UK for Sales – out of 13,080 estate agencies! Each one was independently assessed for property marketing, customer service.
        </p>
        </div> </div> 
        </section>
  <section> <div><h3>Meet Our Team</h3></div></section>  
         <section> 
           <div class="card">
              <div> <img src={img3} alt="User 1"/> </div>
              <div class="card">
                  <h2>Jane</h2>
                  <p className="card-role">CEO and Founder</p>
                  <p >jane@example.com</p>
                  <p><button class="button">Contact</button></p>
              </div>
           </div>
           </section> 
 </>
  )
}

export default About