import React from "react";
import ListMenu from "../ListMenu";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { menus } from "../../constant";
import { AiTwotoneSetting, AiOutlineMenu } from "react-icons/ai";

const Navigation = ({ onToggleNav, widthScreen }) => {
  return (
    <motion.nav
      initial={{ width: 0 }}
      animate={{ width: 300 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.3 },
      }}
      className="absolute flex flex-col inset-0 w-[280px] px-4 bg-dark h-[100vh] text-sm md:text-base"
    >
      <section className="flex flex-row items-center justify-between text-center pt-6 pb-8">
        <div className="flex flex-row items-center">
          <img src="./LOGO.svg" alt="logo" />
          <span className="font-bold text-xl ml-2">ノート</span>
        </div>
        {widthScreen < 768 && (
          <AiOutlineMenu
            size={20}
            className="cursor-pointer"
            onClick={onToggleNav}
          />
        )}
      </section>
      <ListMenu data={menus} />
      <section className="relative h-full">
        <ul className="flex flex-col absolute bottom-0 w-full">
          <li className="grid grid-flow-col auto-cols-max gap-6 pl-5 py-3 cursor-pointer hover:text-cyan">
            <AiTwotoneSetting size={20} />
            Setting
          </li>
          <li className="flex flex-row items-center px-2 py-7">
            <div className="w-3/12">
              <img
                src="https://ui-avatars.com/api/?name=iqbal&amp;background=random"
                alt="avatar"
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
  onToggleNav: PropTypes.func.isRequired,
  widthScreen: PropTypes.number.isRequired,
};

export default Navigation;
