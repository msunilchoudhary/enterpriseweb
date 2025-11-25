import React from "react";
import { Link } from "react-router-dom";
import Product from "../products/ProductCard";

function HomeProducts() {
  return (
    <div className="product-section py-3 px-5">
      <div className="container-fluid">
        <div className="section-title d-flex justify-content-between align-item-center">
          <h2>Popular Products</h2>
          <div className="filter-tabs">
            <ul className="d-flex justify-content-end p-0 m-0">
              {/* <li>
                <Link to="/">All</Link>
              </li> */}
              <li className="active">
                <Link to="/">Fashion</Link>
              </li>
              <li>
                <Link to="/">Electronics</Link>
              </li>
              <li>
                <Link to="/">Bags</Link>
              </li>
              <li>
                <Link to="/">Footwear</Link>
              </li>
              <li>
                <Link to="/">Groceries</Link>
              </li>
              <li>
                <Link to="/">Beauty</Link>
              </li>
              <li>
                <Link to="/">Wellness</Link>
              </li>
              <li>
                <Link to="/">Jewellery</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-container row">
          <div className="col-20">
            <Product tag="hot" />
          </div>
          <div className="col-20">
            <Product tag="sale" />
          </div>
          <div className="col-20">
            <Product tag="new" />
          </div>
          <div className="col-20">
            <Product tag="best" />
          </div>
          <div className="col-20">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
