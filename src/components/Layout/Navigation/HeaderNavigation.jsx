import React from "react";
import PropTypes from "prop-types";
import { AiOutlineMenu } from "react-icons/ai";

const HeaderNavigation = ({ onToggleNav, widthScreen }) => {
  return (
    <section className="flex flex-row items-center justify-between text-center pt-6 pb-8 md:justify-center">
      <div className="flex flex-row items-center">
        <img src="/LOGO.svg" alt="logo" className="w-full max-w-[38px]" />
        <span className="font-bold text-xl ml-2 whitespace-nowrap">ノート</span>
      </div>
      {widthScreen < 768 && (
        <AiOutlineMenu
          size={20}
          className="cursor-pointer"
          onClick={onToggleNav}
        />
      )}
    </section>
  );
};

HeaderNavigation.propTypes = {
  onToggleNav: PropTypes.func,
  widthScreen: PropTypes.number.isRequired,
};

export default HeaderNavigation;
