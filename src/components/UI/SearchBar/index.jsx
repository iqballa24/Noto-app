import React from "react";
import PropTypes from "prop-types";
import { MdOutlineSearch } from "react-icons/md";

const SearchBar = ({ onSearchHandler }) => {
  return (
    <div className="relative w-full rounded-lg max-w-sm bg-dark pl-10">
      <span className="absolute text-white left-[20px] top-[16px] ">
        <MdOutlineSearch size={20} />
      </span>
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full text-sm border-0 rounded-md p-4 bg-dark focus:outline-none md:text-base"
        onKeyUp={onSearchHandler}
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearchHandler: PropTypes.func.isRequired,
};

export default React.memo(SearchBar);
