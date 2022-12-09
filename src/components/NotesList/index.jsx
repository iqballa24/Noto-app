import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import NoteItem from "../NoteItem";
import { pageMotion } from "../../constant/animate";

const NotesList = ({ data, onDelete, onArchive }) => {
  return (
    <>
      {data.length >= 0 && (
        <motion.ul
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageMotion}
          className="flex flex-row flex-wrap pt-10"
        >
          {data.map((item) => (
            <li key={item.id} className="w-full md:w-6/12 xl:w-4/12 mb-5 pr-2">
              <NoteItem
                key={item.id}
                {...item}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            </li>
          ))}
        </motion.ul>
      )}
    </>
  );
};

NotesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesList;
