import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";
import { product, productStatus, productError } from "./productSlice";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(product);
  const status = useSelector(productStatus);
  const error = useSelector(productError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  let content;

  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    content = (
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
        <Link to="/second-page">
          <button>Go to Second Page</button>{" "}
        </Link>
      </ul>
    );
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h2>Products</h2>
      {content}
    </section>
  );
};

export default ProductsList;
