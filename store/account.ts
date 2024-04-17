import { defineStore } from 'pinia'
import type {KeyringPair} from "@polkadot/keyring/types";
export const useAccount = defineStore('account', {
  state: () => ({
    account: <KeyringPair | null>null,
    paseoBalance: 0,
    incogniteeBalance: 0
  }),
  getters: {
    getShortAddress({account}): string {
      return account? account.address.slice(0,8)+'...' : 'none'
    }
  },
  actions: {
    setAccount(account: KeyringPair) {
      this.account = account
    },
  },
})
