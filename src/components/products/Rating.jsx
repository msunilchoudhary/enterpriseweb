import React, { useState } from "react";
import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";

function Rating({ value = 1 }) {
  const [isValue, setIsValue] = useState();
  return (
    <>
      {!isValue ? (
        <div className="rating">
          {value == 1 && (
            <>
              <FaStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </>
          )}
          {value == 2 && (
            <>
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </>
          )}
          {value == 3 && (
            <>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </>
          )}
          {value == 4 && (
            <>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </>
          )}
          {value == 5 && (
            <>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </>
          )}
        </div>
      ) : (
        <div className="rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfStroke />
        </div>
      )}
    </>
  );
}

export default Rating;
