import React, { Component , useState, useEffect } from 'react'

import '../assets/css/style.css';
import '../scss/style.scss';

import Logo from '../mylogo2.png';

export function Navbar() {
    
    const [width, setwidth] = useState(window.innerWidth);

    useEffect(() => {
        setwidth(window.innerWidth);

    }, [])

    
    
        return (
           
    <nav className="navbar navbar-expand-lg navbar-light menu justify-content-center shadow fixed-top ">
      <div  className="container">
        <a className="navbar-brand" href="#"><img width="100%" src={Logo} alt="" height="20%" /></a>
        <button className="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div   className=" collapse navbar-collapse justify-content-end" id="navbarSupportedContent" data-toggle="collapse" data-target=".navbar-collapse">
          <ul  className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item nav-item-sm">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
        
            <li className="nav-item nav-item-sm">
              <a className="nav-link" href="#services">Services</a>
            </li>
            
            <li className="nav-item nav-item-sm">
              <a className="nav-link" href="#testimonials" >Testimonials</a>
            </li>  
            <li className="nav-item nav-item-sm">
              <a className="nav-link nav-item-sm" href="#faq" >Faq</a>
            </li>  
            <li className="nav-item">
              <a className="nav-link nav-item-sm" href="#projects" >Portfolio</a>
            </li>  
            <li className="nav-item">
              <a className="nav-link nav-item-sm" href="#getstarted" >Contact</a>
            </li>  
            
           
          </ul>
          <button type="button" className="rounded-pill btn-rounded"> +92 332 2411 710  <span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill mysvg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg></span> </button>
        </div>
      </div>
    </nav>
           
        )
    }

export default Navbar
