import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            {/* Main navigation bar with logo */}
            <div className="main-header">
                <div className="header-logo">
                    <h1>WWLPT</h1> {/* This can be replaced with an image logo */}
                </div>
                <nav className="header-nav">
                    <a href="#home">Home</a>
                    <a href="#sports">Sports</a>
                    <a href="#games">Games</a>
                    <a href="#live">Live</a>
                    <a href="#news">News</a>
                </nav>
                <div className="header-actions">
                    <button className="login-btn">Login</button>
                </div>
            </div>

            {/* Secondary navigation bar with categories */}
            <div className="secondary-header">
                <nav className="secondary-nav">
                    <a href="#football">Football</a>
                    <a href="#basketball">Basketball</a>
                    <a href="#esports">Esports</a>
                    <a href="#racing">Racing</a>
                    <a href="#tennis">Tennis</a>
                    <a href="#more">More</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
