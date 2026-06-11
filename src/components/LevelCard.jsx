import React from "react";

function LevelCard({ count }) {

  const level = Math.floor(count / 5) + 1;

  return (
    <div className="info-card">
      <h2>⭐  Level</h2>

      <p>Level {level}</p>
    </div>
  );
}

export default LevelCard;