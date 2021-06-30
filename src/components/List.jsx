import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const List = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const handleAddToCart = (item) => {
    const action = addToCart(item);
    dispatch(action);
  };

  return (
    <div className="wrapper lists">
      <h2 className="title-section">Lists</h2>
      {products.map((item) => (
        <div key={item.id} className="item">
          <p className="info id">ID: {item.id}</p>
          <p className="info name">Name: {item.name}</p>
          <p className="info price">
            Price: <span className="price-style">{item.price} $</span>
          </p>
          <button onClick={() => handleAddToCart(item)} className="btn-add">
            ADD
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
