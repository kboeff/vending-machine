import React, { useState, useEffect } from "react";
import "./index.css";
import Machine from "./Machine";
import MoneyWidget from "./MoneyWidget/MoneyWidget";
import Modal from "./Modal";
import Purchase from "./Purchase";

export default () => {
  const [products, setProducts] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [change, setChange] = useState(0);
  const [balance, setBalanace] = useState(0);
 
  const handleProductSelect = (product, index) => {
    const currentProduct = products[index];
    if (balance >= product.price && products[index]) {
      setSelectedProduct(product);
      setChange(balance - product.price);
    }
  }

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setChange(0);
    setBalanace(0);
    setOpenModal(false)
  }

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

  useEffect(() => {
    if (selectedProduct || change) {
      setOpenModal(true)
    }
  }, [selectedProduct, change])

  return (
  <div className="caret-transparent">
    <nav className="p-4">
      <h1 className="text-3xl font-bold">
        Welcome, have a snack.
      </h1>
      <MoneyWidget balance={balance} handleAddCoin={setBalanace} />  
    </nav>
    <Machine products={products} onProductSelect={handleProductSelect} />
    <Modal open={openModal} onClose={handleCloseModal}>
      <Purchase selectedProduct={selectedProduct} change={change} />
    </Modal>
  </div>
);
}
