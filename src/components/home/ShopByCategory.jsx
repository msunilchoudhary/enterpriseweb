import React from "react";
import CatSlider from "../catSlider/CatSlider";

function ShopByCategory() {
  return (
    <div className="shop-by-category-section py-3 px-5">
      <div className="container-fluid">
        <div className="section-title">
          <h2>Shop by Categories</h2>
        </div>
        <CatSlider />
      </div>
    </div>
  );
}

export default ShopByCategory;
