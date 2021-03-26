import React from "react";

import FaceContainer from "./FaceContainer";
import FaceBackground from "./FaceBackground";
import Eyes from "./Eyes";
import Mouth from "./Mouth";

const Face = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthWidth,
  mouthRadius,
}) => (
  <FaceContainer {...{ width, height, centerX, centerY }}>
    <FaceBackground {...{ radius: centerY - strokeWidth / 2, strokeWidth }} />
    <Eyes
      {...{ radius: eyeRadius, offsetX: eyeOffsetX, offsetY: eyeOffsetY }}
    />
    <Mouth {...{ radius: mouthRadius, width: mouthWidth }} />
  </FaceContainer>
);
export default Face;
