import axios from "axios";
import { handleError } from "../Helper/ErrorHandler";
import { UserProfileToken } from "./Models/UserProfileToken";
import { CommentPost } from "./Models/CommentPost";
import { useAuth } from "./useAuth";
import { CommentGet } from "./Models/CommentGet";
import { PortfolioGet } from "./Models/PortfolioGet";
import { PortfolioPost } from "./Models/PortfolioPost";

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
      const data = await axios.post<any>(`${api}/comment/${symbol}`, {
        Title:title,
        Content: text,
      });
      console.log(data)
      return data;
    } catch (error) {
      handleError(error);
    }
  };

  export const commentGetAPI = async (symbol: string) => {
    try {
      const data = await axios.get<CommentGet[]>(api + `/comment/?Symbol=${symbol}`);
      return data;
    } catch (error) {
      handleError(error);
    }
  };
  
  export const portfolioAddAPI = async (symbol: string) => {
    try {
      const data = await axios.post<PortfolioPost>(api + `/portfolio/?symbol=${symbol}`);
      return data;
    } catch (error) {
      handleError(error);
    }
  };
  
  export const portfolioDeleteAPI = async (symbol: string) => {
    try {
      const data = await axios.delete<PortfolioPost>(api + `/portfolio/?symbol=${symbol}`);
      return data;
    } catch (error) {
      handleError(error);
    }
  };
  
  export const portfolioGetAPI = async () => {
    try {
      const data = await axios.get<PortfolioGet[]>(api+ `/portfolio`);
      return data;
    } catch (error) {
      handleError(error);
    }
  };
