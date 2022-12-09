import React, { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);

      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  });

  const setValue = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
