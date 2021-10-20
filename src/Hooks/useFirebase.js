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

  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser({});
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out");
      })
      .catch(() => {
        console.log("Couldn't sign out");
      });
  };

  return { user, signInUsingGoogle, logOut };
};

export default useFirebase;
