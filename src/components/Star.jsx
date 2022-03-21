import React from "react";
import * as star from "../assets/images/icons/star-s.png";
import "./Star.css";

const Star = () => {
  return (
    <img className="book-store_rating-star" src={star.default} alt="star" />
  );
};

export default Star;
