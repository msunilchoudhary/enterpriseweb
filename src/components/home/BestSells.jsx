import React from "react";
import { Link } from "react-router-dom";
import Product from "../products/ProductCard";
import DealSlider from "react-slick";

function BestSells() {
  var settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="product-section py-4 px-5">
      <div className="container-fluid">
        <div className="section-title d-flex justify-content-between align-item-center">
          <h2>Daily Best Sells</h2>
          <div className="filter-tabs">
            <ul className="d-flex justify-content-end p-0 m-0">
              {/* <li>
                <Link to="/">All</Link>
              </li> */}
              <li className="active">
                <Link to="/">Featured</Link>
              </li>
              <li>
                <Link to="/">Popular</Link>
              </li>
              <li>
                <Link to="/">New Added</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="product-container row">
          <div className="col-lg-3">
            <div className="deal-banner">
              <img src="/images/banners/banner-deal.jpg" alt="" />
              <div className="banner-text">
                <h3 className="fw-bold text-white">
                  100% Organic Coffee Beans.
                </h3>
                <p className="text-white">Get the best deal before close.</p>
                <a href="#!" className="btn btn-primary">
                  Shop Now
                  <i className="feather-icon icon-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="best-deals">
              <DealSlider {...settings}>
                <div className="item">
                  <Product tag="hot" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="best" />
                </div>
                <div className="item">
                  <Product />
                </div>
              </DealSlider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSells;
