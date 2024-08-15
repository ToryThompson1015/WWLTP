import React from 'react';
import Slideshow from './Slideshow';  // Import the Slideshow component
import '../styles/ParallaxSection.css';

const ParallaxSection = ({ title, description, images }) => {
    return (
        <section className="parallax-section">
            {/* Slideshow integrated here */}
            <Slideshow images={images} interval={5000} />

            <div className="content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>
    );
};

export default ParallaxSection;