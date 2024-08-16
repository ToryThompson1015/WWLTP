import React, { useState } from 'react';
import ProfileForm from '../components/ProfileForm'; // Import the ProfileForm component
import '../styles/Header.css';

const Header = () => {
    // State to control modal visibility
    const [showModal, setShowModal] = useState(false);

    // Function to toggle modal visibility
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <header>
            {/* Main navigation bar with logo */}
            <div className="main-header">
                <div className="header-logo">
                    <h1>WWLPT</h1> {/* This can be replaced with an image logo */}
                </div>
                <nav className="header-nav">
                    <a href="#home">Home</a>
                    <a href="#sports">ESports</a>
                    <a href="#games">Games</a>
                    <a href="#live">Live</a>
                    <a href="#news">News</a>
                </nav>
                <div className="header-actions">
                    <button className="login-btn" onClick={toggleModal}>Login</button>
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

            {/* Modal section for Profile Form */}
            {showModal && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={toggleModal}>X</button>
                        <ProfileForm onProfileCreated={() => toggleModal()} />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
