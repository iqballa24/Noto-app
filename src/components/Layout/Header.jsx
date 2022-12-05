import React from "react";
import PropTypes from "prop-types";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Header = ({ toggleSideNave }) => {
  return (
    <header className="flex justify-between p-5 w-full shadow-lg bg-secondary">
      <div className="w-full flex items-center">
        <HiOutlineMenuAlt4
          size={24}
          className="cursor-pointer"
          onClick={toggleSideNave}
        />
      </div>
      <div className="w-full flex justify-end items-center">
        <span className="font-bold ml-2">ノート</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  toggleSideNave: PropTypes.func.isRequired,
};

export default Header;