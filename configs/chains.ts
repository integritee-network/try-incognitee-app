export enum ChainId {
  PolkadotRelay,
  KusamaRelay,
  PaseoRelay,
  IntegriteePolkadot,
  IntegriteeKusama,
  IntegriteePaseo,
  IntegriteeDev,
  IncogniteePaseoRelay,
  IncogniteeIntegriteeKusama,
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
    api: "wss://rpc.ibp.network/paseo",
    faucetUrl: "https://faucet.polkadot.io/",
    //faucetUrl: "https://substratefaucet.xyz/paseo/ADDRESS"
  },
  [ChainId.IntegriteePolkadot]: {
    name: "Integritee Polkadot",
    api: "wss://polkadot.api.integritee.network",
  },
  [ChainId.IntegriteeKusama]: {
    name: "Integritee Kusama",
    api: "wss://kusama.api.integritee.network",
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
};
