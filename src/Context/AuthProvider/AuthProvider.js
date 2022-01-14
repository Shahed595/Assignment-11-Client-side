import React, { createContext } from "react";
import UseFirebase from "../../Login/UseFirebase";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContexts = UseFirebase();
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
