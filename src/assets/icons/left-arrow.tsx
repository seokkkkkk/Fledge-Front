import React from "react";

type IconProps = {
  width?: number;
  height?: number;
};

const LeftArrowIcon = ({ width, height }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 29 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.6328 53L2.49965 27.5L26.6328 2"
      stroke="#EEC65D"
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>
);

export default LeftArrowIcon;