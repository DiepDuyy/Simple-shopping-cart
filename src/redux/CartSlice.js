import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Iphone 6",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "Iphone 11",
      price: 350,
      quantity: 1,
    },
    {
      id: 3,
      name: "Iphone X",
      price: 200,
      quantity: 1,
    },
    {
      id: 4,
      name: "Iphone 12",
      price: 500,
      quantity: 1,
    },
  ],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const inCart = state.cart.find((x) =>
        x.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...action.payload, qty: 1 }],
      };
    },
    removeItemFromCart(state, action) {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    },
    upQuantity(state, action) {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty + 1 }
            : item
        ),
      };
    },
    downQuantity(state, action) {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty - 1 }
            : item
        ),
      };
    },
    
  },
});

const { actions, reducer } = cartSlice;
export const { addToCart, removeItemFromCart, upQuantity, downQuantity } =
  actions;
export default reducer;
