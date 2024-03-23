import React, { ChangeEvent, useState, FormEvent } from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Services/useAuth";

function App() {
  return (
    <UserProvider>
      <div className="h-full">
        <Navbar />
        <Outlet />
        <ToastContainer />
      </div>
    </UserProvider>
  );
}
export default App;
