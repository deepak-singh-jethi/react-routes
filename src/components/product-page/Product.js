import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../Data/productData";
import { useDispatch } from "react-redux";
import cartActions from "../../store/cartSlice";

function Product() {
  const dispatch = useDispatch();

  const { productId } = useParams();
  const product = PRODUCTS.find((product) => product.id === +productId);

  function handleAddToCart() {
    dispatch(cartActions.addItem(product));
  }

  return (
    <div
      style={{
        margin: "40px",
      }}>
      <h1>{product.name}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ maxWidth: "300px", maxHeight: "300px" }}
        />
        <div
          style={{ flexGrow: 1, marginLeft: "20px" }}
          className="product_para">
          <p>
            <strong>Name:</strong> {product.name}
          </p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Availability:</strong>{" "}
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>
          <p>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="addCartbtn">
              Add to cart
            </button>
          </p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero
        sed nunc tincidunt fringilla.
      </p>
    </div>
  );
}

export default Product;
