import React from "react";
import "./LandingNavbar.css";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import logo from "../../asserts/M_logo1.png";
const LandingNavbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav_left">
          <div className="logo_and_search">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="search_box">
              <span className="search_icon">
                <BiSearchAlt />
              </span>
              <input
                type="text"
                id="search_input"
                className="search_input_box"
                placeholder="Search Product"
              />
            </div>
          </div>
        </div>
        {/* <div className={navMenu ? "nav_left_list menu_on" : "nav_left_list"}>
            <ul className="nav_l_list">
              <li>
                <Link to="/" onClick={() => setNavMenu(false)}>
                  Home
                </Link>
              </li>
              <li onClick={() => setNavMenu(false)}>
                <Link to="/product" className="prod">
                  Product<p> &nbsp; </p>
                  <HiOutlineChevronDown className="arrow" />
                </Link>
              </li>
              <li onClick={() => setNavMenu(false)}>
                <Link to="/">Promo </Link>
              </li>
              <li onClick={() => setNavMenu(false)}>
                <Link to="/">Contact_us</Link>
              </li>
            </ul>
            <ul className="nav_r_list">
              <li onClick={() => setNavMenu(false)}>
                <IoNotificationsOutline className="nav_icon" />
                </li>
              <li onClick={() => setNavMenu(false)}>
                <AiOutlineComment className="nav_icon" />
              </li>
              <li onClick={() => setNavMenu(false)}>
                <BiStore className="nav_icon" />
              </li>
              <li onClick={() => setNavMenu(false)}>
                <IoLocationSharp className="nav_icon" />
              </li>
              <li className="cart_li" onClick={() => setCartShow(true)}>
                <span className="cart_item_count">{cartItems.length}</span>
                <AiOutlineShoppingCart className="nav_icon_cart" />
              </li>
            </ul>
            {cartShow && <Cart show={setCartShow} qty={cartItems.length} />}
          </div>
        </div>
        <div className="nav_right">
          <div className="profile">
            <div className="menu_toggle">
              <IoMenu onClick={() => setNavMenu(!navMenu)} />
            </div>
            <Link to="/profile">
              <img src={user ? user.photoURL : Profile} alt="" />
            </Link>
          </div>*/}
        <div className="nav_right_landingpage">
          <div className="buttons_in_navbar">
            <Link to="/Login">
              <button className="login_btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="signup_btn">SignUp</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingNavbar;
