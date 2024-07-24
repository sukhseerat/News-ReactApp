import React from "react";
import spinner from "./spinner.gif";

const Spinner = (props) => {
  return (
    <div className="text-center">
      <img src={spinner} alt="" />
    </div>
  );
};

export default Spinner;
