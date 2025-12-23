import React, { useState } from 'react';
import Projects from '../../api/project'
import Link from "next/link";
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
                                            {project.video ? (
                                                <video 
                                                    src={project.video} 
                                                    muted 
                                                    autoPlay 
                                                    loop 
                                                    playsInline 
                                                    preload="auto"
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            ) : (
                                                <img className="img-responsive" src={project.pImg} alt="" />
                                            )}
                                            <span className={`badge-chip ${String(project.subTitle || '').toLowerCase().replace(/\s+/g, '-')}`}>
                                                <span className="chip-icon">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                                        <path d="M4 20h16v-2H4v2Zm14-8h-3V4h-2v8H7l5 5 6-5Z" fill="#ffffff"/>
                                                    </svg>
                                                </span>
                                                {project.subTitle}
                                            </span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.slug}`}>{project.title}</Link></h3>
                                                <p>{project.description}</p>
                                                <div className="hover-cta">
                                                    <Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.slug}`} className="theme-btn-s2">
                                                        View details
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={`See-all-btn ${buttonActive ? "d-none" : ""}`}>
                            <span onClick={() => setButtonState(!buttonActive)}>
                                <a className="theme-btn" onClick={() => setCount(Projects.length)}>
                                    View All Projects
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
