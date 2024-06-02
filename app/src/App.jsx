import React, { useState, useEffect } from "react";
import "./index.css";
import Machine from "./Machine";

export default () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:1234", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('products', data)
        setProducts(data)
      })
      .catch((error) => console.log(error));
  }, [])

  return (
  <div>
    <nav className="p-4">
      <h1 className="text-3xl font-bold">
        Welcome, have a snack.
      </h1>
      <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-8 rounded">Load products</button>
        {/* <MoneyWidget />   */}
      </div>
    </nav>
    <Machine products={products} />
  </div>
);
}
