import React, { createContext, useContext, useMemo } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  function handleLogin(token) {
    setToken(token);
  }
  function handleLogout() {
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
