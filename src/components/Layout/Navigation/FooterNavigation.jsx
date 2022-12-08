import React, { useState, useContext } from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { ModalSetting } from "../../UI";
import PropTypes from "prop-types";
import AuthContext from "../../../store/auth-context";

const FooterNavigation = ({ currentLanguage }) => {
  const { userLoggedIn } = useContext(AuthContext);
  const [showModalSettting, setShowModalSetting] = useState(false);

  const toggleModalSetting = () => {
    setShowModalSetting((prev) => !prev);
  };

  const settingsLang = currentLanguage === "en" ? "Settings" : "Pengaturan";

  return (
    <section className="relative h-full">
      <ul className="flex flex-col absolute bottom-0 w-full">
        <li
          onClick={toggleModalSetting}
          className="grid grid-flow-col auto-cols-max gap-6 pl-5 py-3 cursor-pointer hover:text-cyan"
          title={settingsLang}
        >
          <AiTwotoneSetting size={20} />
          {settingsLang}
        </li>
        <li className="flex flex-row items-center px-2 py-7">
          <div className="w-3/12">
            <img
              src={`https://ui-avatars.com/api/?name=${userLoggedIn?.data?.name}&amp;background=random`}
              alt="avatar"
              width="100%"
              className="rounded-full w-[44px]"
            />
          </div>
          <div className="w-9/12 flex flex-col space-y-1">
            <p className="text-xs font-bold">{userLoggedIn?.data?.name}</p>
            <p className="text-xs text-light-gray">
              {userLoggedIn?.data.email}
            </p>
          </div>
        </li>
      </ul>
      {showModalSettting && <ModalSetting onClose={toggleModalSetting} />}
    </section>
  );
};

FooterNavigation.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
};

export default React.memo(FooterNavigation);
