import React, { useEffect, useState } from "react";
import StockCommentForm from "./StockCommentForm";
import { CommentGet } from "../../Services/Models/CommentGet";
import { commentGetAPI } from "../../Services/backend-api";
import Spinner from "../Spinner";
import StockCommentList from "./StockCommentList";

interface Props {
  stockSymbol: string;
}
const StockComment = ({ stockSymbol }: Props) => {
  const [comments, setComment] = useState<CommentGet[] | null>(null);
  const [commentAdded, setCommentAdded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    getComments();
  }, [commentAdded]);
  const getComments = () => {
    setLoading(true);
    commentGetAPI(stockSymbol).then((res) => {
      setLoading(false);
      setComment(res?.data!);
    });
  };
  return (
    <div className="flex flex-col">
      {loading ? <Spinner /> : <StockCommentList comments={comments!} />}
      <StockCommentForm symbol={stockSymbol} setCommentAdded={setCommentAdded} />
    </div>
  );
};
export default StockComment;
