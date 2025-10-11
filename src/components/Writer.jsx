import React from "react";
import { ReactTyped } from "react-typed";

const Writer = ({ words, className }) => {
  return (
    <ReactTyped
      strings={words}
      typeSpeed={60}
      backSpeed={30}
      backDelay={1500}
      loop
      className={className}
    />
  );
};

export default Writer;
