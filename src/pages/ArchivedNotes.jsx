import React, { useContext } from "react";
import { SearchBar } from "../components/UI";
import NotesList from "../components/NotesList";
import WrapperPages from "../components/WrapperPages";
import ThemeContext from "../store/theme-context";
import useFetch from "../hooks/useFetch";

const ArchiveNotes = () => {
  const { getNotes, deleteNote } = useFetch();
  const { data } = getNotes("/notes/archived");
  const { currentLanguage } = useContext(ThemeContext);
  const searchHandler = (e) => {
    console.log(e.target.value);
  };

  async function deleteHandler(id) {
    const { data, error } = await deleteNote(id);
    mutate();
    return data;
  }

  return (
    <WrapperPages
      titlePage={currentLanguage === "en" ? "Archived Notes" : "Catatan Arsip"}
    >
      <section className="flex flex-col py-5">
        <SearchBar onSearchHandler={searchHandler} />
        <NotesList data={data?.data ?? []} onDelete={deleteHandler} />
      </section>
    </WrapperPages>
  );
};

export default ArchiveNotes;
