import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import HeaderNavigation from "./HeaderNavigation";
import MainNavigation from "./MainNavigation";
import FooterNavigation from "./FooterNavigation";

const Navigation = ({ onToggleNav, widthScreen }) => {
  return (
    <motion.nav
      initial={{ width: 0 }}
      animate={{ width: 280 }}
      exit={{ opacity: 0 }}
      className="absolute flex flex-col inset-0 px-4 h-[100vh] text-sm md:relative md:text-base bg-white dark:bg-dark text-dark-gray dark:text-white"
    >
      <HeaderNavigation onToggleNav={onToggleNav} widthScreen={widthScreen} />
      <MainNavigation />
      <FooterNavigation />
    </motion.nav>
  );
};

Navigation.propTypes = {
  onToggleNav: PropTypes.func,
  widthScreen: PropTypes.number.isRequired,
};

export default Navigation;
