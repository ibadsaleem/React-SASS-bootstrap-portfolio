import React from 'react'
import Burneystore from '../Media/projects/burneystore.png';
import Alitfitt from '../Media/projects/alitfitt.png';
import ProjectCard from './SubComponents/ProjectCard';
export default function Projects() {
    return (
        <section id="projects" class="projects mt-4 pt-5">
            <div class="container mt-4">
                <h4 class="display-3 text-center fw-bold pd-3">Latest Projects</h4>
                <div class="heading-line pb-3"></div>
                <div class="container item-contoller">
                <div class="row pt-3 justify-content-lg-space-around justify-content-md-center firstrow">
                    <ProjectCard image={Burneystore} name="Burney Store" desc="ecommerce site for UAE clients"/>
                    <ProjectCard image={Alitfitt} name="Alitfitt" desc="Product website for UK based firm"/>
                   
                   
                    {/** add here 
                     * 
                     * 
                     * 
                     * till here
                    */}
                </div>
                </div>

            </div>
        </section>
    )
}
