import React, { useState, useEffect } from "react";
import "./App.css";

import CounterCard from "./components/CounterCard";
import ActionButtons from "./components/ActionButtons";
import LevelCard from "./components/LevelCard";
import AchievementCard from "./components/AchievementCard";

function App() {
  // STATE WITH LOCAL STORAGE
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) || 0;
  });

  // LIMITS
  const warningLimit = 10;
  const maxLimit = 20;

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  // INCREASE
  const increase = () => {
    if (count < maxLimit) {
      setCount((prev) => prev + 1);
    }
  };

  // DECREASE
  const decrease = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  // RESET
  const reset = () => {
    setCount(0);
    localStorage.removeItem("count");
  };

  return (
    <div className="app">
      {/* TITLE */}
      <h1 className="title">
        Counter - App
      </h1>

      {/* COUNTER */}
      <CounterCard count={count} />

      {/* WARNING MESSAGE */}
      {count > warningLimit && (
        <p className="warning">
          ⚠ Warning: Counter exceeded limit!
        </p>
      )}

      {/* MAX LIMIT MESSAGE */}
      {count === maxLimit && (
        <p className="max-warning">
          🚫 Maximum limit reached!
        </p>
      )}

      {/* BUTTONS */}
      <ActionButtons
        increase={increase}
        decrease={decrease}
        reset={reset}
        count={count}
      />

      {/* EXTRA CARDS */}
      <div className="cards">
        <LevelCard count={count} />
        <AchievementCard count={count} />
      </div>
    </div>
  );
}

export default App;