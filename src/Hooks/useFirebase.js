import { useEffect, useState } from "react";
import initializeFirebase from "../Authentication/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const useFirebase = () => {
  initializeFirebase();

  const [user, setUser] = useState({});
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        console.log("Signed Out");
      })
      .catch(() => {
        console.log("Couldn't sign out");
      })
      .finally(() => setIsLoading(false));
  };

  return { user, signInUsingGoogle, logOut, isLoading, setIsLoading, setUser };
};

export default useFirebase;
