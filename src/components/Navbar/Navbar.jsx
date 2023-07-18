import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineChevronDown } from "react-icons/hi";
import Tooltip from "@mui/material/Tooltip";
import {
  IoNotificationsOutline,
  IoLocationSharp,
  IoMenu,
} from "react-icons/io5";
import { AiOutlineComment, AiOutlineShoppingCart } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import logo from "../../asserts/M_logo1.png";
import Profile from "../../asserts/profile.webp";
import Cart from "../Cart/Cart";
import { useStates } from "../../States";
import "../../components/SearchDate/SearchData.css";
const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const {
    cartShow,
    setCartShow,
    cartItems,
    user,
    searchValue,
    setSearchValue,
    GotoStores,
    arrayToFilter,
    setDetail,
    setReviews,
  } = useStates();
  const navigate = useNavigate();
  const gotoFeedback = () => {
    navigate("/feedback");
  };
  return (
    <>
      <div className="nav">
        <div className="nav_left">
          <div className="logo_and_search">
            <div className="logo">
              <Link to={`/home/${localStorage.getItem("auth")}`}>
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
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          <div className={navMenu ? "nav_left_list menu_on" : "nav_left_list"}>
            <ul className="nav_l_list">
              <li>
                <Link
                  to={`/home/${localStorage.getItem("auth")}`}
                  onClick={() => setNavMenu(false)}
                >
                  Home
                </Link>
              </li>
              <li onClick={() => setNavMenu(false)}>
                <Link to="/product" className="prod">
                  Product<p> &nbsp; </p>
                  <HiOutlineChevronDown className="arrow" />
                </Link>
              </li>
              {/* <li onClick={() => setNavMenu(false)}>
                <Link to="/">Promo </Link>
              </li> */}
              <li onClick={() => setNavMenu(false)}>
                <Link to="/aboutus">Services</Link>
              </li>
              <li
                onClick={() => {
                  setNavMenu(false);
                  gotoFeedback();
                }}
              >
                Feed back
              </li>
            </ul>
            <ul className="nav_r_list">
              <li onClick={() => setNavMenu(false)}>
                <IoNotificationsOutline className="nav_icon" />
              </li>
              <li onClick={() => setNavMenu(false)}>
                <AiOutlineComment className="nav_icon" />
              </li>
              <li>
                <BiStore
                  onClick={GotoStores}
                  cursor={"pointer"}
                  z={10000}
                  className="nav_icon"
                />
              </li>
              <li onClick={() => setNavMenu(false)}>
                <IoLocationSharp className="nav_icon" />
              </li>
              <Tooltip title="Cart" arrow>
                <li className="cart_li" onClick={() => setCartShow(true)}>
                  <span className="cart_item_count">{cartItems.length}</span>
                  <AiOutlineShoppingCart className="nav_icon_cart" />
                </li>
              </Tooltip>
              {/* <li><FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label="MUI switch"
      /></li> */}
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
              <Tooltip title="Profile" arrow>
                <img src={user ? user.photoURL : Profile} alt="" />
              </Tooltip>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
