import React from "react";
import PropTypes from "prop-types";

const ListMenu = ({ data }) => {
  return (
    <ul className="flex flex-col">
      {data.map((item) => (
        <li
          key={item.id}
          className={`grid grid-flow-col auto-cols-max gap-6 pl-5 py-3 mb-5 cursor-pointer hover:text-cyan ${
            item.active &&
            "text-cyan bg-gradient-to-r from-[#43444b] to-[#41444e] rounded-lg border-b border-cyan"
          }`}
        >
          <item.icon size={20} />
          {item.name}
        </li>
      ))}
    </ul>
  );
};

ListMenu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListMenu;
