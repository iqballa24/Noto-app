import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { HiLogout } from "react-icons/hi";
import { Button } from "../UI";
import { buttonLang } from "../../constant";
import { toast } from "react-toastify";
import AuthContext from "../../store/auth-context";
import ThemeContext from "../../store/theme-context";

const WrapperPages = ({ children, titlePage }) => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const { currentLanguage } = useContext(ThemeContext);

  const onlogoutHandler = () => {
    logout();
    toast.success("User log out successfully");
    navigate("/signin");
  };

  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-row justify-between items-center relative">
        <h1 className="text-2xl md:text-2xl font-bold underline underline-offset-1 decoration-cyan">
          {titlePage}
        </h1>
        <Button
          type="button"
          title="Log out"
          isTransparant
          onClick={onlogoutHandler}
        >
          <p>{buttonLang.logout[currentLanguage]}</p>
          <HiLogout />
        </Button>
      </section>
      {children}
    </div>
  );
};

WrapperPages.propTypes = {
  children: PropTypes.element.isRequired,
  titlePage: PropTypes.string.isRequired,
};

export default WrapperPages;
