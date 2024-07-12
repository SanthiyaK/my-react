import React from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container} from 'react-bootstrap'
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import img1 from './images/Dlogo.png';

const Header = () => {
  return (
    <header className="header">
       <div className="App1-logo">
        <img src={img1}  alt="Logo" width="40" height="40" /> </div>
        <div > <h1>DYLAN DAVIES</h1></div> 
      <Container>
      <div className="face social-media-icons-white">
         <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
         </div>
         <div className="face social-media-icons-white">
         <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
         </div>
        </Container>
    </header> 
  )
}

export default Header