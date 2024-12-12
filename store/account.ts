import { defineStore } from "pinia";
import type { AddressOrPair } from "@polkadot/api-base/types";
import { asString } from "@encointer/util";
import type { InjectedExtension } from "@polkadot/extension-inject/types";
import { ChainId } from "@/configs/chains";
import { encodeAddress } from "@polkadot/util-crypto";
import { divideBigIntToFloat, formatDecimalBalance } from "@/helpers/numbers";
import {
  SessionProxyRole,
  sessionProxyRoleOrder,
} from "@/lib/sessionProxyStorage.ts";

export const useAccount = defineStore("account", {
  state: () => ({
    // if we have an external signer, this is an address only. otherwise it should be a pair
    account: <AddressOrPair | null>null,
    // optional signer extension
    injector: <InjectedExtension | null>null,
    // optional session proxy credentials
    sessionProxies: <Record<SessionProxyRole, AddressOrPair>>{},
    // optional session proxy minisecrets
    sessionProxySeeds: <Record<AddressOrPair, Uint8Array>>{},
    // remember if the user has declined creating a proxy
    sessionProxyDeclined: <boolean>false,
    // free balance per chain
    balanceFree: <Record<ChainId, BigInt>>{},
    // reserved balance per chain
    balanceReserved: <Record<ChainId, BigInt>>{},
    // frozen balance per chain
    balanceFrozen: <Record<ChainId, BigInt>>{},
    // nonce per chain
    nonce: <Record<ChainId, number>>{},
    // genesis hash
    genesisHash: <Record<String, number>>{},
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
    getSs58Format({ ss58Format }): number {
      return ss58Format;
    },
    getSymbol({ symbol }): string {
      return symbol;
    },
    getDecimals({ decimals }): number {
      return decimals;
    },
    hasInjector({ injector }): boolean {
      return injector != null;
    },
    hasSessionProxyForRole({
      sessionProxies,
    }): (role: SessionProxyRole) => boolean {
      return (role: SessionProxyRole): boolean => {
        return sessionProxies[role] != null;
      };
    },
    hasDeclinedSessionProxy({ sessionProxyDeclined }): boolean {
      return sessionProxyDeclined;
    },
    /// Returns the weakest session proxy which is authorized for at least the requested role
    sessionProxyForRole({
      sessionProxies,
    }): (role: SessionProxyRole) => AddressOrPair | null {
      return (role: SessionProxyRole): AddressOrPair | null => {
        const startIndex = sessionProxyRoleOrder.indexOf(role);
        if (startIndex === -1) return null;
        for (let i = startIndex; i < sessionProxyRoleOrder.length; i++) {
          const currentRole = sessionProxyRoleOrder[i];
          if (sessionProxies[currentRole]) {
            return sessionProxies[currentRole];
          }
        }
        return null;
      };
    },
    /// Returns the most powerful session proxy
    sessionProxyBest({
      sessionProxies,
    }): () => [AddressOrPair | null, SessionProxyRole | null] {
      return (): [AddressOrPair | null, SessionProxyRole | null] => {
        for (let i = sessionProxyRoleOrder.length - 1; i >= 0; i--) {
          const currentRole = sessionProxyRoleOrder[i];
          if (sessionProxies[currentRole]) {
            return [sessionProxies[currentRole], currentRole];
          }
        }
        return [null, null];
      };
    },
    sessionProxySeed({
      sessionProxySeeds,
    }): (proxy: AddressOrPair) => Uint8Array {
      return (proxy: AddressOrPair): Uint8Array => {
        return sessionProxySeeds[proxy];
      };
    },
    formatBalanceFree({ balanceFree, decimals }) {
      return (chain: ChainId): string => {
        if (!balanceFree[chain]) return "0.000";
        const balanceValue: number = divideBigIntToFloat(
          balanceFree[chain],
          10 ** decimals,
        );
        return formatDecimalBalance(balanceValue);
      };
    },
    formatBalanceReserved({ balanceReserved, decimals }) {
      return (chain: ChainId): string => {
        if (!balanceReserved[chain]) return "0.000";
        const balanceValue: number = divideBigIntToFloat(
          balanceReserved[chain],
          10 ** decimals,
        );
        return formatDecimalBalance(balanceValue);
      };
    },
    formatBalanceFrozen({ balanceFrozen, decimals }) {
      return (chain: ChainId): string => {
        if (!balanceFrozen[chain]) return "0.000";
        const balanceValue: number = divideBigIntToFloat(
          balanceFrozen[chain],
          10 ** decimals,
        );
        return formatDecimalBalance(balanceValue);
      };
    },
    getDecimalBalanceFree({ balanceFree, decimals }) {
      return (chain: ChainId): number => {
        if (!balanceFree[chain]) return 0;
        return divideBigIntToFloat(balanceFree[chain], 10 ** decimals);
      };
    },
    getDecimalBalanceReserved({ balanceReserved, decimals }) {
      return (chain: ChainId): number => {
        if (!balanceReserved[chain]) return 0;
        return divideBigIntToFloat(balanceReserved[chain], 10 ** decimals);
      };
    },
    getDecimalBalanceFrozen({ balanceFrozen, decimals }) {
      return (chain: ChainId): number => {
        if (!balanceFrozen[chain]) return 0;
        return divideBigIntToFloat(balanceFrozen[chain], 10 ** decimals);
      };
    },
    getDecimalBalanceTransferable({ balanceFree, balanceFrozen, decimals }) {
      return (chain: ChainId): number => {
        const frozen = balanceFrozen[chain] ? balanceFrozen[chain] : BigInt(0);
        const free = balanceFree[chain] ? balanceFree[chain] : BigInt(0);
        return divideBigIntToFloat(BigInt(free - frozen), 10 ** decimals);
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
    /// call this when account changes to clear all account-related state
    resetState() {
      this.sessionProxyDeclined = false;
      this.sessionProxies = {};
      this.injector = null;
      this.BalanceFree = {};
      this.BalanceReserved = {};
      this.BalanceFrozen = {};
    },
    setAccount(account: AddressOrPair) {
      this.account = account;
    },
    setInjector(injector: InjectedExtension) {
      this.injector = injector;
    },
    /// sticky decline for adding session proxies
    declineSessionProxy() {
      this.sessionProxyDeclined = true;
    },
    addSessionProxy(
      sessionProxy: AddressOrPair,
      seed: Uint8Array,
      role: SessionProxyRole,
    ) {
      this.sessionProxies[role] = sessionProxy;
      this.sessionProxySeeds[sessionProxy] = seed;
    },
    setBalanceFree(balance: BigInt, chain: ChainId) {
      this.balanceFree[chain] = balance;
    },
    setBalanceReserved(balance: BigInt, chain: ChainId) {
      this.balanceReserved[chain] = balance;
    },
    setBalanceFrozen(balance: BigInt, chain: ChainId) {
      this.balanceFrozen[chain] = balance;
    },
    setNonce(nonce: number, chain: ChainId) {
      //console.debug(`Setting nonce for chain ${chain} to ${nonce}`);
      this.nonce[chain] = nonce;
    },
    setGenesisHash(genesisHash: String, chain: ChainId) {
      this.genesisHash[chain] = genesisHash;
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
