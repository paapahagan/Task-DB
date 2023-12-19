import { createContext, useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FbLogIn, auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 20 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("Password")], "Passwords must match"),
});

function LoginProvider({ children }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      await FbLogIn(data.email, data.password);
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  const [errorMessage, setErrorMessage] = useState();

  // login with google //
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  //omAuth stateChange
  const [user, setUser] = useState({});
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);

      // if location is not signup and location is not signin and there is no user redirect to login
      // if(location !== '/' && location !== '/signnin' && !currentUser){
      //     navigate("/sigin");
      // }

      if (!currentUser) {
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //sign out
  const logOut = () => {
    signOut(auth);
  };
  // //navigate
  const navigate = useNavigate();

  return (
    <LoginContext.Provider
      value={{
        onSubmit,
        register,
        handleSubmit,
        control,
        errorMessage,
        errors,
        handleGoogle,
        logOut,
        user,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
