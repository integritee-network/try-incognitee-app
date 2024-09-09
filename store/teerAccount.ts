import { defineStore } from "pinia";
import { formatBalance } from "@polkadot/util";

export const useAccount = defineStore("teerAccount", {
  state: () => ({
    address: <string | null>null,
    free: BigInt(0),
    reserved: BigInt(0),
    frozen: BigInt(0),
  }),
  getters: {
    getShortAddress({ address }): string {
      return address ? address.slice(0, 8) + "..." : "none";
    },
    getAddress({ address }): string {
      return address ? address : "none";
    },
    getHumanFree({ free }): string {
      return formatBalance(free, { decimals: 12, withUnit: "" }, 12);
    },
    getHumanReserved({ reserved }): string {
      return formatBalance(reserved, { decimals: 12, withUnit: "" }, 12);
    },
    getHumanFrozen({ frozen }): string {
      return formatBalance(frozen, { decimals: 12, withUnit: "" }, 12);
    },
    getHumanTransferrable({ free, frozen }): number {
      return formatBalance(free - frozen, { decimals: 12, withUnit: "" }, 12);
    },
    getTransferrable({ free, frozen }): number {
      return free - frozen;
    },
  },
  actions: {
    setAddress(address: string) {
      this.address = address;
    },
  },
});
