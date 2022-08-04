import React from "react";
import spinner from "./asset/spinner.gif";

const Loading = () => {
  return (
    <img
      style={{ width: 50, height: 50, padding: 10 }}
      src={spinner}
      alt="loading..."
    />
  );
};

export default Loading;
