import axios from "axios";
import { handleError } from "../Helper/ErrorHandler";
import { UserProfileToken } from "./Models/UserProfileToken";

const api = "https://localhost:5167/api";

export const loginAPI = async (username: string, password: string) => {
  try {
    const data = axios.post<UserProfileToken>(`${api}/account/login`, {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};


export const registerAPI = async (email:string,username: string, password: string) => {
    try {
      const data = axios.post<UserProfileToken>(`${api}/account/register`, {
        email:email,
        username: username,
        password: password,
      });
      return data;
    } catch (error) {
      handleError(error);
    }
  };
  
