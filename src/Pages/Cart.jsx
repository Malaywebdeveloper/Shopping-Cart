import React from "react";
import { useSelector } from "react-redux";
import "../Style/cart.css";
import CartItem from "../Component/CartItem";
import Checkout from "../Component/Checkout";

const Cart = () => {
  const cartData = useSelector((state) => {
    // console.log(state);
    return state.cart.storage;
  });

  console.log("cartData", cartData);
  return (
    <>
      <div className="CartContainer">
        <div className="leftPart">
          {cartData.map((item) => {
            return (
              <div key={item.id}>
                <CartItem item={item} />
              </div>
            );
          })}
        </div>
        <div className="rightPart">
          <Checkout cartData={cartData} />
        </div>
      </div>
    </>
  );
};

export default Cart;
