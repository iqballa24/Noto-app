import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { Button, MoreOptions } from "../components/UI";
import WrapperPages from "../components/WrapperPages";
import ThemeContext from "../store/theme-context";
import { buttonLang } from "../constant";
import useFetch from "../hooks/useFetch";
import formatDate from "../utils/formatDate";

const DetailNote = () => {
  const navigate = useNavigate();
  const { notesId } = useParams();
  const { getNotes, deleteNote } = useFetch();
  const { data } = getNotes(`/notes/${notesId}`);
  const { currentLanguage } = useContext(ThemeContext);

  async function deleteHandler() {
    const { data, error } = await deleteNote(notesId);

    !error && navigate("/active-notes");
  }

  return (
    <WrapperPages
      titlePage={currentLanguage === "en" ? "Detail Notes" : "Detail Catatan"}
    >
      <section className="flex flex-col mt-5 p-5 pb-20 border border-gray-500">
        <div className="flex flex-row justify-between items-center">
          <Button
            type="button"
            text="back"
            title="back"
            isTransparant
            onClick={() => navigate(-1)}
          >
            <IoChevronBack />
            <p>{buttonLang.back[currentLanguage]}</p>
          </Button>
          <MoreOptions onDelete={deleteHandler} />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold py-5 capitalize">
          {data?.data?.title}
        </h1>
        <p className="text-xs md:text-sm font-light ">
          {formatDate(data?.data?.createdAt)}
        </p>
        <p className="text-sm md:text-base pt-7  leading-7 indent-10">
          {data?.data?.body}
        </p>
      </section>
    </WrapperPages>
  );
};

export default DetailNote;
