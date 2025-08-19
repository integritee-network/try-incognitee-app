import { defineStore } from "pinia";
import { markRaw } from "vue";

class ObservableNumber {
  value: number;
  timestamp: Date;
  lastDuration: number;
  lastValue: number;
  constructor(value: number) {
    this.value = value;
    this.timestamp = new Date();
    this.lastDuration = 0;
    this.lastValue = 0;
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
  genesisMatch: Health;

  constructor(
    shieldingTargetProgress: Health,
    shieldingTargetImportProgress: Health,
    genesisMatch: Health,
  ) {
    this.shieldingTargetProgress = shieldingTargetProgress;
    this.shieldingTargetImportProgress = shieldingTargetImportProgress;
    this.genesisMatch = genesisMatch;
  }
  overall(): Health {
    return Math.min(
      this.shieldingTargetProgress,
      this.shieldingTargetImportProgress,
      this.genesisMatch,
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
    shieldingTargetApiGenesisHashHex: <string | null>null,
    shieldingTargetLightClientGenesisHashHex: <string | null>null,
    integriteeLastBlockNumber: <ObservableNumber | null>null,
  }),
  getters: {
    getSidechainSystemHealth({
      shieldingTargetLastBlockNumber,
      shieldingTargetImportedBlockNumber,
      shieldingTargetApiGenesisHashHex,
      shieldingTargetLightClientGenesisHashHex,
    }): SidechainHealth {
      const lag =
        (shieldingTargetLastBlockNumber?.value ?? 0) -
        (shieldingTargetImportedBlockNumber?.value ?? 0);
      let importHealth;
      if (lag <= 12) {
        importHealth = Health.Healthy;
      } else if (lag < 24) {
        importHealth = Health.Warning;
      } else if (lag >= 24) {
        importHealth = Health.Critical;
      } else {
        importHealth = Health.Unknown;
      }
      const targetHealth = parachainBlockAgeToHealth(
        shieldingTargetLastBlockNumber?.age() ?? 0,
      );
      let genesisMatch = Health.Warning;
      if (
        (shieldingTargetApiGenesisHashHex?.length ?? 0) > 0 &&
        (shieldingTargetLightClientGenesisHashHex?.length ?? 0) > 0
      ) {
        genesisMatch =
          shieldingTargetApiGenesisHashHex ===
          shieldingTargetLightClientGenesisHashHex
            ? Health.Healthy
            : Health.Critical;
      }
      return new SidechainHealth(targetHealth, importHealth, genesisMatch);
    },
    getIntegriteeSystemHealth({ integriteeLastBlockNumber }): IntegriteeHealth {
      const progressHealth = parachainBlockAgeToHealth(
        integriteeLastBlockNumber?.age() ?? 0,
      );
      return new IntegriteeHealth(progressHealth);
    },
    getIntergiteeBlockNumberObservable({
      integriteeLastBlockNumber,
    }): ObservableNumber {
      return integriteeLastBlockNumber ?? markRaw(new ObservableNumber(0));
    },
    getShieldingTargetBlockNumberObservable({
      shieldingTargetLastBlockNumber,
    }): ObservableNumber {
      return shieldingTargetLastBlockNumber ?? markRaw(new ObservableNumber(0));
    },
    getShieldingTargetImportedBlockNumberObservable({
      shieldingTargetImportedBlockNumber,
    }): ObservableNumber {
      return (
        shieldingTargetImportedBlockNumber ?? markRaw(new ObservableNumber(0))
      );
    },
    getShieldingTargetApiGenesisHashHex({
      shieldingTargetApiGenesisHashHex,
    }): string {
      return shieldingTargetApiGenesisHashHex ?? "undefined";
    },
    getShieldingTargetLightClientGenesisHashHex({
      shieldingTargetLightClientGenesisHashHex,
    }): string {
      return shieldingTargetLightClientGenesisHashHex ?? "undefined";
    },
  },
  actions: {
    observeShieldingTargetBlockNumber(block_number: number) {
      this.shieldingTargetLastBlockNumber
        ? this.shieldingTargetLastBlockNumber?.observe(block_number)
        : (this.shieldingTargetLastBlockNumber = markRaw(
            new ObservableNumber(block_number),
          ));
    },
    observeShieldingTargetImportedBlockNumber(block_number: number) {
      this.shieldingTargetImportedBlockNumber
        ? this.shieldingTargetImportedBlockNumber?.observe(block_number)
        : (this.shieldingTargetImportedBlockNumber = markRaw(
            new ObservableNumber(block_number),
          ));
    },
    observeIntegriteeBlockNumber(block_number: number) {
      this.integriteeLastBlockNumber
        ? this.integriteeLastBlockNumber?.observe(block_number)
        : (this.integriteeLastBlockNumber = markRaw(
            new ObservableNumber(block_number),
          ));
    },
    setShieldingTargetApiGenesisHashHex(genesis_hash_hex: string) {
      this.shieldingTargetApiGenesisHashHex = genesis_hash_hex;
    },
    setShieldingTargetLightClientGenesisHashHex(genesis_hash_hex: string) {
      this.shieldingTargetLightClientGenesisHashHex = genesis_hash_hex;
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
