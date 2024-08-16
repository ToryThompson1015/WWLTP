import React, { useState } from 'react';

const ProfileForm = ({ onProfileCreated }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [favoriteVideo, setFavoriteVideo] = useState('');
    const [favoriteVideos, setFavoriteVideos] = useState([]);

    // Add a new favorite video
    const handleAddVideo = () => {
        if (favoriteVideo) {
            setFavoriteVideos([...favoriteVideos, favoriteVideo]);
            setFavoriteVideo(''); // Clear the input field
        }
    };

    // Submit profile data
    const handleSubmit = (e) => {
        e.preventDefault();
        const profileData = { name, email, favoriteVideos };

        // Pass the profile data back to the parent (Header.js)
        onProfileCreated(profileData);

        // Reset form fields
        setName('');
        setEmail('');
        setFavoriteVideos([]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Profile</h2>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Favorite Video (YouTube URL):</label>
                <input
                    type="url"
                    value={favoriteVideo}
                    onChange={(e) => setFavoriteVideo(e.target.value)}
                />
                <button type="button" onClick={handleAddVideo}>
                    Add Video
                </button>
            </div>

            {/* Display favorite videos */}
            <ul>
                {favoriteVideos.map((video, index) => (
                    <li key={index}>{video}</li>
                ))}
            </ul>

            <button type="submit">Create Profile</button>
        </form>
    );
};

export default ProfileForm;
