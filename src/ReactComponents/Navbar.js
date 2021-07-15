import React, { Component , useState, useEffect } from 'react'

import '../assets/css/style.css';
import '../scss/style.scss';

import Logo from '../mylogo.jpg';

export function Navbar() {
    
    const [width, setwidth] = useState(window.innerWidth);

    useEffect(() => {
        setwidth(window.innerWidth);

    }, [])

    
    
        return (
           
    <nav class="navbar navbar-expand-lg navbar-light menu justify-content-center shadow fixed-top ">
      <div  class="container">
        <a class="navbar-brand" href="#"><img src={Logo} alt="" height="50px" /></a>
        <button class="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div   class=" collapse navbar-collapse justify-content-end" id="navbarSupportedContent" data-toggle="collapse" data-target=".navbar-collapse">
          <ul  class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item nav-item-sm">
              <a class="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item nav-item-sm">
              <a class="nav-link" href="#link">Link</a>
            </li>
            <li class="nav-item nav-item-sm">
              <a class="nav-link" href="#services">Services</a>
            </li>
            
            <li class="nav-item nav-item-sm">
              <a class="nav-link" href="#testimonials" >Testimonials</a>
            </li>  
            <li class="nav-item nav-item-sm">
              <a class="nav-link nav-item-sm" href="#" >Faq</a>
            </li>  
            <li class="nav-item">
              <a class="nav-link nav-item-sm" href="#projects" >Portfolio</a>
            </li>  
            <li class="nav-item">
              <a class="nav-link nav-item-sm" href="#" >Contact</a>
            </li>  
            
           
          </ul>
          <button type="button" class="rounded-pill btn-rounded"> +92 332 2411 710  <span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg></span> </button>
        </div>
      </div>
    </nav>
           
        )
    }

export default Navbar
