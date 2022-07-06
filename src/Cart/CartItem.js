import React from "react";
import "./CartItem.css";
import { FaEdit } from "react-icons/fa";
import DeleteIcon from "./download-removebg-preview.png";
export default function CartItem(props) {
  return (
    <div className="cart-item">
      <div className="cart-item__det">
        <span>{props.title}</span>
        <span>Rating : {props.rating}</span>
        <FaEdit
          className="cart-item__icon"
          onClick={() => {
            props.onDeleteFromCart({
              id: props.id,
            });
          }}
        />
      </div>
      <img src={props.img} />
    </div>
  );
}
