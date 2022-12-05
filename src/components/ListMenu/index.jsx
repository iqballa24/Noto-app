import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const ListMenu = ({ data }) => {
  const className =
    "grid grid-flow-col auto-cols-max gap-6 pl-5 py-3 mb-5 cursor-pointer";
  const active =
    "text-cyan bg-gradient-to-r from-[#43444b] to-[#41444e] rounded-lg border-b border-cyan";

  return (
    <ul className="flex flex-col">
      {data.map((item) => (
        <motion.li whileHover={{ color: "#3FCFCF" }} key={item.id}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? `${className} ${active}` : `${className}`
            }
          >
            <item.icon size={20} />
            {item.name}
          </NavLink>
        </motion.li>
      ))}
    </ul>
  );
};

ListMenu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListMenu;
