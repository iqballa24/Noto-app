import React, { useState, useContext } from "react";
import { IoChevronBack, IoSave } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Button, Input, ModalConfirm } from "../components/UI";
import WrapperPages from "../components/WrapperPages";
import ThemeContext from "../store/theme-context";
import { buttonLang } from "../constant";

const AddNote = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useContext(ThemeContext);
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [showModalConfirm, setModalConfirm] = useState(false);

  const changeHandlerValueTitle = (val) => {
    setTitleValue(val);
  };

  const inputHandlerBody = (e) => {
    console.log(e.target.innerHTML);
    setBodyValue(e.target.innerHTML);
  };

  const toggleModalConfirm = () => {
    setModalConfirm((prev) => !prev);
  };

  return (
    <WrapperPages
      titlePage={currentLanguage === "en" ? "Add Notes" : "Tambahkan Catatan"}
    >
      <section className="flex flex-col py-10 space-y-8">
        <Input
          className="w-full bg-transparent border-0 text-2xl md:text-3xl focus:outline-none text-center"
          placeholder={
            currentLanguage === "en" ? "Secret Notes" : "Catatan Rahasia"
          }
          value={titleValue}
          onChange={changeHandlerValueTitle}
        />
        <div
          className="w-full min-h-[400px] rounded-md text-sm md:text-base border border-dark-secondary dark:border-white p-5"
          contentEditable
          onInput={inputHandlerBody}
        ></div>
        <div className="flex flex-row justify-between items-center px-2">
          <Button
            type="button"
            title={buttonLang.back[currentLanguage]}
            isTransparant
            onClick={() => navigate("/active-notes")}
          >
            <IoChevronBack />
            <p>{buttonLang.back[currentLanguage]}</p>
          </Button>
          <Button
            type="button"
            title={buttonLang.save[currentLanguage]}
            isPrimary
            onClick={toggleModalConfirm}
          >
            {buttonLang.save[currentLanguage]}
            <IoSave />
          </Button>
        </div>
        {showModalConfirm && <ModalConfirm onClose={toggleModalConfirm} />}
      </section>
    </WrapperPages>
  );
};

export default AddNote;
