import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";

function Price({ salePrice, oldPrice }) {
  return (
    <div className="price-wrap">
      <span className="sale-price">
        <BsCurrencyRupee />
        {salePrice}
      </span>
      <span className="old-price">
        <BsCurrencyRupee />
        {oldPrice}
      </span>
    </div>
  );
}

export default Price;
