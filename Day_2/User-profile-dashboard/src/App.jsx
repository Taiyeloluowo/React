import React from "react";
import ProfileCard from "./components/ProfileCard";
import ProfileHeader from "./components/ProfileHeader";
import ProfileStats from "./components/ProfileStats";
import SkillBadge from "./components/SkillBadge";

import avatar1 from './assets/Taiyeloluowo.jpg';

const App = () => {
  return (
    <div className="app-container">
      <h1>User Profile Dashboard</h1>

      <ProfileCard>
        <ProfileHeader
          name="Oluwagbotemi Ayomiposi"
          title="Senior Developer at OpenAI"
          avatar={avatar1}
        />

        <ProfileStats projects={57} followers="1.7M" following={300} />

        <div className="skills-section">
          <h3>Skills:</h3>
          <div className="skills-list">
            <SkillBadge skill="React" level="Intermediate" />
            <SkillBadge skill="JavaScript" level="Intermediate" />
            <SkillBadge skill="CSS" level="Beginner" />
            <SkillBadge skill="PHPScript" level="Beginner" />
            <SkillBadge skill="UI/UX Design" level="Expert" />
            <SkillBadge skill="Node.js" level="Expert" />

          </div>
        </div>
      </ProfileCard>
    </div>
  );
};

export default App;