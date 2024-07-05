import { useState } from "react";
import "./App.css";
import ProductsList from "./features/products/ProductList";
import SecondPage from "./Pages/SecondPage";

function App() {
  return (
    <>
      <div>
        <ProductsList />
      </div>
    </>
  );
}

export default App;
