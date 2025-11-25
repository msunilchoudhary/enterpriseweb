import React, { useState } from "react";
import "./shop.css";
import { BiRupee } from "react-icons/bi";

const PriceRange = () => {
  const [values, setValues] = useState([100, 60000]);
  const minPrice = 100;
  const maxPrice = 60000;
  const priceGap = 10;

  const handleRangeChange = (e, index) => {
    const newValues = [...values];
    newValues[index] = parseInt(e.target.value);

    if (newValues[1] - newValues[0] < priceGap) {
      if (index === 0) {
        newValues[0] = newValues[1] - priceGap;
      } else {
        newValues[1] = newValues[0] + priceGap;
      }
    }
    setValues(newValues);
  };

  return (
    <div className="priceRangeWrap">
      <div className="price-input">
        <div className="field">
          <span>From: </span>
          <strong className="text-success d-flex align-items-center">
            <BiRupee />
            {values[0]}
          </strong>
        </div>
        <div className="field justify-content-end">
          <span>From: </span>
          <strong className="text-success d-flex align-items-center">
            <BiRupee />
            {values[1]}
          </strong>
        </div>
      </div>
      <div className="slider">{/* <div className="progress"></div> */}</div>
      <div className="range-input">
        <input
          type="range"
          className="range-min"
          min={minPrice}
          max={maxPrice}
          value={values[0]}
          onChange={(e) => handleRangeChange(e, 0)}
        />
        <input
          type="range"
          className="range-max"
          min={minPrice}
          max={maxPrice}
          value={values[1]}
          onChange={(e) => handleRangeChange(e, 1)}
        />
      </div>
    </div>
  );
};
export default PriceRange;
