import React, { useContext } from "react";
import { motion } from "framer-motion";
import { pageMotion } from "../../../constant/animate";
import ThemeContext from "../../../store/theme-context";

const EmptyState = () => {
  const { currentLanguage } = useContext(ThemeContext);

  const textEmptyState =
    currentLanguage === "en" ? (
      <h1 className="text-lg md:text-xl font-bold py-8 text-center">
        Notes are empty, <br /> you haven't added any notes.
      </h1>
    ) : (
      <h1 className="text-lg md:text-xl font-bold py-8 text-center">
        Catatan Kosong, <br />
        kamu belum menambahkan catatan apapun.
      </h1>
    );

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageMotion}
      className="flex flex-col w-full justify-center items-center"
    >
      <img src="./autumn.svg" alt="empty" className="w-full max-w-md" />
      {textEmptyState}
    </motion.div>
  );
};

export default React.memo(EmptyState);
