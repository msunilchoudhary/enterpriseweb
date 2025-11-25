import React from "react";
import Slider from "react-slick";
import "./heroSlide.css";
import { MdArrowRightAlt } from "react-icons/md";

function HeroSlider() {
  var setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slideToShow: 1,
    slideToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div className="hero-slider py-4 px-5">
      <div className="container-fluid">
        <Slider {...setting}>
          <div className="slide-item">
            <img src="/images/banners/home-slider-1.jpg" alt="slide 1" />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="sider-content-wrap">
                    <span className="badge text-bg-warning">
                      Free Shipping - orders over $100
                    </span>
                    <h2 className="text-dark display-5 fw-bold mt-4">
                      Free Shipping on
                      <br />
                      orders over
                      <span className="text-primary">$100</span>
                    </h2>
                    <p className="lead">
                      Free Shipping to First-Time Customers Only, After
                      promotions and discounts are applied.
                    </p>
                    <a href="#!" className="btn btn-dark mt-3" tabIndex="0">
                      Shop Now
                      <MdArrowRightAlt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <img src="/images/banners/home-slider-2.jpg" alt="slide 2" />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="sider-content-wrap">
                    <span className="badge text-bg-warning">
                      Opening Sale Discount 50%
                    </span>

                    <h2 className="text-dark display-5 fw-bold mt-4">
                      SuperMarket For Fresh Grocery
                    </h2>
                    <p className="lead">
                      Introduced a new model for online grocery shopping and
                      convenient home delivery.
                    </p>
                    <a href="#!" className="btn btn-dark mt-3" tabIndex="0">
                      Shop Now
                      <MdArrowRightAlt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default HeroSlider;
