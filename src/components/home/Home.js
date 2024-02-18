import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../Data/productData.js";
import { useDispatch } from "react-redux";
import cartActions from "../../store/cartSlice.js";

function Home() {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(cartActions.addItem(product));
  };

  return (
    <div className="main_container">
      <div id="product-head">
        <h1>Enjoy shopping</h1>
      </div>

      <div className="product-conatiner">
        {PRODUCTS.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                <button
                  onClick={() => addToCart(product)}
                  className={`${
                    product.inStock ? "addCartbtn" : "outOfStockBtn"
                  }`}
                  disabled={!product.inStock}>
                  Add to cart
                </button>
              </p>
              {!product.inStock && <span>Out of stock</span>}
              <p>
                <Link to={`/product/${product.id}`}>Get details</Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
