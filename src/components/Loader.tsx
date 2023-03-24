import React from "react";
import "./Loader.css";

const Loader: React.FC = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
