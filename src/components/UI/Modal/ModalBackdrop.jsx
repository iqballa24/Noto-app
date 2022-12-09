import React from "react";
import PropTypes from "prop-types";

const ModalBackdrop = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 w-full h-[100vh] bg-dark opacity-50 z-20"
      onClick={onClose}
    ></div>
  );
};

ModalBackdrop.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalBackdrop;
