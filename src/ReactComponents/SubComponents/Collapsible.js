import React from 'react'

export default function Collapsible(props) {
    
    return (
        <div class="accordion-item mb-2 custom-collapse">
        <h2 class="accordion-header" id={props.Heading}>
          <button class="accordion-button tall-button" type="button" data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded={props.expand} aria-controls={props.aria}>
            Accordion Item #1
          </button>
        </h2>
        <div id={props.aria} class="accordion-collapse collapse" aria-labelledby={props.Heading} data-bs-parent="#accordionExample">
          <div class="accordion-body custom-body">
            <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    )
}
