import React from "react";
import "./Card.css";
import {FaApple} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa";


const Card = (props) => {
  return <div className="card">{props.children}

        <div className="icon">
        <h1 className="apple"> <FaApple/> </h1>
        <h1 className="google"> <FaGoogle/> </h1>
        </div>

    
      </div>
};

export default Card;