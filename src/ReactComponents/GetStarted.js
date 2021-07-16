import React from 'react'

export default function GetStarted() {
    return (
        <section id="getstarted" class="getstarted container">
            <h3 class="display-3 text-center fw-bold text-capitalize">Get Started</h3>
            <div class="heading-line"></div>
            <p class="display-3--subtitle text-center pt-2 pb-3">this is the subtitle text here</p>

            <div class="row contentboxes">

                <div class="col-md-12 col-lg-6 contentboxes--description lh-lg shadow">

                    <h1 class="contact-us-title display-2 text-white">100% satisfication guaranteed</h1>
                    <p class="contact-us-desc text-white">kdnwdwa dwa dwa dwa dwad wa dwa d aw dwa dwa
                        wa dawdwa dwadw adwadwad aw daw dawdwaw ad wadwad wa d awd wa ed wa d wa d  wa dwa d wad
                        wadwa dwa d wadwadaw
                    </p>
                    <p class="contact-us-next-step text-white">What will be the next step?</p>
                    <ul class="shadow">
                        <li class="contact-us-list-item"><svg id="i-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M2 20 L12 28 30 4" />
                        </svg><span>We will prepare for the proposal</span></li>
                        <li class="contact-us-list-item"><svg id="i-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M2 20 L12 28 30 4" />
                        </svg><span>We will discuss it together</span></li>
                        <li class="contact-us-list-item"><svg id="i-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M2 20 L12 28 30 4" />
                        </svg><span>Let's start the discussion</span></li>

                    </ul>

                </div>
                <div class="col-md-12 col-lg-6 contentboxes--form">
                    <h4 class="text-primary text-center fw-bold ">Let's Get started</h4>

                    <div class="heading-line"></div>
                    <br />
                    <br />
                    <form action="submit" class="w-100">
                        <div class="row container">

                            <div class=" col-lg-6 mb-2"><input class=" shadow form-control padding-container w-100 focus-transtion" type="text" id="fname" name="fname" placeholder="First Name" />
                            </div>


                            <div class="col-lg-6 mb-2"> <input class="form-control  w-100 padding-container focus-transtion" type="text" id="lname" name="lname" placeholder="Last Name" />
                            </div>
                            <div class="container mb-2">
                                <input type="text" class="w-100 padding-container focus-transtion form-control shadow" id="email" name="email" placeholder="Email Address" />
                            </div>
                            <div class="container mb-2">

                                <textarea class="w-100 mb-2 focus-transtion form-control shadow" name="message" rows="12" cols="50" placeholder="Message"></textarea>
                            </div>

                            <div class="container w-75 text-center justify-content-center">
                                <button class="form-control rounded-pill bg-secondary w-100 text-white btn-rounded shadow">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>

                   

            </div>

        </section>
    )
}