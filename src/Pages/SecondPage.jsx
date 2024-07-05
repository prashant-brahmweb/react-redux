import React from "react";
import { useSelector } from "react-redux";
import {
  product,
  productStatus,
  productError,
} from "../features/products/productSlice";
import { Link } from "react-router-dom";

function SecondPage() {
  const products = useSelector(product);
  const status = useSelector(productStatus);
  const error = useSelector(productError);
  return (
    <div>
      <h1>Page 2 Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
        <Link to="/">
          <button>Go to first Page</button>{" "}
        </Link>
      </ul>
    </div>
  );
}

export default SecondPage;
