import React from "react";
import { useDenominations } from "../../utils/useDenominations";
import Coin from "./MoneyWidget/Coin";

const Purchase = ({ selectedProduct, change, reset }) => {
  const { coins, formatBalance } = useDenominations();

  const formatChange = (change) => {
    let result = [];
    let changeLeft = change;
    const sorted = [...coins].sort().reverse();
    
    for(let coin of sorted) {
      if(changeLeft / coin >= 1) {
        const count = Math.floor(changeLeft / coin);
        changeLeft = Math.round((changeLeft - count * coin) * 100) / 100;
        result.push({ value: coin, count });
      }
    }

    return result;
  }

  return (
    <div>
      {selectedProduct && (
        <div className="flex flex-col items-center">
          <div className="font-bold">✅ Success, you can take your product now.</div>
          <img className="m-4 h-24 justify-self-center" src={selectedProduct.imagePath || "./placeholder.svg"} />
          <div className="text-center">{selectedProduct.name}</div>
        </div>
      )}
      {selectedProduct && !!change && (
        <div className="h-2 border-b-2 border-teal-100"></div>
      )}
      {!!change && (
        <div className="my-4 text-center">
          <div className="font-bold italic">{`Your change is ${formatBalance(change)}`}</div>
          <div className="flex gap-8">{formatChange(change).map(coin => (
            <div className="flex  items-baseline" key={coin.value}>
              <div>{coin.count} x </div>
              <Coin text={coin.value} />
            </div>
          ))}</div>
        </div>
      )}
      {reset && (
        <div className="p-16">No product was selected. Please take your money back.</div>
      )}
    </div>
  )
}

export default Purchase;