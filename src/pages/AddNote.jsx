import React, { useState } from "react";
import { IoChevronBack, IoSave } from "react-icons/io5";
import { Button, Input } from "../components/UI";
import WrapperPages from "../components/WrapperPages";

const AddNote = () => {
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");

  const changeHandlerValueTitle = (val) => {
    setTitleValue(val);
  };

  const inputHandlerBody = (e) => {
    console.log(e.target.innerHTML);
    setBodyValue(e.target.innerHTML);
  };

  return (
    <WrapperPages titlePage="Add Note">
      <section className="flex flex-col mt-5 pb-10 space-y-8">
        <Input
          className="w-full bg-transparent border-0 text-2xl md:text-3xl focus:outline-none text-center"
          placeholder="Secret Note"
          value={titleValue}
          onChange={changeHandlerValueTitle}
        />
        <div
          className="w-full min-h-[400px] rounded-md text-sm md:text-base border border-dark-secondary dark:border-white p-5"
          contentEditable
          onInput={inputHandlerBody}
        ></div>
        <div className="flex flex-row justify-between items-center px-2">
          <Button type="button" text="back" title="back" isTransparant>
            <IoChevronBack />
            <p>Back</p>
          </Button>
          <Button type="button" text="save" title="save" isPrimary>
            <p>Save</p>
            <IoSave />
          </Button>
        </div>
      </section>
    </WrapperPages>
  );
};

export default AddNote;
