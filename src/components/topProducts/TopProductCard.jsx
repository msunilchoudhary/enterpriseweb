import React from "react";
import { Link } from "react-router-dom";
import Rating from "../products/Rating";
import Price from "../products/Price";

function TopProductCard({ img, title, salePrice, oldPrice, ratingCounts }) {
  return (
    <div>
      <div className="top-prod-card">
        <div className="tpc-img">
          <Link to="/products/details">
            <img src={img} alt="" />
          </Link>
        </div>
        <div className="tpc-text">
          <h3 className="title">
            <Link to="/products/details">{title}</Link>
          </h3>
          <div className="tpc-rating">
            <Rating />
            <span className="rating-counts">({ratingCounts})</span>
          </div>

          <Price salePrice={salePrice} oldPrice={oldPrice} />
        </div>
      </div>
    </div>
  );
}

export default TopProductCard;
