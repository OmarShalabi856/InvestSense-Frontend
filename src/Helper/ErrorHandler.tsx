import axios from "axios";
import { Navigate } from "react-router";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    var err = error.response;
    console.log(err)
    if (Array.isArray(err)) {
      for (let val of err?.data.errors) {
        toast.warning(val.description);
      }
    } else if (Array.isArray(err?.data)) {
        for (let e of err?.data!) {
          toast.warning(e.description);
        }
    } else if (err?.data) {
      toast.warning(err.data);
    } else if (err?.status === 401) {
      toast.warning("Please Login");
      <Navigate to="/login" state={{ from: location }} replace />
    } 
    else if (err?.status === 400) {
        toast.warning("Please Login");
      }
    else if (err) {
      toast.warning(err?.data);
    }
  }
};
