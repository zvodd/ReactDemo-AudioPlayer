import React from "react";
const PlayButton = ({
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
    <svg width="50" heigh="50" viewBox="0 0 50 50" version="1.1">
      <circle cx="25" cy="25" r="22" style={style2} />

      <g transform="translate(8,5)">
        <g transform="scale(0.8)">
          <path
            d="m12.434 9.623v30.754c8.3777-4.8369 16.755-9.6738 25.133-14.511-8.3777-5.4144-16.755-10.829-25.133-16.243z"
            style={style1}
          />
        </g>
      </g>
    </svg>
  );
};
export default PlayButton;
