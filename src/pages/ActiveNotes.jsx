import React from "react";
import { SearchBar } from "../components/UI";
import NotesList from "../components/NotesList";
import WrapperPages from "../components/WrapperPages";
import { data } from "../constant";

const ActiveNotes = () => {
  const searchHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <WrapperPages titlePage="Active Notes">
      <section className="flex flex-col py-5">
        <SearchBar onSearchHandler={searchHandler} />
        <NotesList data={data} />
      </section>
    </WrapperPages>
  );
};

export default ActiveNotes;
