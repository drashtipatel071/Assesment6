import React from "react";

function AchievementCard({ count }) {
  let achievement = "Beginner";

  if (count >= 10) {
    achievement = "Counter Master";
  } else if (count >= 5) {
    achievement = "Speed Tapper";
  }

  return (
    <div className="stat-card">
      <div className="stat-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3M13 15l3-3-3-3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
        </svg>
        <span>Current Rank</span>
      </div>
      <div className="stat-value">{achievement}</div>
    </div>
  );
}

export default AchievementCard;