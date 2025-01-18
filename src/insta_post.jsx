import React, { useState } from "react";
import "./App.css";

const PostCard = () => {
    const [isPublic, setIsPublic] = useState(true);
    const [isLiked, setIsLiked] = useState(false);

    const handlePrivacyToggle = () => {
        setIsPublic(!isPublic);
    };

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="post-card">
            {/* Privacy Toggle */}
            <div className="privacy-toggle">
                <button
                    className={`privacy-button ${isPublic ? "active" : ""}`}
                    onClick={() => setIsPublic(true)}
                >
                    Public
                </button>
                <button
                    className={`privacy-button ${!isPublic ? "active" : ""}`}
                    onClick={() => setIsPublic(false)}
                >
                    Private
                </button>
            </div>

            {/* Post Content */}
            <div className="post-content">
                <div className="post-header">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="User Avatar"
                        className="user-avatar"
                    />
                    <div className="post-info">
                        <h4 className="user-name">Sambit Pradhan</h4>
                        <p className="post-date">Published: September 15, 2024 08:19 PM</p>
                    </div>
                </div>
                <p className="post-text">
                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero.
                </p>
                <img
                    src="https://via.placeholder.com/800x400"
                    alt="Post"
                    className="post-image"
                />
            </div>

            {/* Post Footer */}
            <div className="post-footer">
                <div className="post-actions">
                    <button
                        className={`like-button ${isLiked ? "liked" : ""}`}
                        onClick={handleLike}
                    >
                        ❤️ 2k likes
                    </button>
                    <button className="comments-button">💬 25 comments</button>
                    <button className="shares-button">🔄 6 shares</button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
