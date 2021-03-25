import React from "react";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const radius = centerY - strokeWidth / 2;
const eyeRadius = 50;
const eyeOffsetX = 100;
const eyeLeftX = centerX - eyeOffsetX;
const eyeRightX = centerX + eyeOffsetX;
const eyeOffsetY = 70;
const eyesY = centerY - eyeOffsetY;
function App() {
  return (
    <svg width={width} height={height}>
      <circle
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="yellow"
        stroke="black"
        stroke-width={strokeWidth}
      />
      <circle cx={eyeLeftX} cy={eyesY} r={eyeRadius} />
      <circle cx={eyeRightX} cy={eyesY} r={eyeRadius} />
    </svg>
  );
}
export default App;
/*
  <!-- height / 2 - strokeWidth / 2 -->
    <!-- centerX - eyeOffsetX -->
    <!-- centerX + eyeOffsetX -->
    */
