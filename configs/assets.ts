import { ChainId } from "@/configs/chains.ts";
import Paseo from "@/assets/img/paseo-logo.svg?url";
import TEER from "@/assets/img/logo-icon.svg?url";
import DOT from "@/assets/img/polkadot-logo.svg?url";
import USDC from "@/assets/img/usdc-logo.svg?url";
import USDT from "@/assets/img/usdt-logo.svg?url";
import ETH from "@/assets/img/eth-logo.svg?url";
export const isAssetEqual = (
  a: string | null | undefined,
  b: string | null | undefined,
) => {
  const aa = unifyAssetId(a);
  const bb = unifyAssetId(b);
  return (!a && !b) || aa === bb;
}; // Treat null, "", and undefined as equivalent

// use unified asset id as key (lowercase, no dots)
export const assetDecimals: Record<string, number> = {
  usdt: 6,
  usdt_e: 6,
  usdc: 6,
  usdc_e: 6,
  eth: 18,
  weth: 15, // fixme: is 18 but we get too few from the faucet,
};
export const assetHubRoute: Record<string, [string, string]> = {
  usdt: ["assets", "1984"],
  usdt_e: [
    "foreignAssets",
    '{ "parents": 2, "interior": { "X2": [ { "GlobalConsensus": { "Ethereum": { "chainId": 1 } } }, { "AccountKey20": { "network": null, "key": "0xdac17f958d2ee523a2206206994597c13d831ec7" } } ] } }',
  ],
  usdc: ["assets", "1337"],
  usdc_e: [
    "foreignAssets",
    '{ "parents": 2, "interior": { "X2": [ { "GlobalConsensus": { "Ethereum": { "chainId": 1 } } }, { "AccountKey20": { "network": null, "key": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" } } ] } }',
  ],
  eth: ["foreignAssets", "not yet defined"], // Consider using null or undefined
  weth: [
    "foreignAssets",
    '{ "parents": 2, "interior": { "X2": [ { "GlobalConsensus": { "Ethereum": { "chainId": 11155111 } } }, { "AccountKey20": { "network": null, "key": "0xfff9976782d46cc05630d1f6ebab18b2324d6b14" } } ] } }',
  ],
};

export class ChainAssetId {
  chain: ChainId;
  asset: string;

  constructor(chain: ChainId, asset: string | null) {
    this.chain = chain;
    this.asset = asset ?? "native";
  }

  key(): string {
    return `${this.chain}-${unifyAssetId(this.asset)}`;
  }
}

export const unifyAssetId = (str: string | null) => {
  return str?.toLowerCase().replace(/\./g, "_");
};

export const unifyAssetIdDisplay = (str: string | null) => {
  if (!str) {
    return "UNIT";
  }
  switch (unifyAssetId(str)) {
    case "usdc_e":
      return "USDC.e";
    case "usdt_e":
      return "USDT.e";
    default:
      return str.toUpperCase();
  }
};

// Token Liste
export const tokenSelectorItems = [
  { label: "TEER", value: "TEER", icon: TEER, hubIcon: null, maturity: "beta" },
  { label: "DOT", value: "DOT", icon: DOT, hubIcon: null, maturity: "beta" },
  {
    label: "USDC.e",
    value: "USDC.e",
    icon: USDC,
    hubIcon: DOT,
    maturity: "soon",
  },
  {
    label: "USDT.e",
    value: "USDT.e",
    icon: USDT,
    hubIcon: DOT,
    maturity: "soon",
  },
  { label: "PAS", value: "PAS", icon: Paseo, hubIcon: null, maturity: "test" },
  {
    label: "USDC",
    value: "USDC",
    icon: USDC,
    hubIcon: Paseo,
    maturity: "test",
  },
  {
    label: "USDT",
    value: "USDT",
    icon: USDT,
    hubIcon: Paseo,
    maturity: "test",
  },
  { label: "WETH", value: "WETH", icon: ETH, hubIcon: Paseo, maturity: "test" },
];

export const getSelectableTokens = (isTestnet: boolean) => {
  if (isTestnet) {
    return tokenSelectorItems.filter((item) => item.maturity === "test");
  } else {
    return tokenSelectorItems.filter((item) => item.maturity !== "test");
  }
};

export const getIconUrlForAsset = (asset: string) => {
  const item = tokenSelectorItems.find((item) => item.value === asset);
  return item?.icon;
};

export const getMaturityForAsset = (asset: string) => {
  const item = tokenSelectorItems.find(
    (item) => unifyAssetId(item.value) === unifyAssetId(asset),
  );
  return item?.maturity;
};

export const getHubIconUrlForAsset = (asset: string) => {
  const item = tokenSelectorItems.find((item) => item.value === asset);
  return item?.hubIcon;
};
