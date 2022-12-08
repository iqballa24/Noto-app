import React, { useContext } from "react";
import { SearchBar } from "../components/UI";
import NotesList from "../components/NotesList";
import WrapperPages from "../components/WrapperPages";
import ThemeContext from "../store/theme-context";
import useFetch from "../hooks/useFetch";

const ActiveNotes = () => {
  const { getNotes } = useFetch();
  const { data } = getNotes("/notes");
  const { currentLanguage } = useContext(ThemeContext);

  const searchHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <WrapperPages
      titlePage={currentLanguage === "en" ? "Active Notes" : "Catatan Aktif"}
    >
      <section className="flex flex-col py-5">
        <SearchBar onSearchHandler={searchHandler} />
        <NotesList data={data?.data ?? []} />
      </section>
    </WrapperPages>
  );
};

export default ActiveNotes;
