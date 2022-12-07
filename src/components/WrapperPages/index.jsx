import React from "react";
import PropTypes from "prop-types";
import { HiLogout } from "react-icons/hi";
import { Button } from "../UI";

const WrapperPages = ({ children, titlePage }) => {
  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-row justify-between items-center relative">
        <h1 className="text-2xl md:text-2xl font-bold">{titlePage}</h1>
        <span className="absolute w-[120px] border-b-4 border-cyan bottom-[15px] z-[-1] md:w-[138px]"></span>
        <Button type="button" title="Log out" isTransparant>
          <p>Log out</p>
          <HiLogout />
        </Button>
      </section>
      {children}
    </div>
  );
};

WrapperPages.propTypes = {
  children: PropTypes.element.isRequired,
  titlePage: PropTypes.string.isRequired,
};

export default WrapperPages;
