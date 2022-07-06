import React, { useContext } from "react";
import cartCtx from "../CartCtx";
import CartItem from "./CartItem";
import { FaWindowClose } from "react-icons/fa";
import "./cart.css";
export default function Cart(props) {
  const cartCTX = useContext(cartCtx);
  const favMov = cartCTX.fav.map((item) => {
    return (
      <CartItem
        id={item.id}
        img={item.image}
        title={item.title}
        date={item.date}
        rating={item.rating}
        key={item.id}
        onDeleteFromCart={props.onDeleteFromCart}
      />
    );
  });
  return (
    <div className="favorite-container">
      {favMov}
      {cartCTX.fav.length == 0 && <p className="cart-no-mov">No Favorite Movies Yet</p>}
      <FaWindowClose className="cart-close-icon" onClick={props.onCloseCart}/>
    </div>
  );
}
