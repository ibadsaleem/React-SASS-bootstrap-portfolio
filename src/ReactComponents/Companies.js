import React, { Component , useState } from 'react'
import Burneystore from "../Media/burneystore.png";

import alitfitt from "../Media/alitfitt3.png";
export function Companies() {
    let [company] = useState({
        "burneystore" : {
            link : "https://burneystore.com/",
            image : {Burneystore}
        },
        "alitfitt" : {
            link : "https://alitfitt.web.app/",
            image : {alitfitt}
        }
    })


        return (
            <section>
                <div class="container">
                    <div class="row  text-center">
                        <h4 class="fw-bold mb-3 ">Clients I have worked with</h4>
                        <div class="heading-line"></div>
                    </div>
                    <div class="row justify-content-sm-around">
                        <div class="col-sm-6 p-1 col-lg-6 m-auto  justify-content-md-center  shadow-sm companies--div1"><div class="justify-content-center text-center "><a target="_blank" href={company['burneystore'].link}><img class="image" src={Burneystore} alt="burneystore" /></a></div></div>
                        <div class="col-sm-6 p-1 col-lg-6 m-auto justify-content-md-center shadow-sm companies--div2"><div  class="justify-content-center text-center "><a target="_blank" href={company['alitfitt'].link}><img class="image" src={alitfitt} alt="alitfitt" /></a></div></div>
                        {/* <div class="col-md-2 test"><a class="test1  companies" target="_blank" href={company['burneystore'].link}><img src={Burneystore} alt="burneystore" /></a></div>
                        <div class="col-md-2 test1"><a class="test1 companies" target="_blank" href={company['alitfitt'].link}><img style={{resize: "cover"}}src={alitfitt} alt="alitfitt" /></a></div>
                        <div class="col-md-2 test"><a class="test1  companies" target="_blank" href={company['burneystore'].link}><img src={Burneystore} alt="burneystore" /></a></div>
                        <div class="col-md-2 test1"><a class="test1 companies" target="_blank" href={company['alitfitt'].link}><img style={{resize: "cover"}}src={alitfitt} alt="alitfitt" /></a></div> */}
                        

                    </div>
                </div> 
            </section>
        );
    
}

export default Companies;
