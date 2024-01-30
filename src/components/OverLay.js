import React from "react";

const OverLay = ({ Toggle }) => {
  return (
    <div
      onClick={Toggle}
      className="absolute inset-0 bg-primary3 opacity-70 -z-10 "
    ></div>
  );
};

export default OverLay;
