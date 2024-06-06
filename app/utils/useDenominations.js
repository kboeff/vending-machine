import { COIN_VALUES, CURRENCY } from "../config/currency";

export const useDenominations = () => {
  const formatCoin = (value) => {
    const {
      separator,
      lowerDenominationsText,
      higherDenominationText,
      symbolPosition,
      multiplier,
    } = CURRENCY;
    const denominationText =
      value < separator ? lowerDenominationsText : higherDenominationText;
    const displayValue = value < separator ? value * multiplier : value;
    return symbolPosition === "left"
      ? `${denominationText} ${displayValue}`
      : `${displayValue} ${denominationText}`;
  };

  const formatBalance = (balance) => {
    const { higherDenominationText, symbolPosition } = CURRENCY;
    return symbolPosition === "left"
      ? `${higherDenominationText} ${balance.toFixed(2)}`
      : `${balance.toFixed(2)} ${higherDenominationText}`;
  };

  return {
    coins: COIN_VALUES,
    formatCoin,
    formatBalance,
  };
};
