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
        shieldingTargetLastBlockNumber?.value -
        shieldingTargetImportedBlockNumber?.value;
      let importHealth;
      if (lag <= 6) {
        importHealth = Health.Healthy;
      } else if (lag < 12) {
        importHealth = Health.Warning;
      } else if (lag >= 12) {
        importHealth = Health.Critical;
      } else {
        importHealth = Health.Unknown;
      }
      const targetHealth = parachainBlockAgeToHealth(
        shieldingTargetLastBlockNumber?.age(),
      );
      let genesisMatch = Health.Warning;
      if (
        shieldingTargetApiGenesisHashHex?.length > 0 &&
        shieldingTargetLightClientGenesisHashHex?.length > 0
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
    getShieldingTargetApiGenesisHashHex({
      shieldingTargetApiGenesisHashHex,
    }): string {
      return shieldingTargetApiGenesisHashHex;
    },
    getShieldingTargetLightClientGenesisHashHex({
      shieldingTargetLightClientGenesisHashHex,
    }): string {
      return shieldingTargetLightClientGenesisHashHex;
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
