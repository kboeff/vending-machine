import React from "react";

const ProductCard = ({ product }) => {
  const { name, count, price, imagePath } = product;

  return (
    <div className="caret-transparent max-w-sm rounded overflow-hidden shadow-lg min-w-56 sm:min-w-24 flex flex-col items-center border-2 border-transparent hover:border-orange-600 [&_.price-tag]:hover:text-orange-600 cursor-pointer">
      <img className="m-4 h-24 justify-self-center" src={imagePath || "./placeholder.svg"} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="text-xl mb-2">Available: <span className="font-bold">{count}</span></div>
        <div className="text-xl mb-2">Price: <span className="font-bold price-tag">{price.toFixed(2)} lv.</span></div>
      </div>
    </div>
  )
}

export default ProductCard;