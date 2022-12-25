import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TypographyStylesProvider } from '@mantine/core';
import { MoreOptions } from '../UI';
import formatDate from '../../utils/formatDate';

const NoteItem = ({ id, title, body, createdAt, onDelete, onArchive }) => {
  const createdDate = formatDate(createdAt);

  return (
    <div className="relative flex flex-col bg-white min-h-full dark:bg-dark p-5 rounded-lg md:p-8 hover:border hover:border-cyan">
      <div className="flex flex-row justify-between items-center pb-4">
        <Link
          to={`/detail-notes/${id}`}
          className="text-base md:text-lg font-bold cursor-pointer"
        >
          {title}
        </Link>
        <MoreOptions
          onDelete={() => onDelete(id)}
          onArchive={() => onArchive(id)}
        />
      </div>
      <TypographyStylesProvider>
        <div
          className="text-sm md:text-base text-light-gray mb-8 max-h-28 truncate"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </TypographyStylesProvider>
      <p className="text-xs md:text-sm flex flex-auto justify-end items-end">
        {createdDate}
      </p>
    </div>
  );
};

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteItem;
