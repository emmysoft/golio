import React from 'react';
import Logo from "../../assets/Logo.png";
import { NavLink } from 'react-router-dom';
import CustomButton from '../Button/CustomButton.jsx';
import "./Nav.css";

const Nav = () => {
  return (
    <>
        <div className='nav-area'>
            <img src={Logo} alt="app_logo"/>
            
            <div className='navlinks'>
                <NavLink to="/" className="link">Home</NavLink>
                <NavLink to="/" className="link">Portfolio</NavLink>
                <NavLink to="/" className="link">Services</NavLink>
                <NavLink to="/" className="link">Testimonial</NavLink>
                <NavLink to="/" className="link">Pricing Plan</NavLink>
                <NavLink to="/" className="link">FAQs</NavLink>
            </div>
            <CustomButton to="/" className="button-link">
                Contact Us
            </CustomButton>
        </div>
    </>
  )
}

export default Nav