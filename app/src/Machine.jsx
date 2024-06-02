import React from "react";
import ProductCard from "./ProductCard";

const Machine = ({ products }) => {
  return (
    <div className="grid grid-flow-row gap-4 min-w-[32rem] xl:grid-cols-4 md:grid-cols-3 grid-cols-2 border-2 rounded m-2 p-4 bg-gray-100">
      {products.map((product, index) => <ProductCard product={product} key={product?.name + index}/>)}
    </div>
  )
}

export default Machine;