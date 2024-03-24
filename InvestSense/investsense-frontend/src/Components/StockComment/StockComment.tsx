import React from 'react'
import StockCommentForm from './StockCommentForm';

interface Props 
{
    stockSymbol:string;
}
const StockComment = ({stockSymbol}: Props) => {
  return (
    <div><StockCommentForm symbol={stockSymbol}/></div>
  )
}

export default StockComment