import { defineStore } from "pinia";
import { ChainId } from "@/configs/chains";

class ObservableNumber {
  value: number;
  timestamp: Date;
  constructor(value: number) {
    this.value = value;
  }
  observe(new_value: number) {
    this.value = new_value;
    this.timestamp = new Date();
  }
}

export enum Health {
  Unknown,
  Healthy,
  Warning,
  Critical,
}

export const useSystemHealth = defineStore("system-health", {
  state: () => ({
    shieldingTargetFinalizedBlockNumber: <ObservableNumber | null>null,
  }),
  getters: {
    getAggregatedSystemHealth({ shieldingTargetFinalizedBlockNumber }): Health {
      return Health.Healthy;
    },
    getIntegriteeSystemHealth({ shieldingTargetFinalizedBlockNumber }): Health {
      return Health.Warning;
    }
    },
  actions: {
    setShieldingTargetFinalizedBlockNumber(block_number: number) {
      this.shieldingTargetFinalizedBlockNumber.observe(block_number);
    }
  },
});
