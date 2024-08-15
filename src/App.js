import React from 'react';
import Header from './components/Header';
import ParallaxSection from './components/ParallaxSection';
import ContentSection from './components/ContentSection';
import VideoCarousel from './components/VideoCarousel';
import './styles/App.css';

const App = () => {
    const videos = [
        {
            title: 'Football Highlights',
            views: '2M',
            thumbnail: 'https://example.com/football-thumbnail.jpg',
        },
        {
            title: 'Basketball Playoffs',
            views: '1.5M',
            thumbnail: 'https://example.com/basketball-thumbnail.jpg',
        },
        {
            title: 'Esports Tournament',
            views: '800K',
            thumbnail: 'https://example.com/esports-thumbnail.jpg',
        },
        {
            title: 'Live Gaming Stream',
            views: '900K',
            thumbnail: 'https://example.com/gaming-thumbnail.jpg',
        },
        {
            title: 'Top 10 Plays',
            views: '600K',
            thumbnail: 'https://example.com/top-plays-thumbnail.jpg',
        },
        {
            title: 'Fitness Training',
            views: '300K',
            thumbnail: 'https://example.com/fitness-thumbnail.jpg',
        },
    ];

    return (
        <div className="app">
            <Header />
            <ParallaxSection
                title="Beautiful Parallax Section"
                description="Scroll down to see the parallax effect."
                backgroundImage="https://img.freepik.com/free-vector/futuristic-black-yellow-gaming-background_331749-887.jpg?t=st=1723737601~exp=1723741201~hmac=a59038877bac5bfd5af6f8dbf8dd4477eafa70097c67a941dc9ec8fb3d60bd38&w=996"
            />
            <VideoCarousel videos={videos} />  {/* Add the video carousel */}
            <ContentSection
                title="More Content Below"
                content="This is some additional content below the parallax section."
            />
            <VideoCarousel videos={videos} />  {/* Add the video carousel */}
        </div>
    );
};

export default App;
