import React, { useState } from 'react'
import Collapsible from './SubComponents/Collapsible'
import ScrollAnimation from 'react-animate-on-scroll'
export default function FAQ() {
    const [questionbank, setquestionbank] = useState([
        {
            "question" : "",
            "answer"   : "",
            "expand"  : true,
            "target"  : "#collapseOne",
            "Heading" :  "headingOne",
            "aria" : "collapseOne",
        },
        {
            "question" : "",
            "answer"   : "",
            "expand"  : false,
            "target"  : "#collapseTwo",
            "Heading" :  "headingTwo",
            "aria" : "collapseTwo",
        },
        {
            "question" : "",
            "answer"   : "",
            "expand"  : true,
            "target"  : "#collapseThree",
            "Heading" :  "headingThree",
            "aria" : "collapseThree",
        }

    ]);
    
    return (
        <section id= "faq"class="faq">
            <ScrollAnimation animateOnce={true} initiallyVisible={false} delay={1} duration={3} animateIn="fadeIn">
            <h2 class="display-3 fw-bold text-center">FAQ?</h2>
            <div class="heading-line"></div>
            <p class="faq--subtitle text-center ">Frequently asked questions </p>
            <div class="container mt-3 mb-3">
        <div class="accordion" id="accordionExample">
              {questionbank.map((el)=>{
                return ( <Collapsible question={el.question} answer={el.answer} expand={el.expand} target={el.target} Heading={el.Heading} aria={el.aria} />)
            })}

          </div>
    </div>
    </ScrollAnimation>
        </section>
    )
}
