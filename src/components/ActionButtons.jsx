import React from "react";

function ActionButtons({ increase, decrease, reset, count }) {
  return (
    <div className="controls">
      <button
        className="btn btn-decrease"
        onClick={decrease}
        disabled={count === 0}
        aria-label="Decrease"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
        </svg>
      </button>

      <button
        className="btn btn-reset"
        onClick={reset}
        aria-label="Reset"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ marginRight: '6px', width: '18px', height: '18px' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v5h5" />
        </svg>
        Reset
      </button>

      <button
        className="btn btn-increase"
        onClick={increase}
        aria-label="Increase"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  );
}

export default ActionButtons;