import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useAuth } from "../../Services/useAuth";
import { useForm } from "react-hook-form";
type Props = {};

type LoginFormInputs = {
  email: string;
  password: string;
};
const validation = Yup.object().shape({
  email: Yup.string().required("Email Is Required!"),
  password: Yup.string().required("Password Is Required!"),
});
const LoginPage = (props: Props) => {
  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({ resolver: yupResolver(validation) });
  const handleLogin = (form: LoginFormInputs) => {
    loginUser(form.email, form.password);
  };
  return (
    <form  className="w-full h-screen bg-white flex justify-center items-center">
       <div className="border border-neutral-700 w-1/4 h-2/3 shadow-lg flex-col flex justify-evenly items-start p-3 rounded">
        <div className="font-sans mx-auto font-bold text-lg">Sign In Into Your Account!</div>
        <div className="w-full flex flex-col">
        <label className="font-medium">Email</label>
        <input className="focus:outline-none px-2 bg-slate-300 rounded w-full py-1"/>
        </div>
        <div className="w-full flex flex-col">
        <label className="font-medium">Password</label>
        <input className="focus:outline-none px-2 bg-slate-300 rounded w-full py-1"/>
        </div>
        <button type="submit" className="hover:bg-blue-button-hover mx-auto btn bg-blue-button text-white font-medium w-full">Sign In</button>
       </div>
    </form>
  )
};

export default LoginPage;
