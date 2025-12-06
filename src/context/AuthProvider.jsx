import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.init";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    //create user logic
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    //login user logic
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userInfo = {
    createUser,
    loginUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
