import React from 'react'
import CarousalCard from './SubComponents/CarousalCard.js';
import Alitfit from '../Media/people/talha usmani.jpg';
export default function Testimonials() {
    const info = [
        {
            name : "Talha Usmani",
            message : "It is a long established fact that a reader will be distracteddwad dwad awdwa by the readable content of a dwadwadwa wdwawa wdawapage when looking at its layout. The point of using Lorem Ipsum is that it has a more-o",
            role : "Owner and CEO of Alitfitt",
            image : "../../Media/people/talha usmani.jpg"
        },
        {
            name : "Zeeshan Burney",
            message : "It is a long established fact that a reader will be distracteddwad dwad awdwa by the readable content of a dwadwadwa wdwawa wdawapage when looking at its layout. The point of using Lorem Ipsum is that it has a more-o",
            role : "Product Manager at Burney Store",
            image : "../../Media/people/talha usmani.jpg"

        }

    ]

    
    
    
    return (
        <section class="testimonials">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,80C384,96,480,160,576,160C672,160,768,96,864,101.3C960,107,1056,181,1152,192C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            {/* TESTIMONAILS HEADING */}
            <h2 class="display-2 fw-bold text-center title text-white">Testimonials</h2>
            {/* LINE */}
           <div  class="container justify-content-center text-center align-content-center line"></div>
            {/* WHAT OUR CLIENTS HAVE TO SAY ABOUT US */}
            <div class="text-center text-white testimonials--subtitle">What are clients say about us</div>
            

            {/* card             */}
            
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
   
  </div>


  <div class="carousel-inner">
    <div class="carousel-item active">
    <CarousalCard name={info[0].name} role={info[0].role} message={info[0].message} image={Alitfit}  />
     
    </div>
     <div class="carousel-item">
     <CarousalCard name={info[1].name} role={info[1].role} message={info[1].message} image={Alitfit}  />
     
     
    </div>
    {/*<div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>*/}
  </div> 
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,80C384,96,480,160,576,160C672,160,768,96,864,101.3C960,107,1056,181,1152,192C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </section>
    )
}
