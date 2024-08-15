import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/VideoCarousel.css';

const VideoCarousel = ({ videos }) => {
    const [videoData, setVideoData] = useState([]);

    // Your YouTube Data API key (replace with your actual key)
    const API_KEY = 'AIzaSyB_Wha02UgiwGlZHQRzRP3MY9DDK9UfZjE';

    // Function to fetch video details from YouTube Data API
    const fetchVideoData = async () => {
        try {
            const videoIds = videos.map(video => video.videoId).join(',');

            // Fetch video details using the YouTube Data API
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet,liveStreamingDetails&id=${videoIds}&key=${API_KEY}`
            );

            // Extract the data you need from the API response
            const fetchedVideoData = response.data.items.map(item => ({
                id: item.id,
                title: item.snippet.title,
                viewers: item.liveStreamingDetails?.concurrentViewers || 'N/A', // live viewers, if available
            }));

            // Update the state with fetched video data
            setVideoData(fetchedVideoData);
        } catch (error) {
            console.error('Error fetching video data:', error);
        }
    };

    // Fetch video data when the component mounts
    useEffect(() => {
        fetchVideoData();
    }, []);

    return (
        <section className="video-carousel">
            <h2 className="carousel-title">Featured Videos</h2>
            <div className="carousel-wrapper">
                <div className="carousel">
                    {videoData.length > 0 && videoData.map((video, index) => (
                        <div className="carousel-item" key={index}>
                            {/* Render the iframe */}
                            <div
                                className="iframe-container"
                                dangerouslySetInnerHTML={{
                                    __html: `<iframe width="200" height="150" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>`,
                                }}
                            />
                            {/* Display the fetched title and viewer count */}
                            <h3 className="video-title">{video.title}</h3>
                            <p className="video-views">{video.viewers} watching now</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoCarousel;
