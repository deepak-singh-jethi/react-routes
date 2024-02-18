import React from "react";
import { useSelector } from "react-redux";
import cartActions from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cartItems, totalPrice, totalItems } = cart;

  const handleAddItemToCart = (item) => {
    dispatch(cartActions.addItem(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(cartActions.removeItem(item));
  };
  const removeItemCompletelyFromCart = (item) => {
    dispatch(cartActions.remmovePerticularItem(item));
  };

  if (cartItems.length < 1) {
    return (
      <div className="cart_items">
        <h1>Cart is empty</h1>
        <p>Please add some items to your cart</p>
        <Link to="..">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="cart_items">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{`${(item.quantity * item.price).toFixed(2)}`}</td>
                <td>
                  <button onClick={() => handleAddItemToCart(item)}>+</button>
                  <button onClick={() => removeItemFromCart(item)}>-</button>
                </td>
                <td>
                  <button
                    onClick={() => removeItemCompletelyFromCart(item)}
                    className="removeItem">
                    Remove item form cart
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2>Total Cart Value: {totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;
