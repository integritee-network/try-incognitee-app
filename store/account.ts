import { defineStore } from "pinia";
import { formatBalance } from "@polkadot/util";
import type { AddressOrPair } from "@polkadot/api-base/types";
import { asString } from "@encointer/util";
import type { InjectedExtension } from "@polkadot/extension-inject/types";

formatBalance.setDefaults({
  decimals: 10,
  unit: "",
});
export const useAccount = defineStore("account", {
  state: () => ({
    account: <AddressOrPair | null>null,
    injector: <InjectedExtension | null>null,
    paseoBalance: 0,
    incogniteeBalance: 0,
    incogniteeNonce: 0,
  }),
  getters: {
    getShortAddress({ account }): string {
      return account
        ? asString(account as AddressOrPair).slice(0, 8) + "..."
        : "none";
    },
    getAddress({ account }): string {
      return account ? asString(account as AddressOrPair) : "none";
    },
    hasInjector({ injector }): boolean {
      return injector != null;
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
    setInjector(injector: InjectedExtension) {
      this.injector = injector;
    },
    setPaseoBalance(balance: number) {
      this.paseoBalance = balance;
    },
    setIncogniteeBalance(balance: number) {
      this.incogniteeBalance = balance;
    },
    setIncogniteeNonce(nonce: number) {
      this.incogniteeNonce = nonce;
    },
  },
});
