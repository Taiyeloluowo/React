import React from "react";

import "./ProfileDashboard.css";

const ProfileStats = ({ projects, followers, following }) => {
    return (
        <div className="profile-stats">
            <span className="stat-item">Projects: <bold>{projects}</bold></span>
            <span className="stat-item">Followers: <strong>{followers}</strong></span>
            <span className="stat-item">Following: <strong>{following}</strong></span>
        </div>
    );
};

export default ProfileStats;