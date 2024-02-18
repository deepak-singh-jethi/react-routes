import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Error() {
  return (
    <>
      <Header />
      <div className="main-selected-page">
        <h1>Error 404</h1>
        <h2>Page not found</h2>
        <h3>Please try again</h3>
        <h4>
          Or go to the <Link to="">Home page</Link>
        </h4>
      </div>
    </>
  );
}

export default Error;
