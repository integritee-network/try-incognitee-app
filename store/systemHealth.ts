import { defineStore } from "pinia";
import { ChainId } from "@/configs/chains";

class ObservableNumber {
  value: number;
  timestamp: Date;
  lastDuration: number;
  lastValue: number;
  constructor(value: number) {
    this.value = value;
    this.timestamp = new Date();
  }
  observe(new_value: number) {
    if (new_value === this.value) {
      return;
    }
    this.lastDuration = this.age();
    this.lastValue = this.value;
    this.value = new_value;
    this.timestamp = new Date();
  }

  // milliseconds
  age() {
    return new Date().getTime() - this.timestamp.getTime();
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
    integriteeLastBlockNumber: <ObservableNumber | null>null,
  }),
  getters: {
    getAggregatedSystemHealth({ shieldingTargetFinalizedBlockNumber }): Health {
      return Health.Healthy;
    },
    getIntegriteeSystemHealth({ shieldingTargetFinalizedBlockNumber }): Health {
      let health = Health.Healthy;
      if (this.integriteeLastBlockNumber?.age() > 24000) {
        health = Health.Warning;
      }
      return health;
    },
    getIntergiteeBlockNumberObservable({
      integriteeLastBlockNumber,
    }): ObservableNumber {
      return integriteeLastBlockNumber;
    },
  },
  actions: {
    observeShieldingTargetFinalizedBlockNumber(block_number: number) {
      this.shieldingTargetFinalizedBlockNumber?.observe(block_number);
    },
    observeIntegriteeBlockNumber(block_number: number) {
      this.integriteeLastBlockNumber
        ? this.integriteeLastBlockNumber?.observe(block_number)
        : (this.integriteeLastBlockNumber = new ObservableNumber(block_number));
    },
  },
});
