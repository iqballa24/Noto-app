import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="fixed top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 bg-dark opacity-50"></div>
      <div className="fixed top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4"></div>
    </>
  );
};

export default Spinner;
