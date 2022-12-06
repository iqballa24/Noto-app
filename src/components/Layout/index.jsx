import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";
import { useCycle } from "framer-motion";

const Layout = ({ children }) => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <>
      <Header toggleSideNave={cycleOpen} />
      <Sidebar open={open} cycleOpen={cycleOpen} />
      <main className="w-full p-5 pt-20 h-[100vh] overflow-y-scroll scrollbar-hide md:px-10 md:py-5">{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
