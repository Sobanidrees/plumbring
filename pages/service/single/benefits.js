import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const FAQS = {
    'drain-cleaning': [
        { q: 'What causes slow or backed‑up drains?', a: 'Common culprits are grease, scale, hair, wipes, and roots. We clear clogs with augering and can camera‑inspect to find trouble spots for long‑term fixes.' },
        { q: 'Will you protect my fixtures and floors?', a: 'Yes. We use floor protection and finish‑safe practices. We verify flow before leaving and offer maintenance tips to keep lines clear.' },
        { q: 'When do you recommend hydro jetting?', a: 'Jetting is ideal for heavy grease and scale in kitchen lines or long runs. We can pair it with camera inspection to validate a deep clean.' },
    ],
    'water-heater-service': [
        { q: 'Repair or replace — how do I decide?', a: 'We diagnose the issue and explain costs and expected lifespan. If replacement makes more sense, we size a unit to your home and handle permits.' },
        { q: 'Do you install tankless?', a: 'Yes. We install tank and tankless units to code, including venting, gas, condensate, and optional recirculation for faster hot water.' },
        { q: 'Can you haul away the old unit?', a: 'Absolutely. Removal and disposal are included in our install services.' },
    ],
    'slab-leak-repair': [
        { q: 'How do you locate a slab leak?', a: 'We use acoustic listening, thermal imaging, and pressure isolation to pinpoint the leak with minimal access.' },
        { q: 'Direct repair vs reroute — what’s the difference?', a: 'Direct repair accesses the leak at the slab. Reroute bypasses the failed section above ground. We explain both options and recommend the best fit.' },
        { q: 'Will you handle patching?', a: 'We coordinate drywall patching and keep sites clean, with dust control and protection throughout the job.' },
    ],
    'leak-detection-repair': [
        { q: 'How invasive is leak detection?', a: 'We start non‑invasively using acoustic and thermal tools. If access is needed, we minimize cuts and repair surfaces cleanly.' },
        { q: 'Do you pressure test after repairs?', a: 'Yes. We confirm the fix with pressure testing and provide moisture mitigation guidance if needed.' },
    ],
    'sewer-trenchless': [
        { q: 'What trenchless options do you offer?', a: 'We provide CIPP lining, pipe bursting, and spot repairs depending on line condition, size, and access.' },
        { q: 'Will landscaping be affected?', a: 'Trenchless methods minimize digging. We plan access points to reduce impact and restore areas after work.' },
    ],
    'hydro-jetting': [
        { q: 'Is jetting safe for my pipes?', a: 'Yes when sized correctly. We assess pipe material and condition, then jet within recommended PSI to protect lines.' },
        { q: 'Do you camera inspect after jetting?', a: 'We can perform pre/post camera inspection to validate results and document problem areas.' },
    ],
    'main-water-line': [
        { q: 'Can you replace my main line without trenching everywhere?', a: 'We offer trenchless options where feasible and plan routes to minimize yard and hardscape disruption.' },
        { q: 'Will my pressure improve?', a: 'Replacing undersized or corroded lines typically restores strong, stable flow. We can add a PRV for proper regulation.' },
    ],
    'default': [
        { q: 'Do you offer same‑day service?', a: 'Yes. We prioritize urgent plumbing issues with same‑day arrival whenever possible.' },
        { q: 'Will I get upfront pricing?', a: 'Absolutely. We present clear options and pricing before any work begins.' },
        { q: 'Are your technicians licensed?', a: 'Yes. All technicians are licensed, insured, and trained in finish‑safe practices.' },
    ],
};

const Benefits = ({ slug }) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="wpo-faq-section">
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="faq-list">
                        {(FAQS[slug] || FAQS['default']).map((item, idx) => (
                            <Accordion key={idx} expanded={expanded === `panel-${idx}`} onChange={handleChange(`panel-${idx}`)}>
                                <AccordionSummary
                                    expandIcon={
                                        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.12 9.29 12 13.17l3.88-3.88 1.41 1.41L12 16l-5.29-5.29 1.41-1.42Z" fill="#1b57c0"/>
                                        </svg>
                                    }
                                    aria-controls={`panel-${idx}-content`}
                                    id={`panel-${idx}-header`}
                                >
                                    <Typography className="faq-q">{item.q}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className="faq-a">{item.a}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Benefits;
