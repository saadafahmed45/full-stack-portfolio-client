import React from "react";
import { useParams } from "react-router-dom";

const PortfolioDetails = (props) => {

  const { id } = useParams();
  console.log(id);
  return (
    <div className="text-center">
      <h1>Portfolio Details</h1>
      <h3>Portfolio id: {id}</h3>
    </div>
  );
};

export default PortfolioDetails;
