import { defineStore } from "pinia";
import type { AddressOrPair } from "@polkadot/api-base/types";
import { asString } from "@encointer/util";
import type { InjectedExtension } from "@polkadot/extension-inject/types";
import { ChainId } from "@/configs/chains";
import { assetDecimals } from "@/configs/assets";
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
    balanceFree: <Record<string, BigInt>>{},
    // reserved balance per chain
    balanceReserved: <Record<string, BigInt>>{},
    // frozen balance per chain
    balanceFrozen: <Record<string, BigInt>>{},
    // nonce per chain
    nonce: <Record<ChainId, number>>{},
    // genesis hash
    genesisHash: <Record<String, number>>{},
    // decimals (we assume it's the same for all used chains as it's the token we're shielding
    nativeDecimals: <number>0,
    // native token symbol (we assume it's the same for all used chains as it's the token we're shielding
    symbol: <string>"UNIT",
    // ss58 format (we assume it's the same for all used chains
    ss58Format: <number>42,
    // existential deposit per chain
    existentialDeposit: <Record<string, BigInt>>{},
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
    getSymbol({ symbol }): (asset: string | null) => string {
      return (asset: string | null): string => {
        return asset ? String(asset).trim().normalize() : symbol;
      };
    },
    getDecimals({ nativeDecimals }): (asset: string | null) => number {
      return (asset: string | null): number => {
        if (!asset || asset === "native") return nativeDecimals;
        return assetDecimals[asset];
      };
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
    formatBalanceFree({ balanceFree }) {
      return (chainAsset: ChainAssetId, forceDecimals?: number): string => {
        const decimals =
          forceDecimals !== undefined
            ? forceDecimals
            : this.getDecimals(chainAsset.asset);
        if (!balanceFree[chainAsset.key()]) return "0.000";
        const balanceValue: number = divideBigIntToFloat(
          balanceFree[chainAsset.key()],
          10 ** decimals,
        );
        return formatDecimalBalance(balanceValue);
      };
    },
    formatBalanceReserved({ balanceReserved }) {
      return (chainAsset: ChainAssetId, forceDecimals?: number): string => {
        const decimals =
          forceDecimals !== undefined
            ? forceDecimals
            : this.getDecimals(chainAsset.asset);
        if (!balanceReserved[chainAsset.key()]) return "0.000";
        const balanceValue: number = divideBigIntToFloat(
          balanceReserved[chainAsset.key()],
          10 ** decimals,
        );
        return formatDecimalBalance(balanceValue);
      };
    },
    formatBalanceFrozen({ balanceFrozen }) {
      return (chainAsset: ChainAssetId, forceDecimals?: number): string => {
        const decimals =
          forceDecimals !== undefined
            ? forceDecimals
            : this.getDecimals(chainAsset.asset);
        if (!balanceFrozen[chainAsset.key()]) return "0.000";
        const balanceValue: number = divideBigIntToFloat(
          balanceFrozen[chainAsset.key()],
          10 ** decimals,
        );
        return formatDecimalBalance(balanceValue);
      };
    },
    getDecimalBalanceFree({ balanceFree }) {
      return (chainAsset: ChainAssetId, forceDecimals?: number): number => {
        const decimals =
          forceDecimals !== undefined
            ? forceDecimals
            : this.getDecimals(chainAsset.asset);
        if (!balanceFree[chainAsset.key()]) return 0;
        return divideBigIntToFloat(
          balanceFree[chainAsset.key()],
          10 ** decimals,
        );
      };
    },
    getDecimalBalanceReserved({ balanceReserved }) {
      return (chainAsset: ChainAssetId, forceDecimals?: number): number => {
        const decimals =
          forceDecimals !== undefined
            ? forceDecimals
            : this.getDecimals(chainAsset.asset);
        if (!balanceReserved[chainAsset.key()]) return 0;
        return divideBigIntToFloat(
          balanceReserved[chainAsset.key()],
          10 ** decimals,
        );
      };
    },
    getDecimalBalanceFrozen({ balanceFrozen }) {
      return (chainAsset: ChainAssetId, forceDecimals?: number): number => {
        const decimals =
          forceDecimals !== undefined
            ? forceDecimals
            : this.getDecimals(chainAsset.asset);
        if (!balanceFrozen[chainAsset.key()]) return 0;
        return divideBigIntToFloat(
          balanceFrozen[chainAsset.key()],
          10 ** decimals,
        );
      };
    },
    getDecimalBalanceTransferable({ balanceFree, balanceFrozen }) {
      return (chainAsset: ChainAssetId, forceDecimals?: number): number => {
        const decimals =
          forceDecimals !== undefined
            ? forceDecimals
            : this.getDecimals(chainAsset.asset);
        const frozen = balanceFrozen[chainAsset.key()]
          ? balanceFrozen[chainAsset.key()]
          : BigInt(0);
        const free = balanceFree[chainAsset.key()]
          ? balanceFree[chainAsset.key()]
          : BigInt(0);
        console.log(
          "getting Free balance for chain ",
          chainAsset,
          " : ",
          free,
          "Frozen balance: ",
          frozen,
        );
        return divideBigIntToFloat(BigInt(free - frozen), 10 ** decimals);
      };
    },
    getDecimalExistentialDeposit({ existentialDeposit }) {
      return (chainAsset: ChainAssetId, forceDecimals?: number): number => {
        const decimals =
          forceDecimals !== undefined
            ? forceDecimals
            : this.getDecimals(chainAsset.asset);
        if (!existentialDeposit[chainAsset.key()]) return 0;
        return divideBigIntToFloat(
          existentialDeposit[chainAsset.key()],
          10 ** decimals,
        );
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
    removeProxyForRole(role: SessionProxyRole) {
      delete this.sessionProxies[role];
      delete this.sessionProxySeeds[role];
    },
    setBalanceFree(balance: BigInt, chainAsset: ChainAssetId) {
      console.log(
        "Setting free balance for chain",
        chainAsset,
        " to ",
        balance,
      );
      this.balanceFree[chainAsset.key()] = balance;
    },
    setBalanceReserved(balance: BigInt, chainAsset: ChainAssetId) {
      this.balanceReserved[chainAsset.key()] = balance;
    },
    setBalanceFrozen(balance: BigInt, chainAsset: ChainAssetId) {
      this.balanceFrozen[chainAsset.key()] = balance;
    },
    setNonce(nonce: number, chain: ChainId) {
      //console.debug(`Setting nonce for chain ${chain} to ${nonce}`);
      this.nonce[chain] = nonce;
    },
    setGenesisHash(genesisHash: String, chain: ChainId) {
      this.genesisHash[chain] = genesisHash;
    },
    setNativeDecimals(decimals: number) {
      this.nativeDecimals = decimals;
    },
    setSymbol(symbol: string) {
      console.debug(`Setting symbol to ${symbol}`);
      this.symbol = symbol;
    },
    setSS58Format(ss58Format: number) {
      this.ss58Format = ss58Format;
    },
    setExistentialDeposit(
      existentialDeposit: BigInt,
      chainAsset: ChainAssetId,
    ) {
      this.existentialDeposit[chainAsset.key()] = existentialDeposit;
    },
    decimalAmountToBigInt(
      amount: number,
      chainAsset: ChainAssetId,
      forceDecimals?: number,
    ): BigInt {
      const decimals =
        forceDecimals !== undefined
          ? forceDecimals
          : this.getDecimals(chainAsset.asset);
      return BigInt(Math.round(amount * 10 ** decimals));
    },
  },
});
