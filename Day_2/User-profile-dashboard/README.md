## 🎯 Task 4: User Profile Dashboard

**Task:** Build a complete user profile with multiple components using props

**Requirements:**
1. Create these components:
   - `ProfileHeader.jsx` - accepts `name`, `title`, `avatar`
   - `ProfileStats.jsx` - accepts `projects`, `followers`, `following`
   - `SkillBadge.jsx` - accepts `skill`, `level` (Beginner/Intermediate/Expert)
   - `ProfileCard.jsx` - wrapper component using `children`
2. In `App.jsx`, compose all components together
3. Pass different skill levels and show different badge colors:
   - Beginner: Gray
   - Intermediate: Blue
   - Expert: Green
4. Style everything professionally

**Sample Output:**
```
[Avatar Image]
Chinwe Okoro
Senior Developer at Paystack

Projects: 45  |  Followers: 1.2K  |  Following: 300

Skills:
[React - Expert] [JavaScript - Expert] [CSS - Intermediate]
```

**Challenge:** Make the stats clickable and change color on hover

---