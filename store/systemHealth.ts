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
  Critical,
  Warning,
  Healthy,
}

export class SidechainHealth {
  shieldingTargetProgress: Health;
  shieldingTargetImportProgress: Health;

  constructor(
    shieldingTargetProgress: Health,
    shieldingTargetImportProgress: Health,
  ) {
    this.shieldingTargetProgress = shieldingTargetProgress;
    this.shieldingTargetImportProgress = shieldingTargetImportProgress;
  }
  overall(): Health {
    return Math.min(
      this.shieldingTargetProgress,
      this.shieldingTargetImportProgress,
    );
  }
}

export class IntegriteeHealth {
  integriteeProgress: Health;

  constructor(progressHealth: Health) {
    this.integriteeProgress = progressHealth;
  }
  overall(): Health {
    return this.integriteeProgress;
  }
}

export const useSystemHealth = defineStore("system-health", {
  state: () => ({
    shieldingTargetLastBlockNumber: <ObservableNumber | null>null,
    shieldingTargetImportedBlockNumber: <ObservableNumber | null>null,
    integriteeLastBlockNumber: <ObservableNumber | null>null,
  }),
  getters: {
    getSidechainSystemHealth({
      shieldingTargetLastBlockNumber,
      shieldingTargetImportedBlockNumber,
    }): SidechainHealth {
      const lag =
        shieldingTargetLastBlockNumber?.value -
        shieldingTargetImportedBlockNumber?.value;
      let importHealth;
      if (lag < 5) {
        importHealth = Health.Healthy;
      } else if (lag < 10) {
        importHealth = Health.Warning;
      } else if (lag >= 10) {
        importHealth = Health.Critical;
      } else {
        importHealth = Health.Unknown;
      }
      const targetHealth = parachainBlockAgeToHealth(
        shieldingTargetLastBlockNumber?.age(),
      );
      return new SidechainHealth(targetHealth, importHealth);
    },
    getIntegriteeSystemHealth({ integriteeLastBlockNumber }): IntegriteeHealth {
      const progressHealth = parachainBlockAgeToHealth(
        integriteeLastBlockNumber?.age(),
      );
      return new IntegriteeHealth(progressHealth);
    },
    getIntergiteeBlockNumberObservable({
      integriteeLastBlockNumber,
    }): ObservableNumber {
      return integriteeLastBlockNumber;
    },
    getShieldingTargetBlockNumberObservable({
      shieldingTargetLastBlockNumber,
    }): ObservableNumber {
      return shieldingTargetLastBlockNumber;
    },
    getShieldingTargetImportedBlockNumberObservable({
      shieldingTargetImportedBlockNumber,
    }): ObservableNumber {
      return shieldingTargetImportedBlockNumber;
    },
  },
  actions: {
    observeShieldingTargetBlockNumber(block_number: number) {
      this.shieldingTargetLastBlockNumber
        ? this.shieldingTargetLastBlockNumber?.observe(block_number)
        : (this.shieldingTargetLastBlockNumber = new ObservableNumber(
            block_number,
          ));
    },
    observeShieldingTargetImportedBlockNumber(block_number: number) {
      this.shieldingTargetImportedBlockNumber
        ? this.shieldingTargetImportedBlockNumber?.observe(block_number)
        : (this.shieldingTargetImportedBlockNumber = new ObservableNumber(
            block_number,
          ));
    },
    observeIntegriteeBlockNumber(block_number: number) {
      this.integriteeLastBlockNumber
        ? this.integriteeLastBlockNumber?.observe(block_number)
        : (this.integriteeLastBlockNumber = new ObservableNumber(block_number));
    },
  },
});

const parachainBlockAgeToHealth = (millis: number) => {
  if (millis < 18000) {
    return Health.Healthy;
  } else if (millis < 30000) {
    return Health.Warning;
  } else {
    return Health.Critical;
  }
};
