import React, { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  function handleLogin(token) {
    const storedToken = localStorage.getItem("token");
    const expiration = localStorage.getItem("expiration");

    setToken(token);
  }
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    setToken(null);
  }

  const value = useMemo(() => {
    return {
      token,
      handleLogin,
      handleLogout,
    };
  }, [handleLogin]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext used outside of the provider");
  }
  return context;
}

export { AuthProvider, useAuth };
