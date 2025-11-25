import React from "react";
import NewsLetter from "../newsLetter/NewsLetter";

function HomeNewsLetter() {
  return (
    <div className="py-4 px-5 newsletter-section">
      <div className="container-fluid">
        <div className="newsletterbox">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="section-title">
                <h2>Stay home & get your daily needs from our shop</h2>
                <p>Start You'r Daily Shopping with Nest Mart</p>
              </div>
              <NewsLetter />
            </div>
            <div className="col-lg-5">
              <div className="imgbox">
                <img src="/images/newsletter.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNewsLetter;
