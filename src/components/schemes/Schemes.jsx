import React from "react";
import Scheme from "./Scheme";

function Schemes() {
  const schemes = [
    {
      img: "/images/icons/icon-best-offer.svg",
      title: "Best prices & offers",
      text: "Orders $50 or more",
    },
    {
      img: "/images/icons/icon-free-felivery.svg",
      title: "Free delivery",
      text: "Orders $50 or more",
    },
    {
      img: "/images/icons/icon-daily-deal.svg",
      title: "Great daily deal",
      text: "Orders $50 or more",
    },
    {
      img: "/images/icons/icon-assorment.svg",
      title: "Wide assortment",
      text: "Orders $50 or more",
    },
    {
      img: "/images/icons/icon-return.svg",
      title: "Easy returns",
      text: "Orders $50 or more",
    },
  ];
  return (
    <div className="schemes-wrap px-5">
      <div className="row">
        {schemes.map((item, index) => (
          <div key={index} className="col">
            <Scheme data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schemes;
