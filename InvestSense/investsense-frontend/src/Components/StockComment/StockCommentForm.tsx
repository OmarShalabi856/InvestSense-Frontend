import React, { useState } from "react";
import { toast } from "react-toastify";
import { commentPostAPI } from "../../Services/backend-api";

interface Props {
  symbol: string;
}

const StockCommentForm: React.FC<Props> = ({ symbol }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title === "") {
      toast.warning("Title Can't Be Empty!");
      return;
    }
    if (text === "") {
      toast.warning("Comment Box Can't Be Empty!");
      return;
    }
    commentPostAPI(symbol,title,text).then((res)=>{
        if(res){
            toast.success("Comment Posted Successfully!")
        }
    })
    .catch((err)=>{
        toast.warning("An Error Occured While Posting The Comment!")
    })
  };

  return (
    <div className="w-screen mt-10">
      <hr />
      <form onSubmit={handleSubmit} className="space-y-4 mt-3">
        <div>
          <label htmlFor="title" className="block font-bold text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 px-4 py-2 block w-full rounded-md border border-teal-600 shadow-sm focus:outline-teal-900"
          />
        </div>
        <div>
          <label htmlFor="text" className="block font-bold text-gray-700">
            Comment
          </label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            className="focus:outline-teal-900 mt-1 px-4 py-2 block w-full rounded-md border border-teal-600 shadow-sm"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-button text-white px-4 py-2 rounded-md hover:bg-blue-button-hover focus:outline-none "
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default StockCommentForm;
