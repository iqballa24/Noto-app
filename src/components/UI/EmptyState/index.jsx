import React from "react";
import { motion } from "framer-motion";
import { pageMotion } from "../../../constant/animate";

const EmptyState = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageMotion}
      className="flex flex-col w-full justify-center items-center"
    >
      <img src="./autumn.svg" alt="empty" className="w-full max-w-md" />
      <h1 className="text-lg md:text-xl font-bold py-8 text-center">
        Notes are empty, <br />
        you haven't added any notes.
      </h1>
    </motion.div>
  );
};

export default React.memo(EmptyState);
