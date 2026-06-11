import React from "react";

function AchievementCard({ count }) {

  let achievement = "Beginner";

   if (count >= 10) {
    achievement = "Counter Master 👑";
  } else if (count >= 5) {
    achievement = "Speed Tapper 🔥";
  }

  return (
    <div className="info-card">
      <h2>🏆 Achievement</h2>

      <p>{achievement}</p>
    </div>
  );
}

export default AchievementCard;