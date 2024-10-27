import React from "react";
import { Programs } from "./Programs";
import "./Program.css";
import { Link } from "react-router-dom";

const Program = () => {
  return (
    <div className="membership-container">
      <h1>Membership Plans</h1>
      <p>Choose the plan that suits you best</p>
      <div className="plans">
      {
        Programs.map((price,i)=>{
          return(
        <div className="plan-card">
          <h2>{price.name}</h2>
          <p className="price">{price.price}</p>
          <ul>
            <li>{price.features}</li>
            
          </ul>
          <Link to={`/Programs/${Programs.id}`}><button>Purchase</button></Link>
        </div>
         )
        }
       )
      }
        
      </div>
    </div>
  );
};

export default Program;