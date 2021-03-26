import React from "react";

const Face = ({ radius, strokeWidth }) => (
  <circle r={radius} fill="yellow" stroke="black" stroke-width={strokeWidth} />
);

export default Face;
