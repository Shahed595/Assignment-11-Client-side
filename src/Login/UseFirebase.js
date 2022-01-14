import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import firebaseInitialization from "../Firebase/Firebase.config";
import { Navigate } from "react-router-dom";

firebaseInitialization();
const GoogleProvider = new GoogleAuthProvider();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();

  const signInGoogle = (location, navigate) => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        setUser(result.user);
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  //   signOut
  const LogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {});
  };
  return {
    user,
    error,
    signInGoogle,
    LogOut,
  };
};

export default UseFirebase;
