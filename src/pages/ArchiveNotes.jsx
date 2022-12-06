import React from "react";
import { SearchBar } from "../components/UI";
import NotesList from "../components/NotesList";
import WrapperPages from "../components/WrapperPages";

const ArchiveNotes = () => {
  const searchHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <WrapperPages titlePage="Archive Notes">
      <section className="flex flex-col py-5">
        <SearchBar onSearchHandler={searchHandler} />
        <NotesList data={[]} />
      </section>
    </WrapperPages>
  );
};

export default ArchiveNotes;
