import { defineStore } from "pinia";
import { IntegriteeWorker } from "@encointer/worker-api";
import { encodeAddress } from "@polkadot/keyring";
import bs58 from "bs58";
import { hexToU8a } from "@polkadot/util";

// Non-reactive singleton worker instance
let worker: IntegriteeWorker | null = null;

// Type helper: public instance type of IntegriteeWorker
// This helps the IDEs with autocompletion and type checking.
type WorkerInstance = InstanceType<typeof IntegriteeWorker>;

export const useIncognitee = defineStore("incognitee", {
  state: () => ({
    api: <IntegriteeWorker | null>null,
    apiReady: false,
    shard: "",
    fingerprint: "",
    vault: "",
  }),
  getters: {
    getShard(): string {
      return this.shard;
    },
    getFingerprint(): string {
      return this.fingerprint;
    },
    getVault(): string {
      return this.vault;
    },
  },
  actions: {
    async initializeApi(url: string[], shard: string) {
      console.log(
        "Initializing Incognitee Api at " + url + " for shard " + shard,
      );

      this.shard = shard;
      worker = new IntegriteeWorker(url);

      const sk = await worker.getShardVault();
      this.vault = encodeAddress(sk[0]);
      console.log("  Vault: " + this.vault);

      const fingerprint_hex = await worker.getFingerprint();
      this.fingerprint = bs58.encode(hexToU8a(fingerprint_hex.toString()));
      console.log(
        `  validateer at ${url} reported fingerprint: ` + this.fingerprint,
      );

      //todo: verify fingerprint against teerex
      this.apiReady = true;
      console.log("  Incognitee Api connected to sidechain");
    },

    /** Return the initialized worker instance (typed) */
    getWorker(): WorkerInstance {
      if (!worker) {
        throw new Error("API not initialized");
      }
      return worker;
    },

    /** Do something with the worker while ensuring that it is initialized and connected. */
    async withWorker<T>(fn: (worker: WorkerInstance) => T): Promise<T> {
      if (!worker) {
        throw new Error("Worker not initialized");
      }

      await worker.isReady();

      if (!worker.isConnected) {
        await worker.reconnect();
      }

      try {
        return fn(worker);
      } catch (err) {
        console.error("Error in worker interaction:", err);
        throw err;
      }
    },
    createType(apiType: string, obj?: any): any {
      if (!worker) {
        throw new Error("[createType] Worker not initialized");
      }

      return worker.createType(apiType, obj);
    },
    isConnected(): boolean {
      if (!worker) {
        console.warn("[isConnected] Worker not initialized");
        return false;
      }
      return worker.isConnected;
    },
    reconnect(): Promise<void> {
      if (!worker) {
        throw new Error("[reconnect] Worker not initialized");
      }
      return worker.reconnect();
    },
  },
});
