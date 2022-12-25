import React from "react";
import { NavLink } from "react-router-dom";
import { menus } from "../../../constant";
import PropTypes from "prop-types";

const MainNavigation = ({ currentLanguage }) => {
  const classNavLink =
    "grid grid-flow-col auto-cols-max gap-6 pl-5 py-3 mb-5 cursor-pointer hover:text-cyan";
  const active =
    "text-cyan rounded-lg border-b border-cyan bg-cyan text-white dark:bg-gradient-to-r from-[#43444b] to-[#41444e] dark:text-cyan hover:text-white";

  return (
    <ul className="flex flex-col transition-all ease-in list-none">
      {menus.map((item) => (
        <li key={item.id} title={item.name[currentLanguage]}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? `${classNavLink} ${active}` : `${classNavLink}`
            }
          >
            <item.icon size={20} />
            {item.name[currentLanguage]}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MainNavigation.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
};

export default React.memo(MainNavigation);
