import { defineStore } from "pinia";
import { IntegriteeWorker } from "@encointer/worker-api";
import { encodeAddress } from "@polkadot/keyring";

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
      const worker = new IntegriteeWorker(
        "wss://scv1.paseo.api.incognitee.io:443",
        {
          createWebSocket: (url) => new WebSocket(url),
          types: {},
        },
      );
      this.api = worker;
      worker.getShardVault().then((sk) => {
        this.vault = encodeAddress(sk[0]);
        console.log("Vault: " + this.vault);
      });
      // todo! hard-coded for now. soon to be fetched
      this.shard = "5wePd1LYa5M49ghwgZXs55cepKbJKhj5xfzQGfPeMS7c";
      this.fingerprint = "8weGnjvG3nh6UzoYjqaTjpWjX1ouNPioA1K5134DJc5j";
      console.log("Incognitee Api connected to sidechain");
      this.apiReady = true;
    },
  },
});
