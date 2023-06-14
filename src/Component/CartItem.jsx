import React from "react";
import "../Style/cartItem.css";
import { decreseItem, increseItem, removeData } from "../Redux-ToolKit/cart";
import { useDispatch } from "react-redux";
const CartItem = ({ item }) => {
  const { category, description, id, image, price, rating, title, qty } = item;
  const dispatch = useDispatch();
  const inc = () => {
    dispatch(increseItem(id));
  };

  const dec = () => {
    if (qty > 1) {
      dispatch(decreseItem(id));
    }
  };

  const removeitem = (id) => {
    dispatch(removeData(id));
  };

  return (
    <div className="cartItemContainer">
      <div className="cartItemLeft">
        <img src={image} alt="" />
      </div>
      <div className="cartItemRight">
        <h5>{title}</h5>
        <p>Price:-{price.toFixed() * 75} ₹</p>
        <p>Rating:-{rating.rate}</p>
        <div className="buttonDiv">
          <button className="btn btn-primary" onClick={dec}>
            -
          </button>
          <span>{qty}</span>
          <button className="btn btn-primary" onClick={inc}>
            +
          </button>
          <button className="btn btn-danger" onClick={() => removeitem(id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
