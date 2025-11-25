import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="header-navbar px-5">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-sm-2 w-lg">
            <div className="browse-category-wrap">
              <button className="browseCatBtn">
                <IoGridOutline />
                Browse All Categories
                <IoMdArrowDropdown />
              </button>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="menubar">
              <ul className="menulist">
                <li className="menu-item">
                  <Link to="/" className="menu-link">
                    Home
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/about-us" className="menu-link">
                    About
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/shop" className="menu-link">
                    Shop
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="#!" className="menu-link">
                    Vendor
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="#!" className="menu-link">
                    Products <IoIosArrowDown />
                  </Link>
                  <div className="dropdown-menu-wrap w-full">
                    <div className="row">
                      <div className="col">
                        <h3>Dairy, Bread & Eggs</h3>
                        <ul className="submenus">
                          <li>
                            <Link to="/">Butter</Link>
                          </li>
                          <li>
                            <Link to="/">Milk Drinks</Link>
                          </li>
                          <li>
                            <Link to="/">Curd & Yogurt</Link>
                          </li>
                          <li>
                            <Link to="/">Eggs</Link>
                          </li>
                          <li>
                            <Link to="/">Buns & Bakery</Link>
                          </li>
                          <li>
                            <Link to="/">Cheese</Link>
                          </li>
                          <li>
                            <Link to="/">Condensed Milk</Link>
                          </li>
                          <li>
                            <Link to="/">Dairy Products</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <h3>Breakfast & Instant Food</h3>
                        <ul className="submenus">
                          <li>
                            <Link to="/">Breakfast Cereal</Link>
                          </li>
                          <li>
                            <Link to="/">Noodles, Pasta & Soup</Link>
                          </li>
                          <li>
                            <Link to="/">Frozen Veg Snacks</Link>
                          </li>
                          <li>
                            <Link to="/">Frozen Non-Veg Snacks</Link>
                          </li>
                          <li>
                            <Link to="/">Vermicelli</Link>
                          </li>
                          <li>
                            <Link to="/">Instant Mixes</Link>
                          </li>
                          <li>
                            <Link to="/">Batter</Link>
                          </li>
                          <li>
                            <Link to="/">Fruit and Juices</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <h3>Cold Drinks & Juices</h3>
                        <ul className="submenus">
                          <li>
                            <Link to="/">Soft Drinks</Link>
                          </li>
                          <li>
                            <Link to="/">Fruit Juices</Link>
                          </li>
                          <li>
                            <Link to="/">Coldpress</Link>
                          </li>
                          <li>
                            <Link to="/">Water & Ice Cubes</Link>
                          </li>
                          <li>
                            <Link to="/">Soda & Mixers</Link>
                          </li>
                          <li>
                            <Link to="/">Health Drinks</Link>
                          </li>
                          <li>
                            <Link to="/">Herbal Drinks</Link>
                          </li>
                          <li>
                            <Link to="/">Milk Drinks</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <img src="/images/banners/menu-banner.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </li>

                <li className="menu-item">
                  <Link to="#!" className="menu-link">
                    Brands <IoIosArrowDown />
                  </Link>
                  <div className="dropdown-menu-wrap">
                    <ul className="submenus">
                      <li>
                        <Link to="/">Blog</Link>
                      </li>
                      <li>
                        <Link to="/">Blog Detail</Link>
                      </li>
                      <li>
                        <Link to="/">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/">Login</Link>
                      </li>
                      <li>
                        <Link to="/">Signup</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="menu-item">
                  <Link to="#!" className="menu-link">
                    Pages
                    <IoIosArrowDown />
                  </Link>
                  <div className="dropdown-menu-wrap">
                    <ul className="submenus">
                      <li>
                        <Link to="/">Blog</Link>
                      </li>
                      <li>
                        <Link to="/">Blog Detail</Link>
                      </li>
                      <li>
                        <Link to="/">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/">Login</Link>
                      </li>
                      <li>
                        <Link to="/">Signup</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 w-lg">
            <div className="helpline-wrap">
              <a href="#!">
                <FiPhoneCall />
                <span>+91 982 153 7677</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
