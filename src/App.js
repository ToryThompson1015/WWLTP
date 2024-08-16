import React from 'react';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import ParallaxSection from './components/ParallaxSection';
import ContentSection from './components/ContentSection';
import VideoCarousel from './components/VideoCarousel';
import './styles/App.css';

const App = () => {
    const videos = [
        {
            videoId: 'di2TytiIAQU', // YouTube video ID
        },
        {
            videoId: 'nvOAcuZgUmU',
        },
        {
            videoId: 'zD15w2465p4',
        },
        {
            videoId: 'HgztdK3E9nw',
        },{
            videoId: 'HgztdK3E9nw',
        },{
            videoId: 'HgztdK3E9nw',
        },{
            videoId: 'HgztdK3E9nw',
        },{
            videoId: 'HgztdK3E9nw',
        },
    ];
    const images = [
'https://images.unsplash.com/photo-1636487409974-d494e719d749?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXNwb3J0cyUyMHBsYXllcnxlbnwwfHwwfHx8MA%3D%3D',      
  'https://media.istockphoto.com/id/2092498809/photo/african-american-man-gamer-playing-a-multiplayer-video-game-with-his-friends.jpg?s=2048x2048&w=is&k=20&c=pIyeqpeeSy2BVEba3SZ7Ko-PWQfw3CtGRAUyGzK1j8g=',
        'https://media.istockphoto.com/id/1408070791/photo/asian-sports-event-crew-working-at-backstage-with-control-panel-on-stage-lighting-sound.webp?b=1&s=612x612&w=0&k=20&c=JSerjq9ZD5h3oMmVqIPCOq-Od2hv-FFrEUb0HZfC8MY=',

    ]

    return (
        <div className="app">
            <Header />
            <Slideshow images={images} interval={5000} />
            <VideoCarousel videos={videos} />  {/* Add the video carousel */}
            <ParallaxSection
            
                title="Beautiful Parallax Section"
                description="Scroll down to see the parallax effec."
                backgroundImage="https://img.freepik.com/premium-vector/modern-e-sport-gaming-background-realistic-yellow-design_608845-107.jpg"
            />
            
            <ContentSection
                title="More Content Below"
                content="This is some additional content below the parallax section."
            />
            <VideoCarousel videos={videos} />  {/* Add the video carousel */}
            
        </div>
    );
};

export default App;
