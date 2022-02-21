import React from "react";
import displayPicture from "../images/displayPicture.jpg";

function Image() {
  return (
    <img
      className="Display-Picture"
      src={displayPicture}
      alt="Display Pic"
      width="400px"
      height="240px"
    />
  );
}

export default Image;
