import React, { useContext } from "react";
import {
  FaList,
  FaHome,
  FaVideo,
  FaHeart,
  FaMagic,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import image from "../images/Viewers/viewers-pixar.png";
import Cart from "../Cart/Cart";
import "./Navbar.css";
import cartCtx from "../CartCtx";

function Nav(props) {
  const cartCTX = useContext(cartCtx);
  return (
    <nav className="main-nav">
      <img src={image} />
      {/* <ul className="nav-ul">
        <li>
          <a
            onClick={() => {
              window.scrollTo(0, window.scrollY - 50);
            }}
          >
            <FaHome className="icon" />
            Home
          </a>
        </li>
        <li>
          <a>
            <FaVideo className="icon" />
            Watch List
          </a>
        </li>
        <li>
          <a onClick={props.showCartHandlerNav}>
            <FaHeart className="icon" />
            Favorite
          </a>
        </li>
        <li>
          <a>
            <FaMagic className="icon" />
            Best Movies
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              window.scrollTo(0, window.scrollY + 760);
              setTimeout(() => {
                document.querySelector(".input-search").focus();
              }, 200);
            }}
          >
            <FaSearch className="icon" />
            Search
          </a>
        </li>
      </ul> */}
      <span className="total-mov">{cartCTX.fav.length}</span>
      {/* <FaBars
        className="bars"
        onClick={() => {
          document.querySelector(".nav-ul").classList.toggle("show-nav");
        }}
      /> */}
      <FaHeart className="react-icon" onClick={props.showCart} />
      {cartCTX.showCart && (
        <Cart
          onDeleteFromCart={props.onDeleteFromCart}
          onCloseCart={props.onCloseCart}
        />
      )}
    </nav>
  );
}

export default Nav;
