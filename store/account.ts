import { defineStore } from 'pinia'
import type {KeyringPair} from "@polkadot/keyring/types";
import { ApiPromise, WsProvider } from '@polkadot/api';
import {IntegriteeWorker} from '@encointer/worker-api';
export const useAccount = defineStore('account', {
  state: () => ({
    paseoApi: <ApiPromise | null>null,
    incogniteeApi: <IntegriteeWorker | null>null,
    account: <KeyringPair | null>null,
    paseoBalance: 0,
    incogniteeBalance: 0
  }),
  getters: {
    getShortAddress({account}): string {
      return account? account.address.slice(0,8)+'...' : 'none'
    },
    getPaseoApi() {
      return this.paseoApi;
    },
    getIncogniteeApi() {
      return this.incogniteeApi;
    },
  },
  actions: {
    setAccount(account: KeyringPair) {
      this.account = account
    },
    async initializePaseoApi() {
      try {
        const wsProvider = new WsProvider('wss://paseo.rpc.amforc.com');
        this.paseoApi = await ApiPromise.create({ provider: wsProvider, types: {} });
        console.log("api connected to paseo relay chain")
      } catch (error) {
        console.error('Failed to initialize API:', error);
      }
    },
    async initializeIncogniteeApi() {

      const worker = new IntegriteeWorker('wss://scv1.paseo.api.incognitee.io:443', {
        createWebSocket: (url) => new WebSocket(url),
        types: {}
      })
      this.incogniteeApi = worker
      worker.getShardVault().then((sk) => {
        console.log('Vault: ')
        console.log(sk[0])
      });
      const shard = '5wePd1LYa5M49ghwgZXs55cepKbJKhj5xfzQGfPeMS7c';
      const mrenclave = '7RuM6U4DLEtrTnVntDjDPBCAN4LbCGRpnmcTYUGhLqc7';
    }
  },
})
