import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props  {
    companyName:string,
    ticker:string,
    price:number,
};

const Card:React.FC<Props> = ({companyName,ticker,price}: Props):JSX.Element=> {
  return (
    <div className="card col-4">
      <img
        className="card-img-bottom img-fluid"
        src=""
      />
      <div className="card-body">
        <h5 className="card-title">{ticker}</h5>
        <p className="card-text">${price}</p>
      </div>
      <div className="card-body">
        <p className="card-text">
          
        </p>
      </div>
    </div>
  );
};

export default Card;
