// some hard-coded values in incognitee worker
// update manually if necessary
export const INCOGNITEE_TX_FEE = 0.01; // TEER or PAS, decimals are respected
export const INCOGNITEE_GTN_GUESS_FEE = 0.1; // TEER or PAS, decimals are respected

export const INCOGNITEE_UNSHIELDING_FEE = 3 * INCOGNITEE_TX_FEE; // TEER or PAS, decimals are respected
export const INCOGNITEE_SHIELDING_FEE_FRACTION = 0.00175; // 0.175% of the shielding amount

export const INCOGNITEE_SESSION_PROXY_DEPOSIT = 0.1; // TEER or PAS, decimals are respected
export const INCOGNITEE_BYTE_FEE = 0.0001; // per byte of message
export const minUnshieldingAmount = (token: string): number => {
  if (token === "TEER") {
    return 1.1;
  } else if (token === "DOT") {
    return 0.1;
  } else if (token === "WETH" || token === "ETH") {
    return 0.0001;
  } else if (token === "WBTC.e") {
    return 0.000001;
  } else if (token === "PEPE.e") {
    return 10000;
  } else {
    return 0.1;
  }
};
export const minShieldingAmount = (token: string): number => {
  if (token === "TEER") {
    return 0.5;
  } else if (token === "DOT") {
    return 0.1;
  } else if (token === "WETH" || token === "ETH") {
    return 0.0001;
  } else if (token === "WBTC.e") {
    return 0.000001;
  } else if (token === "PEPE.e") {
    return 10000;
  } else {
    return 0.1;
  }
};

export const txFeeBase = (token: string): number => {
  if (token === "WETH" || token === "ETH") {
    return INCOGNITEE_TX_FEE / 2000;
  } else if (token === "WBTC.e") {
    return INCOGNITEE_TX_FEE / 70000;
  } else if (token === "PEPE.e") {
    return INCOGNITEE_TX_FEE * 111000;
  } else {
    return INCOGNITEE_TX_FEE;
  }
};

export const txFeePerByte = (token: string): number => {
  if (token === "WETH" || token === "ETH") {
    return INCOGNITEE_BYTE_FEE / 2000;
  } else if (token === "WBTC.e") {
    return INCOGNITEE_BYTE_FEE / 70000;
  } else if (token === "PEPE.e") {
    return INCOGNITEE_BYTE_FEE * 111000;
  } else {
    return INCOGNITEE_BYTE_FEE;
  }
};

export const txFeeUnshielding = (token: string): number => {
  if (token === "WETH" || token === "ETH") {
    return INCOGNITEE_UNSHIELDING_FEE / 2000;
  } else if (token === "WBTC.e") {
    return INCOGNITEE_UNSHIELDING_FEE / 70000;
  } else if (token === "PEPE.e") {
    return INCOGNITEE_UNSHIELDING_FEE * 111000;
  } else {
    return INCOGNITEE_UNSHIELDING_FEE;
  }
};
