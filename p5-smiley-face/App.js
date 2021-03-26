import React from "react";

import Face from "./Face";
import Eyes from "./Eyes";
import Mouth from "./Mouth";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const radius = centerY - strokeWidth / 2;

const eyeRadius = 50;
const eyeOffsetX = 110;
const eyeOffsetY = 90;

const mouthWidth = 20;
const mouthRadius = 140;

const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      <Face {...{ radius, strokeWidth }} />
      <Eyes
        {...{ radius: eyeRadius, offsetX: eyeOffsetX, offsetY: eyeOffsetY }}
      />
      <Mouth {...{ radius: mouthRadius, width: mouthWidth }} />
    </g>
  </svg>
);
export default App;
