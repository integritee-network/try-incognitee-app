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
    async initializeApi(url: string, shard: string) {
      console.log(
        "Initializing Incognitee Api at " + url + " for shard " + shard,
      );
      this.shard = shard;
      const worker = new IntegriteeWorker(url, {
        createWebSocket: (url) => new WebSocket(url),
        types: {},
      });
      this.api = worker;
      const sk = await worker.getShardVault();
      this.vault = encodeAddress(sk[0]);
      console.log("  Vault: " + this.vault);
      const fingerprint_hex = await worker.getFingerprint();
      this.fingerprint = bs58.encode(hexToU8a(fingerprint_hex.toString()));
      console.log(
        `  validateer at ${url} reported fingerprint: ` + this.fingerprint,
      );
      //todo: verify fingerprint against teerex
      console.log("  Incognitee Api connected to sidechain");
      this.apiReady = true;
    },
  },
});
