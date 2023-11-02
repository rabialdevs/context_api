import React, { useState } from "react";
import UserContext from '../context/ThemeContext';
import { useEffect } from "react";
const UserContextProvider = ({ children }) => {
  const [ themeMode, setThemeMode ] = useState('light');
  const data = {
    themeMode,
    darkTheme: () => 
      setThemeMode('dark') ,
    lightTheme: () => 
      setThemeMode('light') ,
  };
    useEffect(() => {
      document.querySelector("html").classList.remove("light", "dark");
      document.querySelector("html").classList.add(themeMode);
    }, [themeMode]);

  return <UserContext.Provider value={data}>
    {children}
  </UserContext.Provider>
}

export default UserContextProvider;


