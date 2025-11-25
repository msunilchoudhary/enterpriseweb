import React from "react";
import { Link } from "react-router-dom";
import PriceRange from "./PriceRange";

function Sidebar() {
  const colors = [
    { name: "black", count: "23" },
    { name: "white", count: "05" },
    { name: "red", count: "12" },
    { name: "green", count: "10" },
    { name: "voilet", count: "03" },
    { name: "orange", count: "02" },
    { name: "blue", count: "11" },
  ];

  return (
    <div className="sidebar-wrap">
      <div className="sidebar-box mb-4">
        <h4>Categories</h4>
        <ul className="catlists">
          <li>
            <Link to="/">
              <span className="icon">
                <img src="/images/products/product-img-6.jpg" alt="" />
              </span>
              Dairy, Bread & Eggs
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <img src="/images/products/product-img-2.jpg" alt="" />
              </span>
              Snacks & Munchies
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <img src="/images/products/product-img-13.jpg" alt="" />
              </span>
              Fruits & Vegetables
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <img src="/images/products/product-img-4.jpg" alt="" />
              </span>
              Cold Drinks & Juices
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <img src="/images/products/product-img-7.jpg" alt="" />
              </span>
              Breakfast & Instant Food
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <img src="/images/products/product-img-5.jpg" alt="" />
              </span>
              Bakery & Biscuits
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-box mb-3">
        <h4>Filter by price</h4>
        <PriceRange />

        <div className="filters mt-3">
          <h5 className="mb-3">Color</h5>
          <div className="filter-lists">
            <ul>
              {colors.map((color, index) => (
                <li key={index} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={color.name}
                  />
                  <label className="form-check-label" htmlFor={color.name}>
                    <span className="color-name">{color.name}</span>
                    <span className="count">({color.count})</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="filters mt-4">
          <h5 className="mb-3">Rating</h5>
          <div className="filter-lists">
            <ul>
              {colors.map((color, index) => (
                <li key={index} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={color.name}
                  />
                  <label className="form-check-label" htmlFor={color.name}>
                    <span className="color-name">{color.name}</span>
                    <span className="count">({color.count})</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
