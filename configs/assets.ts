import { ChainId } from "@/configs/chains.ts";
import Paseo from "@/assets/img/paseo-logo.svg?url";
import TEER from "@/assets/img/logo-icon.svg?url";
import DOT from "@/assets/img/polkadot-logo.svg?url";
import USDC from "@/assets/img/usdc-logo.svg?url";
import EURC from "@/assets/img/eurc-logo.svg?url";
import USDT from "@/assets/img/usdt-logo.svg?url";
import ETH from "@/assets/img/eth-logo.svg?url";
import WBTC from "@/assets/img/wbtc-logo.svg?url";
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
  eurc_e: 6,
  eth: 18,
  weth: 18,
  wbtc_e: 8,
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
  eurc_e: [
    "foreignAssets",
    '{ "parents": 2, "interior": { "X2": [ { "GlobalConsensus": { "Ethereum": { "chainId": 1 } } }, { "AccountKey20": { "network": null, "key": "0x1abaea1f7c830bd89acc67ec4af516284b1bc33c" } } ] } }',
  ],
  eth: [
    "foreignAssets",
    '{ "parents": 2, "interior": { "X1": [ { "GlobalConsensus": { "Ethereum": { "chainId": 1 } } } ] } }',
  ],
  weth: [
    "foreignAssets",
    '{ "parents": 2, "interior": { "X2": [ { "GlobalConsensus": { "Ethereum": { "chainId": 11155111 } } }, { "AccountKey20": { "network": null, "key": "0xfff9976782d46cc05630d1f6ebab18b2324d6b14" } } ] } }',
  ],
  wbtc_e: [
    "foreignAssets",
    '{ "parents": 2, "interior": { "X2": [ { "GlobalConsensus": { "Ethereum": { "chainId": 1 } } }, { "AccountKey20": { "network": null, "key": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599" } } ] } }',
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
    case "eurc_e":
      return "EURC.e";
    case "usdt_e":
      return "USDT.e";
    case "wbtc_e":
      return "WBTC.e";
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
    maturity: "beta",
  },
  {
    label: "USDT.e",
    value: "USDT.e",
    icon: USDT,
    hubIcon: DOT,
    maturity: "beta",
  },
  {
    label: "EURC.e",
    value: "EURC.e",
    icon: EURC,
    hubIcon: DOT,
    maturity: "beta",
  },
  { label: "ETH", value: "ETH", icon: ETH, hubIcon: DOT, maturity: "beta" },
  {
    label: "WBTC.e",
    value: "WBTC.e",
    icon: WBTC,
    hubIcon: DOT,
    maturity: "beta",
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
