import axios from "axios";
import { handleError } from "../Helper/ErrorHandler";
import { UserProfileToken } from "./Models/UserProfileToken";
import { CommentPost } from "./Models/CommentPost";

const api = "https://localhost:7163/api";

export const loginAPI = async (email: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(`${api}/account/login`, {
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};


export const registerAPI = async (email:string,username: string, password: string) => {
    try {
      const data = await axios.post<any>(`${api}/account/register`, {
        email:email,
        username: username,
        password: password,
      });
      console.log(data)
      return data;
    } catch (error) {
      handleError(error);
    }
  };

  export const commentPostAPI = async (symbol:string,title: string, text: string) => {
    try {

      const data = await axios.post<any>(`${api}/${symbol}`, {
        Title:title,
        Content: text,
      });
      
      return data;
    } catch (error) {
      handleError(error);
    }
  };
  
