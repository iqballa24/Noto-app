import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MdOutlineSearch } from "react-icons/md";
import ThemeContext from "../../../store/theme-context";

const SearchBar = ({ onSearchHandler, value }) => {
  const { currentLanguage } = useContext(ThemeContext);
  const placeholder =
    currentLanguage === "en"
      ? "Search for a title..."
      : "Cari berdasarkan judul...";

  return (
    <div className="relative w-full rounded-lg max-w-sm bg-white dark:bg-dark pl-10">
      <span className="absolute left-[20px] top-[16px] ">
        <MdOutlineSearch size={20} />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full text-sm border-0 rounded-md p-4 bg-white dark:bg-dark focus:outline-none md:text-base"
        onKeyUp={onSearchHandler}
        defaultValue={value}
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearchHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default React.memo(SearchBar);
