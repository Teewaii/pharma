import React from "react";

const OverLay = ({ Toggle }) => {
  return <div onClick={Toggle} className="absolute inset-0 bg-primary3"></div>;
};

export default OverLay;
