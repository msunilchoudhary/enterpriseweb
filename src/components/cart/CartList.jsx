import React from "react";
import Quantity from "../products/Quantity";
import { BiRupee } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

function CartList() {
  const cartLists = [
    {
      img: "/images/products/product-img-1.jpg",
      title: "Haldiram's Sev Bhujia",
      quantity: "100g",
      price: "25",
    },
    {
      img: "/images/products/product-img-2.jpg",
      title: "NutriChoice Digestive",
      quantity: "200g",
      price: "30",
    },
    {
      img: "/images/products/product-img-3.jpg",
      title: "Cadbury 5 Star Chocolate",
      quantity: "1kg",
      price: "300",
    },
    {
      img: "/images/products/product-img-4.jpg",
      title: "Onion Flavour Potato",
      quantity: "200g",
      price: "60",
    },
  ];
  return (
    <div className="cart-lists">
      <ul className="list-group list-group-flush">
        {cartLists.map((item, index) => (
          <li key={index} className="list-group-item py-3 ps-0">
            <div className="row align-items-center">
              <div className="col-6 col-md-6 col-lg-7">
                <div className="d-flex">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="icon-shape icon-xxl"
                  />
                  <div className="ms-3">
                    <a href="#" className="text-inherit">
                      <h6 className="mb-0">{item.title}</h6>
                    </a>
                    <span>
                      <small className="text-muted">{item.quantity}</small>
                    </span>
                    <div className="mt-2 small lh-1">
                      <a
                        href="#!"
                        className="text-decoration-none text-inherit d-flex align-items-center"
                      >
                        <span className="me-1 align-text-bottom">
                          <RiDeleteBin6Line />
                        </span>
                        <small className="text-muted">Remove</small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-3">
                <Quantity />
              </div>

              <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                <span className="fw-bold d-flex align-items-center justify-content-end">
                  <BiRupee />
                  {item.price}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between mt-4">
        <a href="#!" className="btn btn-primary">
          Continue Shopping
        </a>
        <a href="#!" className="btn btn-dark">
          Update Cart
        </a>
      </div>
    </div>
  );
}

export default CartList;
