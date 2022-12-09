import React, { useState } from "react";
import PropTypes from "prop-types";
import ModalConfirm from "../Modal/ModalConfirm";
import { HiDotsHorizontal, HiTrash, HiArchive } from "react-icons/hi";

const MoreOptions = ({ onDelete, onArchive }) => {
  const [showModalConfirm, setShowModalConfirm] = useState(false);

  const toggleModalConfirm = () => {
    setShowModalConfirm((prev) => !prev);
  };

  const onConfirmHandler = () => {
    setShowModalConfirm(false);
    onDelete();
  };

  return (
    <div className="relative text-light-gray cursor-pointer group">
      <HiDotsHorizontal size={24} className="text-light-gray cursor-pointer" />
      <div className="hidden group-hover:flex flex-row absolute -top-3 -right-3 rounded-md px-4 py-3 shadow-lg space-x-3 bg-white dark:bg-dark-secondary">
        <HiTrash
          size={18}
          className="hover:text-red"
          onClick={toggleModalConfirm}
        />
        <HiArchive
          size={18}
          className="hover:text-yellow-300"
          onClick={onArchive}
        />
      </div>
      {showModalConfirm && (
        <ModalConfirm
          onClose={toggleModalConfirm}
          onConfirm={onConfirmHandler}
        />
      )}
    </div>
  );
};

MoreOptions.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default MoreOptions;
