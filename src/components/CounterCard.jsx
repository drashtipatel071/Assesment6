import React from "react";

function CounterCard({ count }) {
  return (
    <div className="counter-wrapper">
      <div className="counter-ring"></div>
      <div className="counter-glass">
        <h1 className="counter-value">{count}</h1>
      </div>
    </div>
  );
}

export default CounterCard;