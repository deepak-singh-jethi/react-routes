import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/root/Root.js";

import Cart from "./components/cart/Cart.js";
import Home from "./components/home/Home.js";
import ContactUs from "./components/contact-us/ContactUs.js";
import About from "./components/about-us/About.js";
import Error from "./components/error/Error.js";
import Product from "./components/product-page/Product.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/cart",
          element: <Cart></Cart>,
        },
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/contact",
          element: <ContactUs></ContactUs>,
        },
        {
          path: "/social",
          element: <About></About>,
        },
        {
          path: "/product/:productId",
          element: <Product></Product>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
