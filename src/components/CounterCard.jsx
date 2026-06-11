import React from "react";

function CounterCard({ count }) {

  return (
    <div className="counter-box">
      <h1 className="counter">{count}</h1>
    </div>
  );
}

export default CounterCard;