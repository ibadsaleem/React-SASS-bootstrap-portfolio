import React from 'react'
import Collapsible from './SubComponents/Collapsible'
import ScrollAnimation from 'react-animate-on-scroll'
export default function FAQ() {
    return (
        <section class="faq">
            <ScrollAnimation animateOnce={true} initiallyVisible={false} delay={1} duration={3} animateIn="fadeIn">
            <h2 class="display-3 fw-bold text-center">FAQ?</h2>
            <div class="heading-line"></div>
            <p class="faq--subtitle text-center ">Frequently asked questions </p>
            <div class="container mt-3 mb-3">
        <div class="accordion" id="accordionExample">
           
            <Collapsible expand="true" target="#collapseOne" Heading="headingOne" aria="collapseOne" />
            <Collapsible expand="false"  target="#collapseTwo" Heading="headingTwo" aria="collapseTwo"/>
            <Collapsible expand="false"  target="#collapseThree" Heading="headingThree" aria="collapseThree"/>
          </div>
    </div>
    </ScrollAnimation>
        </section>
    )
}
