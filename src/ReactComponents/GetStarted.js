import React , {useState} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


import emailjs from 'emailjs-com';
export default function GetStarted() {
    

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    
    const service_id = "service_h2tdr58";
    const template_id = "template_dmqlqag";

   

    const sendemail  =  async (e)=>{
        
        var info = {
            
            "fname" : `${firstname}`,
            
            "lname" : `${lastname}`,
            "email" : `${email}` ,
            "message" : message
        };
       e.preventDefault();
        await emailjs.send(service_id, template_id, info ,'user_GwuxJfyRaYiOnIltqYeqK' )        
        .then((response)=> {
       console.log('SUCCESS!', response.status, response.text);
       e.target.reset();
    }, (error)=> {
       console.log('FAILED...', error);
       e.target.reset();
    });
       
    }

    
    
    return (
        <section id="getstarted" class="getstarted container-fluid ">
            
            <div class="container  pb-5">
            <ScrollAnimation animateOnce={true} initiallyVisible={false} delay={1} duration={3} animateIn="fadeIn"></ScrollAnimation>
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
                        <li class="contact-us-list-item"><svg id="i-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25" height="25" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M2 20 L12 28 30 4" />
                        </svg><span>We will prepare for the proposal</span></li>
                        <li class="contact-us-list-item"><svg id="i-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25" height="25" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M2 20 L12 28 30 4" />
                        </svg><span>We will discuss it together</span></li>
                        <li class="contact-us-list-item"><svg id="i-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25" height="25" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M2 20 L12 28 30 4" />
                        </svg><span>Let's start the discussion</span></li>

                    </ul>

                </div>
                <div class="col-md-12 col-lg-6 py-3 contentboxes--form">
                    <h4 class="text-primary text-center fw-bold ">Let's Get started</h4>

                    <div class="heading-line"></div>
                    <br />
                    <br />
                    <form id="form" onSubmit={sendemail}  class="w-100">
                        <div class="row container-fluid">
<div class="container-fluid row">
                            <div class=" col-lg-6 mb-2"><input value={firstname} onChange={(e)=>{setfirstname(e.target.value)}} class="shadow form-control padding-container focus-transtion" type="text" id="fname" name="fname" placeholder="First Name" />
                            </div>


                            <div class="col-lg-6 mb-2"> <input value={lastname} onChange={(e)=>{setlastname(e.target.value)}} class="form-control  padding-container focus-transtion" type="text" id="lname" name="lname" placeholder="Last Name" />
                            </div>
              </div>             
                            <div class="container-fluid mb-2 ps-3 pe-3">
                                <input value={email}  onChange={(e)=>{setemail(e.target.value)}} type="text" class="w-100 padding-container focus-transtion form-control shadow" id="email" name="email" placeholder="Email Address" />
                            </div>
                            <div class="container-fluid  mb-2 ps-3 pe-3">

                                <textarea  value={message} onChange={(e)=>{setmessage(e.target.value)}} class="padding-container w-100 mb-2 focus-transtion form-control shadow" name="message" rows="12" cols="50" placeholder="Message"></textarea>
                            </div>

                            <div class="container w-75 text-center">
                                <input type="submit"  value="submit" class=" form-control rounded-pill bg-secondary w-100 text-white shadow" />
                            </div>
                        </div>
                    </form>
                </div>
            
                   
              
            </div>
            <ScrollAnimation />            
</div>

        </section>
    )
}
