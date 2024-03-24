import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useAuth } from "../../Services/useAuth";
import { useForm } from "react-hook-form";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {}

type RegisterFormInputs = {
    email: string;
    username:string,
    password: string;
  };
  const validation = Yup.object().shape({
    email: Yup.string().required("Email Is Required!"),
    username: Yup.string().required("Username Is Required!"),
    password: Yup.string().required("Password Is Required!"),
  });
  const RegisterPage = (props: Props) => {
    const { registerUser} = useAuth();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<RegisterFormInputs>({ resolver: yupResolver(validation) });
    const handleLogin = (form: RegisterFormInputs) => {
    registerUser(form.email,form.username, form.password);
    };
    return (
      <form onSubmit={handleSubmit(handleLogin)} className="w-full h-screen bg-white flex justify-center items-center">
         <div className="border border-neutral-700 w-1/4 h-2/3 shadow-lg flex-col flex justify-evenly items-start p-3 rounded">
          <div className="font-sans mx-auto font-bold text-lg"><FontAwesomeIcon className="mx-2" icon={faCircleCheck} />Register Your New Account!</div>
          <div className="w-full flex flex-col">
          <label className="font-medium">Username</label>
          <input {...register("username")} className="focus:outline-teal-600 px-2 bg-slate-300 rounded w-full py-1"/>
          {errors.username?<p>{errors.username.message}</p>:""}
          </div>
          <div className="w-full flex flex-col">
          <label className="font-medium">Email</label>
          <input {...register("email")} className="focus:outline-teal-600 px-2 bg-slate-300 rounded w-full py-1"/>
          {errors.email?<p>{errors.email.message}</p>:""}
          </div>
          <div className="w-full flex flex-col">
          <label className="font-medium">Password</label>
          <input {...register("password")} className="focus:outline-teal-600 px-2 bg-slate-300 rounded w-full py-1"/>
          {errors.password?<p>{errors.password.message}</p>:""}
          </div>
          <button type="submit" className="hover:bg-blue-button-hover mx-auto btn bg-blue-button text-white font-medium w-full">Sign Up</button>
         </div>
      </form>
    )
  };
  
export default RegisterPage