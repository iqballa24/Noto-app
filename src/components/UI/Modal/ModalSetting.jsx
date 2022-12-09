import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import {
  MdOutlineLightMode,
  MdOutlineNightlight,
  MdOutlineGTranslate,
  MdClose,
} from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { ButtonSwitch } from "../";
import ModalBackdrop from "./ModalBackdrop";

import ThemeContext from "../../../store/theme-context";

const portalElement = document.getElementById("overlays");

const ModalSetting = ({ onClose }) => {
  const themeCtx = useContext(ThemeContext);
  const themeIsChecked = useRef(
    themeCtx.currentTheme === "dark" ? true : false
  );
  const languageIsChecked = useRef(
    themeCtx.currentLanguage === "en" ? true : false
  );

  const switchThemeHandler = (e) => {
    const value = e.target.checked;
    themeIsChecked.current = value;
    themeCtx.changeTheme(value ? "dark" : "light");
  };

  const switchLanguageHandler = (e) => {
    const value = e.target.checked;
    languageIsChecked.current = value;
    themeCtx.changeLanguage(value ? "en" : "id");
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop onClose={onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed min-w-fit md:min-w-[280px] flex flex-col top-[40%] left-[25%] sm:left-[40%] pt-5 pb-8 px-8 rounded-lg  shadow-lg z-20 text-dark bg-white dark:text-white dark:bg-dark-secondary bg-opacity-80"
        >
          <h1 className="text-base md:text-lg font-bold mb-4 text-center">
            {themeCtx.changeLanguage === "en" ? "Settings" : "Pengaturan"}
          </h1>
          <div className="flex flex-row items-center space-x-5 mb-4">
            <h2 className="flex-1 text-base md:text-lg">
              {themeCtx.currentLanguage === "en" ? "Theme" : "Tema"} :
            </h2>
            <ButtonSwitch
              isChecked={themeIsChecked.current}
              onChange={switchThemeHandler}
              icon={{
                iconLeft: MdOutlineLightMode,
                iconRight: MdOutlineNightlight,
              }}
            />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <h2 className="flex-1 text-base md:text-lg">
              {themeCtx.currentLanguage === "en" ? "Language" : "Bahasa"} :
            </h2>
            <ButtonSwitch
              isChecked={languageIsChecked.current}
              onChange={switchLanguageHandler}
              icon={{
                iconLeft: MdOutlineGTranslate,
                iconRight: RiEnglishInput,
              }}
            />
          </div>
          <MdClose
            size={18}
            className="absolute top-4 right-5 cursor-pointer hover:text-red"
            onClick={onClose}
          />
        </motion.div>,
        portalElement
      )}
    </React.Fragment>
  );
};

ModalSetting.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalSetting;
