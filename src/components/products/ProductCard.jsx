import React from "react";
import { Button } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

function ProductCard({ tag }) {
  return (
    <div className="product-item">
      <div className="product-thumb">
        <span className={`product-badge ${tag}`}>{tag}</span>
        <div className="img-wrap">
          <Link to="/products/details">
            <div className="wrap">
              <img src="/images/products/fashion/fashion01.webp" alt="" />
            </div>
            <div className="overlay transition"></div>
          </Link>
          <ul className="actions list list-inline mb-0">
            <li className="list-inline-item">
              <Link className="cursor" tooltip="Add To Wishlist">
                <FaRegHeart />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                className="cursor"
                tooltip="Quick View"
                href="/products/details"
              >
                <FiEye />
              </Link>
            </li>
          </ul>
        </div>
        <div className="product-body">
          <span className="cat-badge">Fashion</span>
          <h4 className="product-title">
            <Link to="/products/details">
              Glito Black Solid Dry-Fit Regular Fit Sports Wear Jacket/Upper For
              Men
            </Link>
          </h4>
          <Rating />
          <span className="brand-wrap">
            By <span className="brand">V-Mart</span>
          </span>
          <div className="product-footer d-flex ">
            <Price salePrice="460" oldPrice="490" />
            <Button>
              <BsCart4 />
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
