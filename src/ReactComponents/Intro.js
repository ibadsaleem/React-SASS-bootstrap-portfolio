import React, { Component, useState } from 'react'
import Logo from '../Media/intrologo2.png';
import GLightbox from 'glightbox';

export  function Intro() {
    const lightbox = GLightbox({
        'href': 'https://www.youtube.com/watch?v=Ga6RYejo6Hk',
        'type': 'video',
        'source': 'youtube', //vimeo, youtube or local
        'width': 900,
    });
    const [enabledvide, setenabledvide] = useState(false);

        return (
            <section id="home" class="intro-section">
                <div class="container">
                    <div class="row .align-items-center text-white">
                        <div class="col-md-6 intros">
                            <h1 class="display-2"> <span class="display-2--intro">HI! I am Hamza </span>
                            <span class="display-2--description lh-lg"> About  ME! About  ME! About  ME! About  ME!
                            About  ME! About  ME! About  ME! About  ME! About  ME!
                            About  ME! About  ME! About  ME! About  ME! About  ME!
                            About  ME! About  ME! About  ME! About  ME! About  ME!
                            About  ME! About  ME! About  ME! About  ME! About  ME!
                                </span></h1>

                            <button type="button" class="rounded-pill btn-rounded"> Get in Touch  <span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg></span> </button>
                        </div>
                        <div class="col-md-6 intros text-end">
                            <div class="video-box">
                                <img src={Logo} alt="video illustration" class="img-fluid" />
                                <a target="_top" href="https://www.youtube.com/embed/tgbNymZ7vqY" class="position-absolute top-50 start-50">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                        </svg>
                                    </span>
                                    <span class="border-animation border-animation--border-1"></span>                               
                                    <span class="border-animation border-animation--border-2"></span>

                                </a>

                            </div>
                        </div>

                    </div> 
                  

                </div>
                
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L40,224C80,224,160,224,240,192C320,160,400,96,480,101.3C560,107,640,181,720,192C800,203,880,149,960,154.7C1040,160,1120,224,1200,224C1280,224,1360,160,1400,128L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      
                </section> 
        )
    
}

export default Intro;
