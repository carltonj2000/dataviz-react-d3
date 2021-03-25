import React from "react";
import { arc } from "d3";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const radius = centerY - strokeWidth / 2;
const eyeRadius = 50;
const eyeOffsetX = 110;
const eyeLeftX = eyeOffsetX;
const eyeRightX = -eyeOffsetX;
const eyeOffsetY = 90;
const eyesY = -eyeOffsetY;

const mouthWidth = 20;
const mouthRadius = 140;
const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle((Math.PI * 3) / 2);

function App() {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <circle
          r={radius}
          fill="yellow"
          stroke="black"
          stroke-width={strokeWidth}
        />
        <circle cx={eyeLeftX} cy={eyesY} r={eyeRadius} />
        <circle cx={eyeRightX} cy={eyesY} r={eyeRadius} />
        <path d={mouthArc()} />
      </g>
    </svg>
  );
}
export default App;
/*
  <!-- height / 2 - strokeWidth / 2 -->
    <!-- centerX - eyeOffsetX -->
    <!-- centerX + eyeOffsetX -->
    */
