import { defineStore } from "pinia";
import { IntegriteeWorker } from "@encointer/worker-api";
import { encodeAddress } from "@polkadot/keyring";
import bs58 from "bs58";
import { hexToU8a } from "@polkadot/util";
export const useIncognitee = defineStore("incognitee", {
  state: () => ({
    api: <IntegriteeWorker | null>null,
    apiReady: false,
    shard: "",
    fingerprint: "",
    vault: "",
  }),
  actions: {
    async initializeApi() {
      const url = "wss://scv1.paseo.api.incognitee.io:443";
      const worker = new IntegriteeWorker(url, {
        createWebSocket: (url) => new WebSocket(url),
        types: {},
      });
      this.api = worker;
      // shard is ok to be hard-coded, because we don't want to accidentally change shards
      this.shard = "5wePd1LYa5M49ghwgZXs55cepKbJKhj5xfzQGfPeMS7c";
      const sk = await worker.getShardVault();
      this.vault = encodeAddress(sk[0]);
      console.log("Vault: " + this.vault);
      const fingerprint_hex = await worker.getFingerprint();
      this.fingerprint = bs58.encode(hexToU8a(fingerprint_hex.toString()));
      console.log(
        `validateer at ${url} reported fingerprint: ` + this.fingerprint,
      );
      //todo: verify fingerprint against teerex
      console.log("Incognitee Api connected to sidechain");
      this.apiReady = true;
    },
  },
});
