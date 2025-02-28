import { ChainId } from "@/config/chains.ts";
import Paseo from "@/assets/img/paseo-logo.svg?url";
import TEER from "@/assets/img/logo-icon.svg?url";
import DOT from "@/assets/img/polkadot-logo.svg?url";
import USDC from "@/assets/img/usdc-logo.svg?url";
import USDT from "@/assets/img/usdt-logo.svg?url";
import ETH from "@/assets/img/eth-logo.svg?url";
export const isAssetEqual = (
  a: string | null | undefined,
  b: string | null | undefined,
) => (!a && !b) || a === b; // Treat null, "", and undefined as equivalent

export const assetDecimals: Record<string, number> = {
  USDT: 6,
  USDC: 6,
  "USDC.e": 6,
  ETH: 18,
  WETH: 18,
};

export class ChainAssetId {
  chain: ChainId;
  asset: string;

  constructor(chain: ChainId, asset: string | null) {
    this.chain = chain;
    this.asset = asset;
  }
}

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

export const getIconUrlForAsset = (asset: string) => {
  const item = tokenSelectorItems.find((item) => item.value === asset);
  return item?.icon;
};

export const getHubIconUrlForAsset = (asset: string) => {
  const item = tokenSelectorItems.find((item) => item.value === asset);
  return item?.hubIcon;
};
