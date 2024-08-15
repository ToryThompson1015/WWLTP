import React from 'react';
import '../styles/ParallaxSection.css';

const ParallaxSection = ({ title, description, backgroundImage }) => {
    return (
        <section
            className="parallax-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>
    );
};

export default ParallaxSection;