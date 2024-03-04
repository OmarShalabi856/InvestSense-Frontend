import React, { ChangeEvent, useState, FormEvent } from "react";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router";


function App() {

  return(
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
export default App;
