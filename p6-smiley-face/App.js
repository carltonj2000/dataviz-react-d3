import React from "react";

import Face from "./Face";

const width = 150;
const height = 150;

const App = () =>
  Array(6 * 3)
    .fill(0)
    .map(() => (
      <Face
        width={width}
        height={height}
        centerX={width / 2}
        centerY={height / 2}
        strokeWidth={5 + Math.round(Math.random() * 5)}
        eyeOffsetX={15 + Math.round(Math.random() * 15)}
        eyeOffsetY={15 + Math.round(Math.random() * 15)}
        eyeRadius={5 + Math.round(Math.random() * 10)}
        mouthWidth={5 + Math.round(Math.random() * 15)}
        mouthRadius={30 + Math.round(Math.random() * 10)}
      />
    ));
export default App;
