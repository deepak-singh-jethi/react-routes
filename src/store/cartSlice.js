import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
};

/* 

 cartItem:{
    id: 1,
    name: "Smartphone",
    price: 499.99,
    category: "Electronics",
    inStock: true,
    image: "https://via.placeholder.com/150",
    quantity: 1,
 }
*/

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemId = action.payload.id;
      const item = state.cartItems.find((item) => item.id === itemId);

      state.totalItems++;
      state.totalPrice += action.payload.price;

      if (item) {
        item.quantity++;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload.id;
      const item = state.cartItems.find((item) => item.id === itemId);

      state.totalItems--;
      state.totalPrice -= action.payload.price;

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      }
    },

    remmovePerticularItem: (state, action) => {
      const itemId = action.payload.id;
      state.totalItems -= action.payload.quantity;
      state.totalPrice -= action.payload.price * action.payload.quantity;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

const cartActions = cartSlice.actions;

export default cartActions;
