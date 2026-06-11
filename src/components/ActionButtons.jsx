import React from "react";

function ActionButtons({
  increase,
  decrease,
  reset,
  count,
}) {
  return (
    <div className="buttons">
      <button
        className={`minus ${count === 0 ? "disabled-btn" : ""}`}
        onClick={decrease}
        disabled={count === 0}
      >
        -
      </button>

      <button
        className="reset"
        onClick={reset}
      >
        Reset
      </button>

      <button
        className="plus"
        onClick={increase}
      >
        +
      </button>
    </div>
  );
}

export default ActionButtons;