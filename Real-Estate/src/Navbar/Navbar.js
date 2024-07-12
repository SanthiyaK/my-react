import { Route, Routes, NavLink, Navigate} from "react-router-dom"
import Home from './Home'
import About from './About'
import ContactUs from './ContactUs'
import News from './News'
import Tenant from './Tenant' 
import Register from './Register'
import Login from './Login'
/* import Logout from './Logout' */
import './Nav.css'


const Navbar = () => {
 
  return (
    <div>
    <div>
      <nav className="Nav">
        <ul className="ul">
          <li className="li"><NavLink   style={{ textDecoration: 'none' }} to="/"> Home</NavLink></li> 
          <li className="li"> <NavLink  style={{ textDecoration: 'none' }} to="/about"> About</NavLink></li> 
          <li className="li"> <NavLink  style={{ textDecoration: 'none' }} to="/contact"> Contact Us</NavLink></li> 
         <li className="li"> <NavLink  style={{ textDecoration: 'none' }} to="/tenant"> Tenant</NavLink></li> 
          <li className="li"> <NavLink  style={{ textDecoration: 'none' }} to="/news"> News</NavLink></li> 
          <li className="li"> <NavLink  style={{ textDecoration: 'none' }} to="/register"> Register</NavLink></li>
          <li className="li"> <NavLink  style={{ textDecoration: 'none' }} to="/login"> Login</NavLink></li>
       {/*    <li className="li"> <NavLink  style={{ textDecoration: 'none' }} to="/logout"> Logout</NavLink></li> */} 
        </ul>
     </nav>
   </div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/tenant" element={<Tenant />} /> 
        <Route path="/news" element={<News />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} /> 
       {/*  <Route path="/logout" element={<Logout />} />  */}
        <Route path="*" element={<Navigate to="/"/>}/> 
     </Routes>
   </div>
  )
}

export default Navbar