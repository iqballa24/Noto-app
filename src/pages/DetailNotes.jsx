import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { TypographyStylesProvider } from '@mantine/core';
import { Button, MoreOptions, Spinner } from '../components/UI';
import WrapperPages from '../components/WrapperPages';
import ThemeContext from '../store/theme-context';
import { buttonLang } from '../constant';
import useFetch from '../hooks/useFetch';
import formatDate from '../utils/formatDate';

const DetailNote = () => {
  const navigate = useNavigate();
  const { notesId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const { getNotes, deleteNote, archiveNote, unarchiveNote } = useFetch();
  const { data, mutate, loading: loadingNotes } = getNotes(`/notes/${notesId}`);
  const { currentLanguage } = useContext(ThemeContext);

  async function deleteHandler() {
    setIsLoading(true);
    try {
      const { data, error } = await deleteNote(notesId);

      if (error) {
        throw Error(data);
      }
      navigate('/active-notes');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  const archiveStatus = data?.data?.archived;

  async function toggleArchiveHandler() {
    setIsLoading(true);
    try {
      const { error } = archiveStatus
        ? await unarchiveNote(notesId)
        : await archiveNote(notesId);
      if (error) {
        throw Error(data);
      }
      mutate();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <WrapperPages
      titlePage={currentLanguage === 'en' ? 'Detail Notes' : 'Detail Catatan'}
    >
      <>
        <section className="flex flex-col mt-5 p-5 md:p-10 pb-20 border border-gray-500">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold py-5 capitalize">
              {data?.data?.title}
            </h1>
            <MoreOptions
              onDelete={deleteHandler}
              onArchive={toggleArchiveHandler}
            />
          </div>
          <p className="text-xs md:text-sm font-light ">
            {data && formatDate(data?.data?.createdAt)}
          </p>
          <TypographyStylesProvider>
            <div
              className="pt-7 text-dark-secondary dark:text-white"
              dangerouslySetInnerHTML={{ __html: data?.data?.body }}
            />
          </TypographyStylesProvider>
          {loadingNotes && <Spinner />}
          {isLoading && <Spinner />}
        </section>
        <div className="mt-5">
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
        </div>
      </>
    </WrapperPages>
  );
};

export default DetailNote;
