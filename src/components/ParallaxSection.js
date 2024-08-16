import React from 'react';
import '../styles/ParallaxSection.css';

const ParallaxSection = ({ title, description, backgroundImage }) => {
    // Add your list of trending games here
    const trendingGames = ['League of Legends', 'Valorant', 'CS:GO', 'Fortnite'];

    return (
        <section
            className="parallax-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="content">
                <h2>{title}</h2>
                {description && <p>{description}</p>}

                {/* Trending Games Section */}
                <div className="trending-games">
                    {trendingGames.map((game, index) => (
                        <div className="game-card" key={index}>
                            {game}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ParallaxSection;