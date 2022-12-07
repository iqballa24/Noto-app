import React, { useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ModalBackdrop from "./ModalBackdrop";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { modalLang } from "../../../constant";
import { Button } from "../";

import ThemeContext from "../../../store/theme-context";

const portalElement = document.getElementById("overlays");

const ModalConfirm = ({ onClose }) => {
  const { currentLanguage: lang } = useContext(ThemeContext);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop onClose={onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <motion.div
          initial={{ top: 0 }}
          animate={{ top: "30%" }}
          className="fixed flex flex-col justify-center items-center text-center w-full max-w-sm left-[50%] -translate-x-2/4 z-20 px-5 py-10 rounded-lg text-dark bg-white dark:text-white dark:bg-dark-secondary bg-opacity-80"
        >
          <BsFillQuestionCircleFill
            size={52}
            className="text-yellow-500 mb-4"
          />
          <h1 className="font-bold mb-4 text-xl md:text-2xl">
            {modalLang.modalConfirm.title[lang]}
          </h1>
          <p className="font-light mb-6 text-sm md:text-base">
            {modalLang.modalConfirm.text[lang]}
          </p>
          <div className="flex flex-row space-x-2">
            <Button
              type="button"
              title="yup"
              isPrimary
              onClick={() => console.log("hola!")}
            >
              <p>{modalLang.modalConfirm.button.yes[lang]}</p>
            </Button>
            <Button type="button" title="nope!" isTransparant onClick={onClose}>
              <p>{modalLang.modalConfirm.button.no[lang]}</p>
            </Button>
          </div>
        </motion.div>,
        portalElement
      )}
    </React.Fragment>
  );
};

ModalConfirm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalConfirm;
