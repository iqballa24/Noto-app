import React from "react";

const ThemeContext = React.createContext({
  currentTheme: "light",
  changeTheme: (theme) => {},
  currentLanguage: "id",
  changeLanguage: (lang) => {},
});

export default ThemeContext;
