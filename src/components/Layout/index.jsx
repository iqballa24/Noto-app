import React from "react";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row flex-wrap w-full">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
