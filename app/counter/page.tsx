"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const ResetHandler = () => {
    setCount(0);
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };

  const incrementHandler = () => {
    setCount(count + 1);
  };

  return (
    <div className="mt-10 ml-10">
      <span className="text-2xl ">Counter App</span>
      <div className="mt-4">
        <button
          onClick={decrementHandler}
          className="bg-blue-700 py-2 px-4 rounded text-white mr-3"
        >
          -
        </button>
        {/* values */}
        <span>{count}</span>

        <button
          onClick={incrementHandler}
          className="bg-blue-700 text-white py-2 px-4 rounded ml-3"
        >
          +
        </button>
      </div>

      {/* ternery operator on reset button */}
      {count !== 0 && (
        <div className=" mt-5">
          <button
            onClick={ResetHandler}
            className="bg-blue-700 text-white py-2 px-4 rounded ml-3"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
