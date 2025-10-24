import React from "react";
import "./ProfileDashboard.css";

const SkillBadge = ({ skill, level }) => {
    const getColor = () => {
    const colors = {
        beginner: "#808080",     // Gray
        intermediate: "#1E90FF", // Blue
        expert: "#00A36C"        // Green
    };

    return colors[level.toLowerCase()] || "#555"; // Default color
};

    return (
        <span className="skill-badge" style={{ backgroundColor: getColor() }}>
            {skill} - {level}
        </span>
    );
};

export default SkillBadge;