import React from 'react'
import Link from  'next/link'
import Team from '../../api/team'
import SectionTitle from '../SectionTitle';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {
    return (
        <section className="wpo-team-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <SectionTitle 
                            MainTitle={'Meet Your Plumbing Team'} 
                            Description={'Licensed, bonded, and insured technicians delivering clean, respectful service with upfront pricing.'}
                        />
                    </div>
                </div>
                <div className="wpo-team-wrap">
                    <div className="row">
                    {Team.map((team, aitem) => (
                            <div className="col col-lg-3 col-md-6 col-12" key={aitem}>
                                <div className="wpo-team-item">
                                    <div className="wpo-team-img">
                                        <img src={team.tImg} alt={team.name} loading="lazy" decoding="async"/>
                                        <span className="availability">Available Today</span>
                                        <div className="social">
                                            <ul>
                                                <li><Link aria-label="Facebook" href="/"><i className="ti-facebook"></i></Link></li>
                                                <li><Link aria-label="Instagram" href="/"><i className="ti-instagram"></i></Link></li>
                                                <li><Link aria-label="LinkedIn" href="/"><i className="ti-linkedin"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="wpo-team-text">
                                        <h2><Link onClick={ClickHandler} href='/team-single/[slug]' as={`/team-single/${team.slug}`}>{team.name}</Link></h2>
                                        <span>{team.title}</span>
                                        <ul className="badges">
                                            <li>Licensed</li>
                                            <li>Bonded</li>
                                            <li>Insured</li>
                                        </ul>
                                        <ul className="specialties">
                                            <li>Drain Cleaning</li>
                                            <li>Leak Detection</li>
                                            <li>Water Heaters</li>
                                        </ul>
                                        {team.description && <p>{team.description}</p>}
                                        <div className="social-inline">
                                            <ul>
                                                <li><Link aria-label="Facebook" href="/"><i className="ti-facebook"></i></Link></li>
                                                <li><Link aria-label="Instagram" href="/"><i className="ti-instagram"></i></Link></li>
                                                <li><Link aria-label="LinkedIn" href="/"><i className="ti-linkedin"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="actions">
                                            <Link className="theme-btn-s2 alt" href={`/team-single/${team.slug}`}>View Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;
