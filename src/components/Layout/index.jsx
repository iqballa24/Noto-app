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
      <main className="p-5 pt-20 md:px-16 md:py-10 w-full">{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
