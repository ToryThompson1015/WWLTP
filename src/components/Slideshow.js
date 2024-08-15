import React, { useState, useEffect } from 'react';
import '../styles/Slideshow.css';

const Slideshow = ({ images = [], interval = 3000 }) => { // Default empty array for images
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    // Auto-slide effect
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, interval);
        return () => clearInterval(slideInterval); // Clean up the interval on unmount
    }, [currentSlide, interval]);

    // Check if images exist and has elements
    if (!images || images.length === 0) {
        return <div>No images to display</div>;
    }

    return (
        <div className="slideshow-container">
            {images.map((image, index) => (
                <div
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    key={index}
                    style={{ backgroundImage: `url(${image})` }}
                >
                </div>
            ))}
            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default Slideshow;
