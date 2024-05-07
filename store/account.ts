import { defineStore } from "pinia";
import type { KeyringPair } from "@polkadot/keyring/types";
import { formatBalance } from "@polkadot/util";

formatBalance.setDefaults({
  decimals: 10,
  unit: "PAS",
});
export const useAccount = defineStore("account", {
  state: () => ({
    account: <KeyringPair | null>null,
    paseoBalance: 0,
    incogniteeBalance: 0,
  }),
  getters: {
    getShortAddress({ account }): string {
      return account ? account.address.slice(0, 8) + "..." : "none";
    },
    getAddress({ account }): string {
      return account ? account.address : "none";
    },
    getIncogniteeHumanBalance({ incogniteeBalance }): number {
      return formatBalance(incogniteeBalance);
    },
    getPaseoHumanBalance({ paseoBalance }): number {
      return formatBalance(paseoBalance);
    },
  },
  actions: {
    setAccount(account: KeyringPair) {
      this.account = account;
    },
    setIncogniteeBalance(balance: number) {
      this.incogniteeBalance = balance;
    },
  },
});
