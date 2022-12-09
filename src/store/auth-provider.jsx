import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";
import useFetch from "../hooks/useFetch";
import AuthContext from "./auth-context";
import PropTypes from "prop-types";

const AuthContextProvider = ({ children }) => {
  const { getUserLogged } = useFetch();
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
    async function getUserDataLoggedIn(token) {
      try {
        const { data } = await getUserLogged(token);
        setUserLoggedIn(data);
      } catch (err) {
        toast.error(err.message);
        logoutHandler();
      }
    }
    if (token) {
      getUserDataLoggedIn(token);
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
