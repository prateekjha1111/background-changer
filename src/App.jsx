import React, { useState, useEffect } from "react";

const App = () => {
  const [color, setColor] = useState(() => {
    return localStorage.getItem("backgroundColor") || "black";
  });

  useEffect(() => {
    localStorage.setItem("backgroundColor", color);
  }, [color]);

  return (
    <div
      className="w-full h-screen flex items-center justify-center flex-col"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap items-center justify-around bg-blue-950 shadow-white shadow-sm px-5 py-3 mt-16 gap-6 rounded-lg">
        <button
          onClick={() => setColor("red")}
          className="px-3 py-2 text-white rounded bg-red-700"
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="px-3 py-2 text-white rounded bg-green-700"
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="px-3 py-2 text-white rounded bg-blue-700"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="px-3 py-2 text-white rounded bg-yellow-500"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("orange")}
          className="px-3 py-2 text-white rounded bg-orange-700"
        >
          Orange
        </button>
        <button
          onClick={() => setColor("cyan")}
          className="px-3 py-2 text-white rounded bg-cyan-700"
        >
          Cyan
        </button>
        <button
          onClick={() => setColor("white")}
          className="px-3 py-2 text-black rounded bg-white"
        >
          White
        </button>
        <button
          onClick={() => setColor("black")}
          className="px-3 py-2 text-white rounded bg-black"
        >
          Black
        </button>
      </div>
    </div>
  );
};

export default App;
