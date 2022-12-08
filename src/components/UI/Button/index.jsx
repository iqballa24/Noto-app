import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Button = ({
  title,
  children,
  type,
  isPrimary,
  isDanger,
  isFull,
  isTransparant,
  onClick,
}) => {
  const className = [
    "flex flex-row text-sm items-center space-x-1 px-3 py-3 rounded-lg md:text-base md:px-4 justify-center",
  ];
  isPrimary && className.push("bg-cyan hover:bg-cyan-500");
  isDanger && className.push("bg-red-soft hover:bg-red");
  isTransparant && className.push("bg-transparant hover:text-cyan");
  isFull && className.push("w-full");

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      type={type}
      className={className.join(" ")}
      title={title}
      onClick={onClick}
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
  onClick: PropTypes.func.isRequired,
  isPrimary: PropTypes.bool,
  isDanger: PropTypes.bool,
  isTransparant: PropTypes.bool,
  isFull: PropTypes.bool,
};

export default React.memo(Button);
