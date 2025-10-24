import React from 'react'
import "./ProfileDashboard.css";

const ProfileHeader = ({ name, title, avatar }) => {
    return (
        <div className="profile-header">
            <img src={avatar} alt={name} className="profile-avatar" />
            <h2 className="profile-name">{name}</h2>
            <p className="profile-title">{title}</p>
        </div>
    )
}

export default ProfileHeader