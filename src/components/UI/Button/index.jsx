import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Button = ({
  title,
  children,
  type,
  isPrimary,
  isDanger,
  isTransparant,
}) => {
  const className = [
    "flex flex-row text-sm items-center space-x-1 px-3 py-3 rounded-lg md:text-base md:px-4",
  ];
  isPrimary && className.push("bg-cyan hover:bg-cyan-500");
  isDanger && className.push("bg-red-soft hover:bg-red");
  isTransparant && className.push("bg-transparant hover:text-cyan");

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      type={type}
      className={className.join(" ")}
      title={title}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  isDanger: PropTypes.bool,
  isTransparant: PropTypes.bool,
};

export default React.memo(Button);
