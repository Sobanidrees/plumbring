import React, { useState } from 'react';
import Projects from '../../api/project'
import SectionTitle from "../SectionTitle";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection = () => {

    const [number, setCount] = useState(6);
    const [buttonActive, setButtonState] = useState(false);

    return (
        <section className="wpo-projects section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <SectionTitle 
                            MainTitle={'Our Latest Project'} 
                            Description={'See how we solve real plumbing challenges—precise repairs, clean installs, and upgrades that last.'}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="projects-grids gallery-container clearfix">
                            {Projects.slice(0, number).map((project, prj) => (
                                <div className="grid" key={prj}>
                                    <div className="project-inner">
                                        <div className="img-holder">
                                            <img className="img-responsive" src={project.pImg} alt="" />
                                        </div>
                                            <div className="hover-content">
                                            <div className="details">
                                                <h3><span>{project.title}</span></h3>
                                                <p>{project.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={`See-all-btn ${buttonActive ? "d-none" : ""}`}>
                            <span onClick={() => setButtonState(!buttonActive)}>
                                <a legacyBehavior className="theme-btn" onClick={() => setCount(number + number)}>
                                    View All Project
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;
