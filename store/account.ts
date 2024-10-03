import { defineStore } from "pinia";
import { formatBalance } from "@polkadot/util";
import type {AddressOrPair} from "@polkadot/api-base/types";
import { asString, isKeyringPair } from "@encointer/util"

formatBalance.setDefaults({
  decimals: 10,
  unit: "",
});
export const useAccount = defineStore("account", {
  state: () => ({
    account: <AddressOrPair | null>null,
    paseoBalance: 0,
    incogniteeBalance: 0,
  }),
  getters: {
    getShortAddress({ account }): string {
      return account ? asString(account as AddressOrPair).slice(0, 8) + "..." : "none";
    },
    getAddress({ account }): string {
      return account ? asString(account as AddressOrPair) : "none";
    },
    isInjected({ account }): boolean {
      return account ? isKeyringPair(account as AddressOrPair) : false;
    },
    getIncogniteeHumanBalance({ incogniteeBalance }): number {
      return formatBalance(incogniteeBalance);
    },
    getPaseoHumanBalance({ paseoBalance }): number {
      return formatBalance(paseoBalance);
    },
  },
  actions: {
    setAccount(account: AddressOrPair) {
      this.account = account;
    },
    setIncogniteeBalance(balance: number) {
      this.incogniteeBalance = balance;
    },
  },
});
