import React from "react";
import DealBannerCard from "../banners/dealBannerCard";

function AdBanners() {
  const dealBanners = [
    {
      img: "/images/banners/ad-banner-1.jpg",
      title: "10% cashback on personal care",
      description: "Refresh your day the fruity way",
      code: "CARE12",
      cashback: "$12",
      link: "/shop",
    },
    {
      img: "/images/banners/ad-banner-2.jpg",
      title: "Say yes to season's fresh",
      description: "Refresh your day the fruity way",
      link: "/shop",
    },
    {
      img: "/images/banners/ad-banner-3.jpg",
      title: "When in doubt, eat ice cream",
      description: "Enjoy a scoop of summer today",
      link: "/shop",
    },
  ];
  return (
    <div className="py-3 px-5 ad-banner">
      <div className="container-fluid">
        <div className="row">
          {dealBanners.map((bannerItem, index) => (
            <div key={index} className="col-lg-4">
              <DealBannerCard bannerItem={bannerItem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdBanners;
