import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { AnimatePresence, useCycle } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions ";

const Sidebar = () => {
  const { width } = useWindowDimensions();
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <aside className="flex flex-col w-full relative bg-dark-secondary">
      <Header toggleSideNave={cycleOpen} />
      <AnimatePresence>
        {width >= 768 && (
          <Navigation onToggleNav={cycleOpen} widthScreen={width} />
        )}
        {open && <Navigation onToggleNav={cycleOpen} widthScreen={width} />}
      </AnimatePresence>
    </aside>
  );
};

export default Sidebar;
