import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.init";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    //create user logic
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    //login user logic
    return signInWithEmailAndPassword(auth, email, password);
  };
  // onAuthStateChanged(auth, (currentUser) => {

  //   if (currentUser) {
  //     console.log("Auth State Changed - User logged in:", currentUser);
  //   } else {
  //     console.log("Auth State Changed - No user logged in");
  //   }
  // });

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Auth State Changed - User logged in:", currentUser);
      } else {
        console.log("Auth State Changed - No user logged in");
      }
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const userInfo = {
    user,
    createUser,
    loginUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
