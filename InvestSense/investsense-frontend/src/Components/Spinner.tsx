import React from "react";
import { ClipLoader } from "react-spinners";

interface Props {
  isLoading?: boolean;
}

const Spinner = ({ isLoading = true }: Props) => {
  return (
    <div id="spinner" className="flex items-center justify-center">
      <ClipLoader loading={isLoading} color="black">

      </ClipLoader>
    </div>
  );
};

export default Spinner;
