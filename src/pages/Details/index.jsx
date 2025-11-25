import React, { useState } from "react";
import Breadcrumbs from "../../components/pageTitle/breadcrumbs";
import Rating from "../../components/products/Rating";
import { Link } from "react-router-dom";
import Price from "../../components/products/Price";
import Quantity from "../../components/products/Quantity";
import WishlistButton from "../../components/products/WishlistButton";
import AddToCartButton from "../../components/products/AddToCartButton";
import ZoomImage from "../../components/products/ZoomImage";
import { Button } from "react-bootstrap";
import { TbThumbUp } from "react-icons/tb";
import { BsFlag } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

function ProductDetails() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="product-detail pt-2 pb-4 px-5">
      <Breadcrumbs
        title="Glito Black Solid Dry-Fit Regular Fit Sports Wear Jacket/Upper For Men"
        catName="Bakery Biscuits"
      />
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="product-img-zoom">
              <ZoomImage />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-information">
              <h2>
                Glito Black Solid Dry-Fit Regular Fit Sports Wear Jacket/Upper
                For Men
              </h2>
              <div className="product-rating d-flex align-items-center">
                <Rating value={4} />
                <Link className="text-primary text-decoration-none">
                  (30 Reviews)
                </Link>
              </div>
              <div className="product-price-offers d-flex align-items-center my-3">
                <Price salePrice="234" oldPrice="260" />
                <span className="offers text-danger ms-2">10% Off</span>
              </div>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="product-size d-flex mb-2 align-items-center">
                <span>Size:</span>
                <ul className="list list-inline mb-0 ps-4 false">
                  <li className="list-inline-item">
                    <a className="tag ">S</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="tag ">M</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="tag ">L</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="tag ">XL</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="tag ">XS</a>
                  </li>
                </ul>
              </div>
              <div className="action-wrap d-flex align-items-center">
                <Quantity />
                <WishlistButton />
              </div>
              <div className="addtocart-wrap mt-5">
                <AddToCartButton text="Add To Cart" />
              </div>
            </div>
          </div>
        </div>
        <div className="product-tab-details">
          <div className="tab-container">
            <div className="tablists d-flex align-align-items-center">
              <Button
                type="button"
                className={`${activeTab === 0 ? "active" : ""}`}
                onClick={() => setActiveTab(0)}
              >
                Description
              </Button>
              <Button
                type="button"
                onClick={() => setActiveTab(1)}
                className={`${activeTab === 1 ? "active" : ""}`}
              >
                Additional
              </Button>
              <Button
                type="button"
                onClick={() => setActiveTab(2)}
                className={`${activeTab === 2 ? "active" : ""}`}
              >
                Reviews (1)
              </Button>
            </div>
            <div className="tablist-contents">
              {activeTab === 0 && (
                <div className="Description-content">
                  <h3>Description</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nisi, tellus iaculis urna bibendum in lacus, integer. Id
                    imperdiet vitae varius sed magnis eu nisi nunc sit. Vel,
                    varius habitant ornare ac rhoncus. Consequat risus facilisis
                    ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p>
                    <strong>Storage Tips</strong>
                    <br />
                    Nisi, tellus iaculis urna bibendum in lacus, integer. Id
                    imperdiet vitae varius sed magnis eu nisi nunc sit. Vel,
                    varius habitant ornare ac rhoncus. Consequat risus facilisis
                    ante ipsum netus risus adipiscing sagittis sed.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p>
                    <strong>Unit</strong>
                    <br />3 units
                  </p>
                  <p>
                    <strong>Disclaimer</strong>
                    <br /> Image shown is a representation and may slightly vary
                    from the actual product. Every effort is made to maintain
                    accuracy of all information displayed.
                  </p>
                </div>
              )}
              {activeTab === 1 && (
                <div className="additional-info">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr className="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr className="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5″L x 18.5″W x 16.5″H</p>
                          </td>
                        </tr>
                        <tr className="folded-w-wheels">
                          <th>Folded (w/ wheels)</th>
                          <td>
                            <p>32.5″L x 24″W x 18.5″H</p>
                          </td>
                        </tr>
                        <tr className="door-pass-through">
                          <th>Door Pass Through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr className="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr className="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr className="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr className="width">
                          <th>Width</th>
                          <td>
                            <p>24″</p>
                          </td>
                        </tr>
                        <tr className="handle-height-ground-to-handle">
                          <th>Handle height (ground to handle)</th>
                          <td>
                            <p>37-45″</p>
                          </td>
                        </tr>
                        <tr className="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12″ air / wide track slick tread</p>
                          </td>
                        </tr>
                        <tr className="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5″</p>
                          </td>
                        </tr>
                        <tr className="head-room-inside-canopy">
                          <th>Head room (inside canopy)</th>
                          <td>
                            <p>25″</p>
                          </td>
                        </tr>
                        <tr className="pa_color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr className="pa_size">
                          <th>Size</th>
                          <td>
                            <p>M, S</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="review-content">
                  <div className="row justify-content-between">
                    <div className="col-lg-3 col-12">
                      <div className="me-lg-12 mb-6 mb-md-0">
                        <div className="mb-5">
                          <h4 className="mb-3">Customer reviews</h4>
                          <span className="d-flex flex-wrap">
                            <small className="text-warning mt-1">
                              <Rating value={4} />
                            </small>
                            <span className="ms-3">4.1 out of 5</span>
                            <small>11,130 global ratings</small>
                          </span>
                        </div>
                        <div className="mb-5">
                          <div className="d-flex align-items-center mb-2">
                            <div className="text-nowrap me-3 text-muted">
                              <span className="d-inline-block align-middle text-muted">
                                5
                              </span>
                              <FaStar className="ms-1 small text-warning" />
                            </div>
                            <div className="w-100">
                              <div
                                className="progress"
                                style={{ height: "6px" }}
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "60%" }}
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                            <span className="text-muted ms-3">53%</span>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <div className="text-nowrap me-3 text-muted">
                              <span className="d-inline-block align-middle text-muted">
                                4
                              </span>
                              <FaStar className="ms-1 small text-warning" />
                            </div>
                            <div className="w-100">
                              <div
                                className="progress"
                                style={{ height: "6px" }}
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "50%" }}
                                  aria-valuenow="50"
                                  aria-valuemin="0"
                                  aria-valuemax="50"
                                ></div>
                              </div>
                            </div>
                            <span className="text-muted ms-3">22%</span>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <div className="text-nowrap me-3 text-muted">
                              <span className="d-inline-block align-middle text-muted">
                                3
                              </span>
                              <FaStar className="ms-1 small text-warning" />
                            </div>
                            <div className="w-100">
                              <div
                                className="progress"
                                style={{ height: "6px" }}
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "35%" }}
                                  aria-valuenow="35"
                                  aria-valuemin="0"
                                  aria-valuemax="35"
                                ></div>
                              </div>
                            </div>
                            <span className="text-muted ms-3">14%</span>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <div className="text-nowrap me-3 text-muted">
                              <span className="d-inline-block align-middle text-muted">
                                2
                              </span>
                              <FaStar className="ms-1 small text-warning" />
                            </div>
                            <div className="w-100">
                              <div
                                className="progress"
                                style={{ height: "6px" }}
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "22%" }}
                                  aria-valuenow="22"
                                  aria-valuemin="0"
                                  aria-valuemax="22"
                                ></div>
                              </div>
                            </div>
                            <span className="text-muted ms-3">5%</span>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <div className="text-nowrap me-3 text-muted">
                              <span className="d-inline-block align-middle text-muted">
                                1
                              </span>
                              <FaStar className="ms-1 small text-warning" />
                            </div>
                            <div className="w-100">
                              <div
                                className="progress"
                                style={{ height: "6px" }}
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "14%" }}
                                  aria-valuenow="14"
                                  aria-valuemin="0"
                                  aria-valuemax="14"
                                ></div>
                              </div>
                            </div>
                            <span className="text-muted ms-3">7%</span>
                          </div>
                        </div>
                        <div className="d-grid">
                          <h4>Review this product</h4>
                          <p className="mb-0">
                            Share your thoughts with other customers.
                          </p>
                          <a
                            href="#"
                            className="btn btn-outline-gray-400 mt-4 text-muted"
                          >
                            Write the Review
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-12">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <h4>Reviews</h4>
                        </div>
                        <div>
                          <select className="form-select">
                            <option selected="">Top Reviews</option>
                            <option value="Most Recent">Most Recent</option>
                          </select>
                        </div>
                      </div>
                      <div className="d-flex border-bottom pb-4 mb-4">
                        <img
                          src="/images/avatar/avatar-10.jpg"
                          alt=""
                          className="rounded-circle avatar-lg"
                        />
                        <div className="ms-4">
                          <h6 className="mb-1">Shankar Subbaraman</h6>

                          <p className="small">
                            <span className="text-muted">30 December 2022</span>
                            <span className="text-primary ms-3 fw-bold">
                              Verified Purchase
                            </span>
                          </p>
                          <div className="mb-2 d-flex align-items-center">
                            <Rating value={5} />
                            <span className="ms-3 text-dark fw-bold">
                              Need to recheck the weight at delivery point
                            </span>
                          </div>
                          <p>
                            Product quality is good. But, weight seemed less
                            than 1kg. Since it is being sent in open package,
                            there is a possibility of pilferage in between.
                            FreshCart sends the veggies and fruits through
                            sealed plastic covers and Barcode on the weight etc.
                            .
                          </p>
                          <div>
                            <div className="border icon-shape icon-lg border-2">
                              <img
                                src="/images/products/product-img-1.jpg"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="border icon-shape icon-lg border-2 ms-1">
                              <img
                                src="/images/products/product-img-2.jpg"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="border icon-shape icon-lg border-2 ms-1">
                              <img
                                src="/images/products/product-img-3.jpg"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </div>

                          <div className="d-flex justify-content-end mt-4">
                            <a
                              href="#"
                              className="text-muted text-decoration-none"
                            >
                              <TbThumbUp className="me-2" />
                              Helpful
                            </a>
                            <a
                              href="#"
                              className="text-muted ms-4 text-decoration-none"
                            >
                              <BsFlag className="me-2" />
                              Report abuse
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex border-bottom pb-4 mb-4">
                        <img
                          src="/images/avatar/avatar-12.jpg"
                          alt=""
                          className="rounded-circle avatar-lg"
                        />
                        <div className="ms-5">
                          <h6 className="mb-1">Robert Thomas</h6>

                          <p className="small">
                            <span className="text-muted">29 December 2022</span>
                            <span className="text-primary ms-3 fw-bold">
                              Verified Purchase
                            </span>
                          </p>
                          <div className="mb-2 d-flex align-items-center">
                            <Rating value={5} />
                            <span className="ms-3 text-dark fw-bold">
                              Need to recheck the weight at delivery point
                            </span>
                          </div>
                          <p>
                            Product quality is good. But, weight seemed less
                            than 1kg. Since it is being sent in open package,
                            there is a possibility of pilferage in between.
                            FreshCart sends the veggies and fruits through
                            sealed plastic covers and Barcode on the weight etc.
                            .
                          </p>

                          <div className="d-flex justify-content-end mt-4">
                            <a
                              href="#"
                              className="text-muted text-decoration-none"
                            >
                              <TbThumbUp className="me-2" />
                              Helpful
                            </a>
                            <a
                              href="#"
                              className="text-muted ms-4 text-decoration-none"
                            >
                              <BsFlag className="me-2" />
                              Report abuse
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
