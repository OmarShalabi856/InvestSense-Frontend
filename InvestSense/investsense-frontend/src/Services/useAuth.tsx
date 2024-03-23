import React, { createContext, useEffect, useState } from "react";
import { UserProfileToken } from "./Models/UserProfileToken";
import { useNavigate } from "react-router";
import { loginAPI, registerAPI } from "./backend-api";
import { toast } from "react-toastify";
import axios from "axios";

type UserContextType = {
  user: UserProfileToken | null;
  token: string | null;
  registerUser: (email: string, username: string, password: string) => void;
  loginUser: (email: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({
  user: null,
  token: null,
  registerUser: () => {},
  loginUser: () => {},
  logout: () => {},
  isLoggedIn: () => false,
});

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfileToken | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      axios.defaults.headers.common["Authorization"]="Bearer "+token
    }
    setIsReady(true);
  }, []);

  const registerUser = async (email: string, username: string, password: string) => {
    try {
      const res = await registerAPI(email, username, password);
      if (res && res.data && res.data.token) {
        const userObj = {
          userName: res.data.userName,
          email: res.data.email,
          token: res.data.token
        };
        localStorage.setItem("token", userObj.token);
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(userObj.token);
        setUser(userObj);
        toast.success("Registration Success!");
        navigate("/search");
      }
    } catch (error) {
      toast.warning("A Server Error Occurred!");
    }
  };

  const loginUser = async (email: string, password: string) => {
    try {
      const res = await loginAPI(email, password);
      if (res && res.data && res.data.token) {
        const userObj = {
          userName: res.data.userName,
          email: res.data.email,
          token: res.data.token
        };
        localStorage.setItem("token", userObj.token);
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(userObj.token);
        setUser(userObj);
        toast.success("Login Success!");
        navigate("/search");
      }
    } catch (error) {
      toast.warning("A Server Error Occurred!");
    }
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, token, registerUser, loginUser, logout, isLoggedIn }}>
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = ()=>React.useContext(UserContext);
