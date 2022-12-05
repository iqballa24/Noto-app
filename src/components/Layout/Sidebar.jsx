import React from "react";
import Navigation from "./Navigation";
import { AnimatePresence } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions ";
import PropTypes from "prop-types";

const Sidebar = ({ open, cycleOpen }) => {
  const { width } = useWindowDimensions();

  return (
    <aside className="flex flex-col relative bg-dark-secondary">
      <AnimatePresence>
        {width >= 768 && <Navigation widthScreen={width} />}
        {open && <Navigation onToggleNav={cycleOpen} widthScreen={width} />}
      </AnimatePresence>
    </aside>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  cycleOpen: PropTypes.func.isRequired,
};

export default Sidebar;
