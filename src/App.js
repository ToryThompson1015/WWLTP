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
        'https://media.istockphoto.com/id/1410113854/photo/asian-esports-team-holding-trophy-mock-up-cheque-cheering-winning-grand-final-videogame-on.webp?b=1&s=612x612&w=0&k=20&c=yxHuCYDU9lrKjWTQbBP7unfyq4OKn6ohNXZZ3oW3_jo=',
        'https://media.istockphoto.com/id/2092498809/photo/african-american-man-gamer-playing-a-multiplayer-video-game-with-his-friends.jpg?s=2048x2048&w=is&k=20&c=pIyeqpeeSy2BVEba3SZ7Ko-PWQfw3CtGRAUyGzK1j8g=',
        'https://media.istockphoto.com/id/1408070791/photo/asian-sports-event-crew-working-at-backstage-with-control-panel-on-stage-lighting-sound.webp?b=1&s=612x612&w=0&k=20&c=JSerjq9ZD5h3oMmVqIPCOq-Od2hv-FFrEUb0HZfC8MY=',

    ]

    return (
        <div className="app">
            <Header />
            <Slideshow images={images} interval={5000} />
            <ParallaxSection
            
                title="Beautiful Parallax Section"
                description="Scroll down to see the parallax effec."
                backgroundImage="https://img.freepik.com/free-vecstic-black-yellow-gaming-background_331749-887.jpg?t=st=1723737601~exp=1723741201~hmac=a59038877bac5bfd5af6f8dbf8dd4477eafa70097c67a941dc9ec8fb3d60bd38&w=996"
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
