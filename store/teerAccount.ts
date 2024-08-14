import { defineStore } from "pinia";
import { formatBalance } from "@polkadot/util";

export const useAccount = defineStore("teerAccount", {
  state: () => ({
    address: <string | null>null,
    free: 0,
    reserved: 0,
    frozen: 0,
  }),
  getters: {
    getShortAddress({ address }): string {
      return address ? address.slice(0, 8) + "..." : "none";
    },
    getAddress({ address }): string {
      return address ? address : "none"
    },
    getHumanFree({ free }): number {
      return formatBalance(free, { decimals: 12, withUnit: ''}, 12);
    },
    getHumanReserved({ reserved }): number {
      return formatBalance(reserved,{ decimals: 12, withUnit: ''}, 12);
    },
    getHumanFrozen({ frozen }): number {
      return formatBalance(frozen, { decimals: 12, withUnit: ''}, 12);
    },
  },
  actions: {
    setAddress(address: string) {
      this.address = address;
    },
  },
});
