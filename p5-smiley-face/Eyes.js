import React from "react";

import Eye from "./Eye";

const Eyes = ({ offsetX, offsetY, radius }) => (
  <>
    <Eye {...{ radius, cx: -offsetX, cy: -offsetY }} />
    <Eye {...{ radius, cx: offsetX, cy: -offsetY }} />
  </>
);

export default Eyes;
