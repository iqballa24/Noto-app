import React, { useContext, useRef, useState } from "react";
import { IoChevronBack, IoSave } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import { Button, Spinner } from "../components/UI";
import WrapperPages from "../components/WrapperPages";
import ThemeContext from "../store/theme-context";
import { pageMotion } from "../constant/animate";
import { buttonLang } from "../constant";
import useFetch from "../hooks/useFetch";

const AddNote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { addNotes } = useFetch();
  const navigate = useNavigate();
  const { currentLanguage } = useContext(ThemeContext);
  const titleRef = useRef("");
  const bodyRef = useRef("");

  const changeHandlerValueTitle = (e) => {
    titleRef.current.value = e.target.value;
  };

  const inputHandlerBody = (e) => {
    bodyRef.current = e.target.innerHTML;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const body = bodyRef.current;

    if (title === "" || body === "") {
      return toast.error("please fill out all the blank fields");
    }

    try {
      setIsLoading(true);
      const { data, error } = await addNotes({ title, body });
      if (error) {
        throw Error(data);
      }
      navigate("/active-notes");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <WrapperPages
      titlePage={currentLanguage === "en" ? "Add Notes" : "Tambahkan Catatan"}
    >
      <motion.section
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
        className="flex flex-col py-10 space-y-8"
      >
        <input
          ref={titleRef}
          type="text"
          className="w-full bg-transparent border-0 text-2xl md:text-3xl focus:outline-none text-center"
          placeholder={
            currentLanguage === "en" ? "Secret Notes" : "Catatan Rahasia"
          }
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
            onClick={submitHandler}
          >
            {buttonLang.save[currentLanguage]}
            <IoSave />
          </Button>
        </div>
        {isLoading && <Spinner />}
      </motion.section>
    </WrapperPages>
  );
};

export default AddNote;
