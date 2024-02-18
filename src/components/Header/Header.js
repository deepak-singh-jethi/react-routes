import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.totalItems);
  return (
    <header>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
        <li>
          <NavLink to="/social">Social</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            cart <span id="cart_data">{cartItems}</span>
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
