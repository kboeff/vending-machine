import React from "react";

const Coin = ({ value, text, handleCoinClick }) => {
  return (
    <div 
      className="border-2 border-zinc-300 rounded-full min-h-16 min-w-16 flex items-center justify-center m-2 bg-zinc-100 hover:bg-zinc-300 hover:border-orange-500 cursor-pointer"
      onClick={() => handleCoinClick(value)}
    >
      {text}
    </div>
  )
}

export default Coin;