import React from 'react';
import '../styles/ContentSection.css';

const ContentSection = ({ title, content }) => {
    return (
        <section className="content-section">
            <div className="content">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </section>
    );
};

export default ContentSection;
