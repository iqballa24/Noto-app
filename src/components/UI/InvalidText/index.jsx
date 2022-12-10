import React from "react";
import PropTypes from "prop-types";

const InvalidText = ({ children }) => {
  return <p className="text-xs md:text-sm text-red-400 italic select-none">{children}</p>;
};

InvalidText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default InvalidText;
