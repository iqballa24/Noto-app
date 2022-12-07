import React, { useState } from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { ModalSetting } from "../../UI";

const FooterNavigation = () => {
  const [showModalSettting, setShowModalSetting] = useState(false);

  const toggleModalSetting = () => {
    setShowModalSetting((prev) => !prev);
  };

  return (
    <section className="relative h-full">
      <ul className="flex flex-col absolute bottom-0 w-full">
        <li
          onClick={toggleModalSetting}
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
            <p className="text-xs text-light-gray">iqbalnugraha347@gmail.com</p>
          </div>
        </li>
      </ul>
      {showModalSettting && <ModalSetting onClose={toggleModalSetting}/>}
    </section>
  );
};

export default React.memo(FooterNavigation);
