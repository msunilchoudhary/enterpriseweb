import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";

function DealBannerCard({ bannerItem }) {
  return (
    <div>
      <div className="banner-card">
        <img src={bannerItem.img} alt="Add Banner 1" />
        <div className="banner-content">
          <h3>{bannerItem.title}</h3>
          {bannerItem.code || bannerItem.cashback ? (
            <>
              <p>
                Max cashback:{" "}
                <span className="cashback">{bannerItem.cashback}</span>
              </p>
              <p>
                Code: <span className="code">{bannerItem.code}</span>
              </p>
            </>
          ) : (
            <p className="desc">{bannerItem.description}</p>
          )}

          <p>
            <Link to={bannerItem.link} className="btn btn-dark">
              Shop Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DealBannerCard;
