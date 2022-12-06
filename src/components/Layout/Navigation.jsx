import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { AiTwotoneSetting, AiOutlineMenu } from "react-icons/ai";
import { menus } from "../../constant";

const Navigation = ({ onToggleNav, widthScreen }) => {
  const classNavLink =
    "grid grid-flow-col auto-cols-max gap-6 pl-5 py-3 mb-5 cursor-pointer hover:text-cyan";
  const active =
    "text-cyan bg-gradient-to-r from-[#43444b] to-[#41444e] rounded-lg border-b border-cyan";

  return (
    <motion.nav
      initial={{ width: 0 }}
      animate={{ width: 280 }}
      exit={{ opacity: 0 }}
      className="absolute flex flex-col inset-0 px-4 bg-dark h-[100vh] text-sm md:relative md:text-base"
    >
      <section className="flex flex-row items-center justify-between text-center pt-6 pb-8 md:justify-center">
        <div className="flex flex-row items-center">
          <img src="/LOGO.svg" alt="logo" className="w-full max-w-[38px]" />
          <span className="font-bold text-xl ml-2 whitespace-nowrap">
            ノート
          </span>
        </div>
        {widthScreen < 768 && (
          <AiOutlineMenu
            size={20}
            className="cursor-pointer"
            onClick={onToggleNav}
          />
        )}
      </section>
      <ul className="flex flex-col transition-all ease-in">
        {menus.map((item) => (
          <li key={item.id} title={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? `${classNavLink} ${active}` : `${classNavLink}`
              }
            >
              <item.icon size={20} />
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <section className="relative h-full">
        <ul className="flex flex-col absolute bottom-0 w-full">
          <li
            className="grid grid-flow-col auto-cols-max gap-6 pl-5 py-3 cursor-pointer hover:text-cyan"
            title="setting"
          >
            <AiTwotoneSetting size={20} />
            Setting
          </li>
          <li className="flex flex-row items-center px-2 py-7">
            <div className="w-3/12">
              <img
                src="https://ui-avatars.com/api/?name=iqbal&amp;background=random"
                alt="avatar"
                width="100%"
                className="rounded-full w-[44px]"
              />
            </div>
            <div className="w-9/12 flex flex-col space-y-1">
              <p className="text-xs font-bold">Tengku Iqbal Nugraha</p>
              <p className="text-xs text-light-gray">
                iqbalnugraha347@gmail.com
              </p>
            </div>
          </li>
        </ul>
      </section>
    </motion.nav>
  );
};

Navigation.propTypes = {
  onToggleNav: PropTypes.func,
  widthScreen: PropTypes.number.isRequired,
};

export default Navigation;
