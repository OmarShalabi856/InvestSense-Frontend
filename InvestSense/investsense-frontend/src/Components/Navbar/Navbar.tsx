import React from "react";
import Logo from "../Logo/Logo";
import '../../index.css'
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-white h-20 flex justify-between  w-full items-center">
        <div className="flex justify-evenly items-center w-50">
        <Logo />
        <h4 className="mt-2">
            Dashboard
        </h4>
        </div>
      
      <div className="flex justify-evenly mx-4 w-52">
        <div className="bg-red-button h-10 w-20 flex items-center justify-center text-white font-bold rounded hover:bg-red-button-hover cursor-pointer">
          Login
        </div>
        <div className="blue-button">
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Navbar;
