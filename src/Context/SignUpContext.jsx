import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SignUp from "../Auth/SignUp/SignUp";
import { FbSignUp, auth } from "../firebase/firebase";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
function SignUpContext() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      await FbSignUp(data.email, data.password);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  const [errorMessage, setErrorMessage] = useState();

  //Google Auth
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const handleGoogle = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignUp
      register={register}
      control={control}
      errors={errors}
      handleSubmit={handleSubmit(onSubmit)}
      errorMessage={errorMessage}
      handleGoogle={handleGoogle}
    />
  );
}

export default SignUpContext;
