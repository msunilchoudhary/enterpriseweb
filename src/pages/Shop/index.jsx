import React from "react";
import InnerTitle from "../../components/pageTitle/InnerTitle";
import Sidebar from "../../components/shop/Sidebar";
import ProductCard from "../../components/products/ProductCard";
import SelectCatDropDown from "../../components/header/SelectCatDropDown";

function Shop() {
  const showItems = ["Show: 10", "Show: 20", "Show: 30", "Show: 40"];
  const byFeatured = [
    "Price: Low to High",
    "Price: High to Low",
    "Release Date",
    "Avg. Rating",
  ];
  return (
    <div className="main-page-wrap">
      <InnerTitle title="Shop" />
      <section className="product-list-wrap pb-5 px-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9">
              <div className="product-list-container">
                <div className="top-strip">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-12">
                      <div className="items-found">
                        <p>
                          We found <span>32</span>products for you
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-5 col-12">
                      <div className="sorting">
                        <SelectCatDropDown
                          data={showItems}
                          placeholder="Show: 50"
                        />
                        <SelectCatDropDown
                          data={byFeatured}
                          placeholder="SortBy: Featured"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 mb-4">
                    <ProductCard />
                  </div>
                  <div className="col-lg-3 mb-4">
                    <ProductCard />
                  </div>
                  <div className="col-lg-3 mb-4">
                    <ProductCard />
                  </div>
                  <div className="col-lg-3 mb-4">
                    <ProductCard />
                  </div>
                  <div className="col-lg-3 mb-4">
                    <ProductCard />
                  </div>
                  <div className="col-lg-3 mb-4">
                    <ProductCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
