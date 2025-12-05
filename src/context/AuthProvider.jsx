import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const userInfo = {
    name: "John Doe",
    email: "d@d.com",
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
