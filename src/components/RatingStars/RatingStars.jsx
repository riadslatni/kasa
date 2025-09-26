import React from "react";
import "./ratingStars.css";

function RatingStars({ rating }) {
  return (
    <div className="apartment__owner__stars">
      {[1, 2, 3, 4, 5].map((num) => (
        <span key={num} className={rating >= num ? "on" : ""}>★</span>
      ))}
    </div>
  );
}

export default RatingStars;

