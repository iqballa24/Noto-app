import React from "react";
import { HiDotsHorizontal, HiTrash, HiArchive } from "react-icons/hi";

const MoreOptions = () => {
  return (
    <div className="relative text-light-gray cursor-pointer group">
      <HiDotsHorizontal size={24} className="text-light-gray cursor-pointer" />
      <div className="hidden group-hover:flex flex-row absolute -top-3 -right-3 rounded-md bg-dark-secondary px-4 py-3 shadow-lg space-x-3">
        <HiTrash
          size={18}
          className="hover:text-red"
          onClick={() => console.log("id")}
        />
        <HiArchive
          size={18}
          className="hover:text-yellow-300"
          onClick={() => console.log("id")}
        />
      </div>
    </div>
  );
};

export default MoreOptions;
