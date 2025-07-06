import React from "react";
import { CommentGet } from "../../Services/Models/CommentGet";


type Props = {
  comment: CommentGet;
};

const StockCommentListItem = ({ comment }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 ml-4 p-4 mb-8 w-1/2 border rounded-lg bg-white shadow-lg mt-3">
      <div className="flex gap-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="text-xl">
              {comment.title}
            </p>
          </div>
          <p className="text-dark text-sm">@{comment.createdBy}</p>
        </div>
      </div>
      <p className="-mt-4 text-gray-500">{comment.content}</p>
    </div>
  );
};

export default StockCommentListItem;