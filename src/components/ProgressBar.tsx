import React from "react";

type ProgressBarProps = {
  percentage: number; // Represents the percentage the bar is filled
};

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  // Ensure percentage is clamped between 0 and 100
  const clampedPercentage = Math.min(100, Math.max(0, percentage));

  // Define inline styles
  const containerStyle: React.CSSProperties = {
    width: "30px", // Width of the progress bar
    height: "300px", // Height of the progress bar
    display: "flex",
    flexDirection: "column-reverse", // Fills the bar from bottom to top
    backgroundColor: "lightgray",
    border: "1px solid #ccc",
    borderRadius: "5px",
    overflow: "hidden",
  };

  const filledStyle: React.CSSProperties = {
    backgroundColor: "lightblue",
    height: `${clampedPercentage}%`,
    transition: "height 0.3s ease", // Smooth transition for filling the bar
  };

  const emptyStyle: React.CSSProperties = {
    backgroundColor: "gray",
    height: `${100 - clampedPercentage}%`,
  };

  return (
    <div style={containerStyle}>
      <div style={filledStyle}></div>
      <div style={emptyStyle}></div>
    </div>
  );
};

export default ProgressBar;
