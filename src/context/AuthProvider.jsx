import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
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
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      console.log("Auth State Changed - User logged in:", currentUser);
    } else {
      console.log("Auth State Changed - No user logged in");
    }
  });
  const userInfo = {
    createUser,
    loginUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
