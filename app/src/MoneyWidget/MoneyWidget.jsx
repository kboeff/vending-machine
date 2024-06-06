import React from "react";
import Coin from "./Coin";
import { useDenominations } from "../../utils/useDenominations";

const MoneyWidget = ({ balance, handleAddCoin, setReset }) => {
  const {coins, formatCoin, formatBalance} = useDenominations();

  const handleCoinClick = (value) => {
    handleAddCoin(balance + value)
  }

  const handleReset = () => {
    setReset(true)
  }

  return (
    <div className="flex gap-8 items-center my-8 h-36">
      <div className="flex gap-8 bg-blue-100 rounded p-4 w-fit h-full items-center">
        <div className="font-bold text-2xl">Balance: {formatBalance(balance)}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="my-8 bg-gray-100 rounded p-4 w-fit">
        <div className="text-2xl">Insert coins:</div>
        <div className="flex">
        {coins.map((coin, index) => (
          <Coin
            key={`${coin} ${index}`}
            value={coin}
            text={formatCoin(coin)}
            handleCoinClick={handleCoinClick} 
          />
        ))}
      </div>
      </div>
    </div>
  )
}

export default MoneyWidget;