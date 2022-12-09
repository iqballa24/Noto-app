import React, { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchBar, EmptyState } from "../components/UI";
import NotesList from "../components/NotesList";
import WrapperPages from "../components/WrapperPages";
import ThemeContext from "../store/theme-context";
import useFetch from "../hooks/useFetch";

const ActiveNotes = () => {
  const { getNotes, deleteNote, archiveNote } = useFetch();
  const { data, mutate } = getNotes("/notes");
  const { currentLanguage } = useContext(ThemeContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("search");
  const [keyword, setKeyword] = useState(() => params || "");

  const searchHandler = (e) => {
    const search = e.target.value;
    setKeyword(search);
    setSearchParams({ search });
  };

  const filteredNotes =
    data?.data.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    ) ?? [];

  const searchNotFound =
    currentLanguage === "en" ? (
      <p className="text-center">
        Notes with the title <em>"{keyword}"</em> not found
      </p>
    ) : (
      <p className="text-center">
        Catatan dengan judul <em>"{keyword}"</em> tidak ditemukan
      </p>
    );

  async function deleteHandler(id) {
    const { data, error } = await deleteNote(id);
    mutate();
    return { data, error };
  }

  async function archiveNoteHandler(id) {
    const { data, error } = await archiveNote(id);
    mutate();
    return { data, error };
  }

  return (
    <WrapperPages
      titlePage={currentLanguage === "en" ? "Active Notes" : "Catatan Aktif"}
    >
      <section className="flex flex-col py-5">
        <SearchBar onSearchHandler={searchHandler} value={keyword} />
        <NotesList
          data={filteredNotes}
          onDelete={deleteHandler}
          onArchive={archiveNoteHandler}
        />
        {filteredNotes.length === 0 && data?.data.length > 0 && searchNotFound}
        {data?.data.length === 0 && <EmptyState />}
      </section>
    </WrapperPages>
  );
};

export default ActiveNotes;
