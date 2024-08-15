import React from 'react';
import '../styles/VideoCarousel.css';

const VideoCarousel = ({ videos }) => {
    return (
        <section className="video-carousel">
            <h2 className="carousel-title">Featured Videos</h2>
            <div className="carousel-wrapper">
                <div className="carousel">
                    {videos.map((video, index) => (
                        <div className="carousel-item" key={index}>
                            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                            <h3 className="video-title">{video.title}</h3>
                            <p className="video-views">{video.views} views</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoCarousel;
