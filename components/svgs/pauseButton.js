import React from "react";
const PauseButton = ({
  c1 = "#0ffb91",
  c2 = "#000000",
  b1 = "#a3a3a3", //"#0a4d57",
  b2 = "#4e4e4e" //"#17a2b8"
}) => {
  const style1 = {
    fill: c1, //"#0ffb91",
    stroke: c2, //"#000000",
    strokeWidth: "4",
    strokeLinecap: "butt",
    strokeLinejoin: "round",
    strokeMiterlimit: "4",
    fillOpacity: "1"
  };
  const style2 = {
    fill: b1, //"#880000",
    stroke: b2,
    strokeWidth: "4"
  };
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" version="1.1">
      <circle cx="25" cy="25" r="22" style={style2} />
      <path d="m18.643 12.035v25.93z" style={style1} />
      <path d="m31.357 12.035v25.93z" style={style1} />
    </svg>
  );
};
export default PauseButton;
