// some hard-coded values in incognitee worker
// update manually if necessary
export const INCOGNITEE_TX_FEE = 0.01; // TEER or PAS, decimals are respected
export const INCOGNITEE_GTN_GUESS_FEE = 0.1; // TEER or PAS, decimals are respected

export const INCOGNITEE_UNSHIELDING_FEE = 3 * INCOGNITEE_TX_FEE; // TEER or PAS, decimals are respected
export const INCOGNITEE_SHIELDING_FEE_FRACTION = 0.00175; // 0.175% of the shielding amount

export const INCOGNITEE_SESSION_PROXY_DEPOSIT = 0.1; // TEER or PAS, decimals are respected

export const minUnshieldingAmount = (token: string): number => {
  if (token === "TEER") {
    return 1.1;
  } else if (token === "DOT") {
    return 0.1;
  } else {
    return 0.1;
  }
};
