import React from "react";
import { useDenominations } from "../utils/useDenominations";

const Purchase = ({ selectedProduct, change }) => {
  const { formatBalance } = useDenominations();

  return (
    <div>
      {selectedProduct && <div>
        <div>Success, you can take your product now.</div>
        <img className="m-4 h-24 justify-self-center" src={selectedProduct.imagePath || "./placeholder.svg"} />
        <div>{selectedProduct.name}</div>
      </div>}
      {!!change && (<div>{`Your change is ${formatBalance(change)}`}</div>)}
    </div>
  )
}

export default Purchase;