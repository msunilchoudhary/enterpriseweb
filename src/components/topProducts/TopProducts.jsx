import React from "react";
import TopProductCard from "./TopProductCard";
import "./topProduct.css";

function TopProducts() {
  return (
    <div className="top-product-section py-4 px-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-12">
            <div className="top-product-box">
              <h2>Top Selling</h2>
              <ul className="tpc-lists">
                <li>
                  <TopProductCard
                    img="/images/products/product-img-6.jpg"
                    title="Blueberry Greek Yogurt"
                    salePrice="460"
                    oldPrice="490"
                    ratingCounts="132"
                  />
                </li>
                <li>
                  <TopProductCard
                    img="/images/products/product-img-7.jpg"
                    title="Britannia Cheese Slices"
                    salePrice="460"
                    oldPrice="490"
                    ratingCounts="132"
                  />
                </li>
                <li>
                  <TopProductCard
                    img="/images/products/product-img-8.jpg"
                    title="Kellogg's Original Cereals"
                    salePrice="460"
                    oldPrice="490"
                    ratingCounts="132"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className="top-product-box">
              <h2>Trending Products</h2>
              <ul className="tpc-lists">
                <li>
                  <TopProductCard
                    img="/images/products/product-img-9.jpg"
                    title="Slurrp Millet Chocolate"
                    salePrice="460"
                    oldPrice="490"
                    ratingCounts="132"
                  />
                </li>
                <li>
                  <TopProductCard
                    img="/images/products/product-img-1.jpg"
                    title="Haldiram's Sev Bhujia"
                    salePrice="460"
                    oldPrice="490"
                    ratingCounts="132"
                  />
                </li>
                <li>
                  <TopProductCard
                    img="/images/products/product-img-2.jpg"
                    title="NutriChoice Digestive"
                    salePrice="460"
                    oldPrice="490"
                    ratingCounts="132"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className="top-product-box">
              <h2>Recently added</h2>
              <ul className="tpc-lists">
                <li>
                  <TopProductCard
                    img="/images/products/product-img-3.jpg"
                    title="Cadbury 5 Star Chocolate"
                    salePrice="460"
                    oldPrice="490"
                    ratingCounts="132"
                  />
                </li>
                <li>
                  <TopProductCard
                    img="/images/products/product-img-4.jpg"
                    title="Onion Flavour Potato"
                    salePrice="460"
                    oldPrice="490"
                    ratingCounts="132"
                  />
                </li>
                <li>
                  <TopProductCard
                    img="/images/products/product-img-5.jpg"
                    title="Salted Instant Popcorn"
                    salePrice="460"
                    oldPrice="490"
                    ratingCounts="132"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className="top-product-box">
              <h2>Top Rated</h2>
              <ul className="tpc-lists">
                <li>
                  <TopProductCard
                    img="/images/products/product-img-11.jpg"
                    title="Roast Ground Coffee"
                    salePrice="460"
                    oldPrice="490"
                    ratingCounts="132"
                  />
                </li>
                <li>
                  <TopProductCard
                    img="/images/products/product-img-12.jpg"
                    title="Crushed Tomatoes"
                    salePrice="460"
                    oldPrice="490"
                    ratingCounts="132"
                  />
                </li>
                <li>
                  <TopProductCard
                    img="/images/products/product-img-13.jpg"
                    title="Golden Pineapple"
                    salePrice="460"
                    oldPrice="490"
                    ratingCounts="132"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
