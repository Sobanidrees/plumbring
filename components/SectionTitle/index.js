import React from 'react'

const SectionTitle = (props) => {
    const { MainTitle, Description } = props;
    return (
        <div className="wpo-section-title">
            <h2>{MainTitle}</h2>
            {Description ? (
                <p>{Description}</p>
            ) : (
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been
                    the industry's standard dummy text ever since the 1500s.</p>
            )}
        </div>

    )
}

export default SectionTitle;