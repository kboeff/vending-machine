import React, { useState, useEffect } from "react";
import "./index.css";
import Machine from "./Machine";
import MoneyWidget from "./MoneyWidget/MoneyWidget";
import Modal from "./Modal";
import Purchase from "./Purchase";

const updateProductList = (list, product, index) => {
  const updated = [...list];
  updated[index] = product.count ? product : null;
  return updated;
}

export default () => {
  const [products, setProducts] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [change, setChange] = useState(0);
  const [balance, setBalanace] = useState(0);
  const [reset, setReset] = useState(false)

  const [noProductsFound, setNoProductsFound] = useState(false);
 
  const handleProductSelect = (product, index) => {
    const currentProduct = products[index];
    if (balance >= product.price && products[index]) {
      setSelectedProduct(product)
      setChange(balance - product.price)
      const updatedProducts = updateProductList(products, { ...currentProduct, count: currentProduct.count - 1 }, index)
      setProducts(updatedProducts)
    }
  }

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setChange(0);
    setBalanace(0);
    setOpenModal(false)
    setReset(false)
  }

  useEffect(() => {
    fetch("http://localhost:1234", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.log(error)
        setNoProductsFound(true)
      });
  }, [])

  useEffect(() => {
    if (selectedProduct || change || (reset && !!balance)) {
      setOpenModal(true)
    }
  }, [selectedProduct, change, reset, balance])

  return (
  <div className="caret-transparent">
    <nav className="p-4">
      <h1 className="text-3xl font-bold">
        Welcome, have a snack.
      </h1>
      <MoneyWidget balance={balance} handleAddCoin={setBalanace} setReset={setReset} />  
    </nav>
    {noProductsFound ? (<div>No products found (API error).</div>) : (<Machine products={products} onProductSelect={handleProductSelect} />)}
    <Modal open={openModal} onClose={handleCloseModal}>
      <Purchase selectedProduct={selectedProduct} change={change} reset={reset} />
    </Modal>
  </div>
);
}
