import React, { useState } from "react";
import Slider from "react-slick";
import "./catSlide.css";

function CatSlider() {
  const [itemBg, setItemBg] = useState([
    "#ecffec",
    "#feefea",
    "#fdf0ff",
    "#def3ff",
    "#ffe8f8",
    "#e3fffa",
    "#fff3ff",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fdf0ff",
    "#def3ff",
    "#ffe8f8",
    "#e3fffa",
    "#fff3ff",
    "#feefea",
  ]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {itemBg.length !== 0 &&
          itemBg.map((item, index) => (
            <div key={index} className="slide-item">
              <div className="slide-card" style={{ backgroundColor: item }}>
                <div className="img">
                  <img
                    src="/images/category/category-dairy-bread-eggs.jpg"
                    alt="Grocery Ecommerce Template"
                  />
                </div>
                <div className="title">Dairy, Bread & Eggs</div>
                <div className="counts">23 items</div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default CatSlider;
