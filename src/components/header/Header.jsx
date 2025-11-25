import React, { useEffect, useRef, useState } from "react";
import logo from "/images/logo-white.png";
import "./header.css";
import SelectCatDropDown from "./SelectCatDropDown";
import { IoSearchSharp, IoSettingsOutline } from "react-icons/io5";
import axios from "axios";
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Navbar from "./Navbar";

function Header() {
  const [isUserDropDownOpen, setIsUserDropDownOpen] = useState(false);
  const [categories, setCategories] = useState([
    "Dairy, Bread & Eggs",
    "Snacks & Munchies",
    "Fruits & Vegetables",
    "Cold Drinks & Juices",
    "Breakfast & Instant Food",
    "Bakery & Biscuits",
    "Chicken, Meat & Fish",
  ]);

  const dropdownRef = useRef(null);

  const countriesList = [];

  useEffect(() => {
    getCountries("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountries = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.data.map((item) => {
            countriesList.push(item.country);
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleAccount = () => {
    setIsUserDropDownOpen(!isUserDropDownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsUserDropDownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header>
      <div className={`py-2 px-5 header-top`}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="brand">
                <a href="/">
                  <img src={logo} height="36" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="header-category-search">
                <SelectCatDropDown
                  data={categories}
                  placeholder="All Categories"
                />
                <div className="search-by-item-wrap">
                  <form className="forms">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search item here.."
                    />
                    <button type="submit">
                      <IoSearchSharp />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="header-right-sidebar d-flex justify-content-between">
                <div className="country-wraper">
                  <SelectCatDropDown
                    data={countriesList}
                    placeholder="Your Location"
                  />
                </div>
                <ul className="header-tabs d-flex justify-content-end p-0 m-0 align-items-center">
                  <li>
                    <a href="#!">
                      <IoMdGitCompare />
                      <span className="badge">3</span>
                      <span>compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <FaRegHeart />
                      <span className="badge">2</span>
                      <span>Wishlist</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <BsCart3 />
                      <span className="badge">3</span>
                      <span>Cart</span>
                    </a>
                  </li>
                  <li onClick={handleAccount} ref={dropdownRef}>
                    <a>
                      <FaRegUser />
                      <span>Account</span>
                    </a>
                    {isUserDropDownOpen && (
                      <ul className="userDropDownMenu">
                        <li>
                          <a href="#">
                            <FaRegUser />
                            My Account
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <SlLocationPin />
                            Order Tracking
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaRegHeart />
                            My Wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <IoSettingsOutline />
                            Setting
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FiLogOut />
                            Logout
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
