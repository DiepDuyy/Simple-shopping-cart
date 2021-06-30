import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  downQuantity,
  removeItemFromCart,
  upQuantity,
} from "../redux/CartSlice";

const Result = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  //   console.log("cart", cart);

  const getTotal = (state) => {
    const total = state.reduce(
      (result, item) => item.qty * item.price + result,
      0
    );
    console.log(total);
    return total;
  };

  const handleRemoveItem = (item) => {
    const action = removeItemFromCart(item);
    dispatch(action);
  };

  const handleUp = (item) => {
    const action = upQuantity(item);
    dispatch(action);
  };

  const handleDown = (item) => {
    const action = downQuantity(item);
    dispatch(action);
  };

  return (
    <div className="wrapper cart">
      <div className="cart-heading">
        <h2 className="title-section">Cart</h2>
        <h2>
          Total: <span>{getTotal(cart)}</span>
        </h2>
      </div>
      {cart.map((item) => (
        <div key={item.name} className="item">
          <p className="info id">ID: {item.id}</p>
          <p className="info name">Name: {item.name}</p>
          <p className="info price">
            Price:{" "}
            <span className="price-style">{item.price * item.qty} $</span>
          </p>
          <div className="price-section">
            <button onClick={() => handleDown(item)} className="btn-qty qty-up">
              -
            </button>
            <p className="info qantity">
              Quantity: <span className="quantity-style">{item.qty}</span>
            </p>
            <button onClick={() => handleUp(item)} className="btn-qty qty-down">
              +
            </button>
          </div>
          <button className="btn-remove" onClick={() => handleRemoveItem(item)}>
            ✖
          </button>
        </div>
      ))}
    </div>
  );
};

export default Result;
