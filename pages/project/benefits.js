import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const Benefits = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const benefits = props.benefits || [];

    return (
        <div className="wpo-benefits-section">
            <h2>Benefits</h2>
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="wpo-benefits-item">
                        {benefits.map((benefit, index) => (
                            <Accordion 
                                key={index} 
                                expanded={expanded === `panel${index + 1}`} 
                                onChange={handleChange(`panel${index + 1}`)}
                            >
                                <AccordionSummary
                                    expandIcon={""}
                                    aria-controls={`panel${index + 1}bh-content`}
                                    id={`panel${index + 1}bh-header`}
                                >
                                    <Typography>{benefit.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {benefit.description}
                                    </Typography>
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