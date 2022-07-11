import React, { useReducer, useState } from "react";

// dont change the name
export const AppContext = React.createContext();

// dont change the name
export const appReducer = () => {
  // write code
};

function AppContextProvider({ children }) {
  // you need to use context
  // fix code here
  const [state, setState] = useState({ isAuth: true, token: "welcome" });
  function handelLogin(token) {
    setState({ ...state, isAuth: true, token: token });
  }

  function handelLogout(token) {
    setState({ ...state, isAuth: false, token: null });
  }

  return (
    <>
      <AppContext.Provider value={{ state, handelLogin, handelLogout }}>
        {children}
      </AppContext.Provider>
    </>
  );
}

export default AppContextProvider;
