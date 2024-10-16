import { defineStore } from "pinia";
import type { AddressOrPair } from "@polkadot/api-base/types";
import { asString } from "@encointer/util";
import type { InjectedExtension } from "@polkadot/extension-inject/types";

export const useAccount = defineStore("account", {
  state: () => ({
    // if we have an external signer, this is an address only. otherwise it should be a pair
    account: <AddressOrPair | null>null,
    // optional signer extension
    injector: <InjectedExtension | null>null,
    // balance on L1 shielding target
    shieldingTargetBalance: BigInt(0),
    // balance on L2 in same token as shielding target
    incogniteeBalance: BigInt(0),
    // nonce on L2
    incogniteeNonce: Number(0),
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
  },
  actions: {
    setAccount(account: AddressOrPair) {
      this.account = account;
    },
    setInjector(injector: InjectedExtension) {
      this.injector = injector;
    },
    setShieldingTargetBalance(balance: number) {
      this.shieldingTargetBalance = balance;
    },
    setIncogniteeBalance(balance: number) {
      this.incogniteeBalance = balance;
    },
    setIncogniteeNonce(nonce: number) {
      this.incogniteeNonce = nonce;
    },
  },
});
