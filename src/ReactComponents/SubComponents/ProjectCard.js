import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
export default function ProjectCard(props) {
    return (
     
                <div class="col-lg-4 col-md-12  projectcard shadow mb-3">
                        <img class="img-fluid"  src={props.image}/>
                <div class="container-fluid projectcard--text text-center">
                    <div class="projectcard--name">{props.name}</div>
                    <div class="projectcard--desc">{props.desc}</div>
                    </div>
                        
                    </div>
              
       
    )
}
