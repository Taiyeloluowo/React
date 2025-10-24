import React, { useState } from "react";

const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const toggleLike = () => {
        if (disabled) return;
        setDisabled(true);

        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);

        // Disable for 1 second
        setTimeout(() => setDisabled(false), 1000);
    };

    return (
        <div className="like-container">
            <h2>Like Button</h2>
            <button
                onClick={toggleLike}
                disabled={disabled}
                className={`like-btn ${liked ? "liked" : "unliked"}`}
            >
                {liked ? "❤️ Liked" : "🤍 Like"}
            </button>
            <p className="like-count">
                {likes} {likes === 1 ? "like" : "likes"}
            </p>
            <div className="marquee" aria-hidden="false">
                <p className="hint">(Click me here to toggle)</p>
            </div>
        </div>
    );
};

export default LikeButton;