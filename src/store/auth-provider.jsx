import React, { useCallback, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { getUserLogged } from "../service/API";
import AuthContext from "./auth-context";
import PropTypes from "prop-types";

const AuthContextProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [token, setToken] = useLocalStorage("token", null);
  const userIsLoggedIn = token === null ? false : true;

  const logoutHandler = useCallback(() => {
    setToken(null);
  }, []);

  const loginHandler = useCallback(
    (token) => {
      setToken(token);
    },
    [token]
  );

  useEffect(() => {
    async function getUserDataLoggedIn() {
      const data = await getUserLogged();
      setUserLoggedIn(data);
    }
    if (token) {
      getUserDataLoggedIn();
    }
  }, [token]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    userLoggedIn,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthContextProvider;
