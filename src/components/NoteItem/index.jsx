import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MoreOptions } from "../UI";

const NoteItem = ({ id, titleNote, textNote, dateNote }) => {
  return (
    <Link
      className="relative flex flex-col bg-dark p-5 rounded-lg md:p-8 cursor-pointer hover:border hover:border-cyan"
      to={`/detail-note/${id}`}
    >
      <div className="flex flex-row justify-between items-center pb-4">
        <h1 className="text-base md:text-lg font-bold">{titleNote}</h1>
        <MoreOptions />
      </div>
      <p className="text-sm md:text-base text-light-gray pb-8">{textNote}</p>
      <p className="text-xs text-end md:text-sm">{dateNote}</p>
    </Link>
  );
};

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  titleNote: PropTypes.string.isRequired,
  textNote: PropTypes.string.isRequired,
  dateNote: PropTypes.string.isRequired,
};

export default NoteItem;
