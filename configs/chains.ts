export enum ChainId {
  PolkadotRelay,
  KusamaRelay,
  PaseoRelay,
  AssetHubPolkadot,
  AssetHubKusama,
  AssetHubPaseo,
  IntegriteePolkadot,
  IntegriteeKusama,
  IntegriteePaseo,
  IntegriteeDev,
  IncogniteePaseoRelay,
  IncogniteeIntegriteeKusama,
  IncogniteeAssetHubPolkadot,
}

type ChainConfig = {
  name: string;
  api: string;
  faucetUrl?: string;
};

export const chainConfigs: Record<ChainId, ChainConfig> = {
  [ChainId.PolkadotRelay]: {
    name: "Polkadot Relay",
    api: "wss://rpc.polkadot.io",
  },
  [ChainId.KusamaRelay]: {
    name: "Kusama Relay",
    api: "wss://kusama-rpc.polkadot.io",
  },
  [ChainId.PaseoRelay]: {
    name: "Paseo Relay",
    api: "wss://paseo.dotters.network",
    //api: "wss://rpc.ibp.network/paseo",
    faucetUrl: "https://faucet.polkadot.io/",
    //faucetUrl: "https://substratefaucet.xyz/paseo/ADDRESS"
    indexerUrls: ["https://paseo.subscan.io/account/ADDRESS?tab=transfer"],
  },
  [ChainId.AssetHubPolkadot]: {
    name: "Asset Hub Polkadot",
    api: "wss://polkadot-asset-hub-rpc.polkadot.io",
    indexerUrls: [
      "https://assethub-polkadot.subscan.io/account/ADDRESS?tab=transfer",
      "https://assethub-polkadot.statescan.io/#/accounts/ADDRESS?tab=transfers",
    ],
  },
  [ChainId.AssetHubKusama]: {
    name: "Asset Hub Kusama",
    api: "wss://kusama-asset-hub-rpc.polkadot.io",
  },
  [ChainId.AssetHubPaseo]: {
    name: "Asset Hub Paseo",
    api: "wss://sys.ibp.network/asset-hub-paseo",
  },
  [ChainId.IntegriteePolkadot]: {
    name: "Integritee Polkadot",
    api: "wss://polkadot.api.integritee.network",
  },
  [ChainId.IntegriteeKusama]: {
    name: "Integritee Kusama",
    api: "wss://kusama.api.integritee.network",
    indexerUrls: ["https://integritee.subscan.io/account/ADDRESS?tab=transfer"],
  },
  [ChainId.IntegriteePaseo]: {
    name: "Integritee Paseo",
    api: "wss://paseo.api.integritee.network",
    faucetUrl: "https://substratefaucet.xyz/integritee/ADDRESS",
  },
  [ChainId.IntegriteeDev]: {
    name: "Integritee Dev",
    api: "ws://localhost:9944",
  },
  [ChainId.IncogniteePaseoRelay]: {
    name: "Incognitee Paseo Relay",
    api: "wss://scv1.paseo.api.incognitee.io:443",
  },
  [ChainId.IncogniteeIntegriteeKusama]: {
    name: "Incognitee Integritee Kusama",
    api: "wss://scv1.integritee-kusama.api.incognitee.io:443",
  },
  [ChainId.IncogniteeAssetHubPolkadot]: {
    name: "Incognitee Asset Hub Polkadot",
    api: "wss://scv1.asset-hub-polkadot.api.incognitee.io:443",
  },
};

export const TEER_DECIMALS = 12;
