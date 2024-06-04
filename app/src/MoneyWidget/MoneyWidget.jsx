import React, { useState } from "react";
import Coin from "./Coin";
import { useDenominations } from "../../utils/useDenominations";

const MoneyWidget = ({ balance, handleAddCoin }) => {
  const {coins, formatCoin, formatBalance} = useDenominations();

  const handleCoinClick = (value) => {
    handleAddCoin(balance + value)
  }

  const handleReset = () => {
    handleAddCoin(0)
  }

  return (
    <div className="flex gap-8 items-center my-8 h-36">
      <div className="flex gap-8 bg-blue-100 rounded p-4 w-fit h-full items-center">
        <div className="font-bold text-2xl">Balance: {formatBalance(balance)}</div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleReset}>Reset</button>
      </div>
      <div className="my-8 bg-gray-100 rounded p-4 w-fit">
        <div className="text-2xl">Insert coins:</div>
        <div className="flex">
        {coins.map(coin => <Coin value={coin} text={formatCoin(coin)} handleCoinClick={handleCoinClick} />)}
      </div>
      </div>
    </div>
  )
}

export default MoneyWidget;