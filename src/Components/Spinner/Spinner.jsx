import React from "react";
import { HashLoader } from "react-spinners";
// import { Watch } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* <Watch ariaLabel="loading-indicator" width="100" color="blue" /> */}
      <HashLoader color="blue" size={80} />
    </div>
  );
}
