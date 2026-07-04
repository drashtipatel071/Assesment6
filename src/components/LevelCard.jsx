import React from "react";

function LevelCard({ count }) {
  const level = Math.floor(count / 5) + 1;

  return (
    <div className="stat-card">
      <div className="stat-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span>Level Progress</span>
      </div>
      <div className="stat-value">Level {level}</div>
    </div>
  );
}

export default LevelCard;