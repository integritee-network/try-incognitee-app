
export enum ChainId {
  PolkadotRelay,
  KusamaRelay,
  PaseoRelay,
  IntegriteePolkadot,
  IntegriteeKusama,
  IntegriteePaseo,
  IntegriteeDev,
  IncogniteePaseoRelay,
  IncogniteeIntegriteeKusama
}

export type ChainConfig = {
  name: string;
  api: string;
};

export const chainConfig : Record<ChainId, ChainConfig> = {
  [ChainId.PolkadotRelay]: {
    name: "Polkadot Relay",
    api: "wss://rpc.polkadot.io"
  },
  [ChainId.KusamaRelay]: {
    name: "Kusama Relay",
    api: "wss://kusama-rpc.polkadot.io"
  },
  [ChainId.PaseoRelay]: {
    name: "Paseo Relay",
    api: "wss://paseo-rpc.polkadot.io"
  },
  [ChainId.IntegriteePolkadot]: {
    name: "Integritee Polkadot",
    api: "wss://polkadot.api.integritee.io"
  },
  [ChainId.IntegriteeKusama]: {
    name: "Integritee Kusama",
    api: "wss://kusama.api.integritee.io"
  },
  [ChainId.IntegriteePaseo]: {
    name: "Integritee Paseo",
    api: "wss://paseo.api.integritee.io"
  },
  [ChainId.IntegriteeDev]: {
    name: "Integritee Dev",
    api: "ws://localhost:9944"
  },
  [ChainId.IncogniteePaseoRelay]: {
    name: "Incognitee Paseo Relay",
    api: "wss://scv1.paseo.api.incognitee.io:443"
  },
  [ChainId.IncogniteeIntegriteeKusama]: {
    name: "Incognitee Integritee Kusama",
    api: "wss://scv1.integritee-kusama.api.incognitee.io"
  }
};
