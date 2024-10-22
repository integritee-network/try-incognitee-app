import { defineStore } from "pinia";
import type { AddressOrPair } from "@polkadot/api-base/types";
import { asString } from "@encointer/util";
import type { InjectedExtension } from "@polkadot/extension-inject/types";
import { ChainId } from "~/configs/chains";
import { encodeAddress } from "@polkadot/util-crypto";

export const useAccount = defineStore("account", {
  state: () => ({
    // if we have an external signer, this is an address only. otherwise it should be a pair
    account: <AddressOrPair | null>null,
    // optional signer extension
    injector: <InjectedExtension | null>null,
    // balance per chain
    balance: <Record<ChainId, BigInt>>{},
    // nonce per chain
    nonce: <Record<ChainId, number>>{},
    // decimals (we assume it's the same for all used chains as it's the token we're shielding
    decimals: <number>0,
    // native token symbol (we assume it's the same for all used chains as it's the token we're shielding
    symbol: <string>"UNIT",
    // ss58 format (we assume it's the same for all used chains
    ss58Format: <number>42,
    // existential deposit per chain
    existentialDeposit: <Record<ChainId, BigInt>>{},
  }),
  getters: {
    getShortAddress({ account }): string {
      if (!account) return "none";
      const address = asString(account as AddressOrPair);
      return encodeAddress(address, this.ss58Format).slice(0, 8) + "...";
    },
    getAddress({ account }): string {
      if (!account) return "none";
      const address = asString(account as AddressOrPair);
      return encodeAddress(address, this.ss58Format);
    },
    getSymbol({ symbol }): string {
      return symbol;
    },
    hasInjector({ injector }): boolean {
      return injector != null;
    },
    formatBalance({ balance, decimals }) {
      return (chain: ChainId): string => {
        if (!balance[chain]) return "0.000";
        const balanceValue: number = divideBigIntToFloat(
          balance[chain],
          10 ** decimals,
        );
        return balanceValue.toLocaleString("de-CH", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 3,
          thousandsSeparator: "'",
        });
      };
    },
    getDecimalBalance({ balance, decimals }) {
      return (chain: ChainId): number => {
        if (!balance[chain]) return 0;
        return divideBigIntToFloat(balance[chain], 10 ** decimals);
      };
    },
    getDecimalExistentialDeposit({ existentialDeposit, decimals }) {
      return (chain: ChainId): number => {
        if (!existentialDeposit[chain]) return 0;
        return divideBigIntToFloat(existentialDeposit[chain], 10 ** decimals);
      };
    },
  },
  actions: {
    setAccount(account: AddressOrPair) {
      this.account = account;
    },
    setInjector(injector: InjectedExtension) {
      this.injector = injector;
    },
    setBalance(balance: BigInt, chain: ChainId) {
      this.balance[chain] = balance;
    },
    setNonce(nonce: number, chain: ChainId) {
      //console.debug(`Setting nonce for chain ${chain} to ${nonce}`);
      this.nonce[chain] = nonce;
    },
    setDecimals(decimals: number) {
      this.decimals = decimals;
    },
    setSymbol(symbol: string) {
      console.debug(`Setting symbol to ${symbol}`);
      this.symbol = symbol;
    },
    setSS58Format(ss58Format: number) {
      this.ss58Format = ss58Format;
    },
    setExistentialDeposit(existentialDeposit: BigInt, chain: ChainId) {
      this.existentialDeposit[chain] = existentialDeposit;
    },
    decimalAmountToBigInt(amount: number): BigInt {
      return BigInt(Math.round(amount * 10 ** this.decimals));
    },
  },
});

const divideBigIntToFloat = (dividend: BigInt, divisor: number): number => {
  const integerPart = Number(dividend / BigInt(divisor));
  const fractionalPart = Number(dividend % BigInt(divisor)) / divisor;
  return integerPart + fractionalPart;
};
