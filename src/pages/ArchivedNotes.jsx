import React, { useContext } from "react";
import { SearchBar } from "../components/UI";
import NotesList from "../components/NotesList";
import WrapperPages from "../components/WrapperPages";
import ThemeContext from "../store/theme-context";

const ArchiveNotes = () => {
  const { currentLanguage } = useContext(ThemeContext);
  const searchHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <WrapperPages
      titlePage={currentLanguage === "en" ? "Archived Notes" : "Catatan Arsip"}
    >
      <section className="flex flex-col py-5">
        <SearchBar onSearchHandler={searchHandler} />
        <NotesList data={[]} />
      </section>
    </WrapperPages>
  );
};

export default ArchiveNotes;
