export class Bond {
  teerBonded: number;
  lastUpdated: Date;
  accumulatedTeerDays: number;

  constructor(
    teerBonded: number = 0,
    lastUpdated: Date = new Date(),
    accumulatedTeerDays: number = 0,
  ) {
    this.teerBonded = teerBonded;
    this.lastUpdated = lastUpdated;
    this.accumulatedTeerDays = accumulatedTeerDays;
  }

  updateTeerDays() {
    const now = new Date();
    const elapsed = now.getTime() - this.lastUpdated.getTime(); //milliseconds
    this.accumulatedTeerDays += (this.teerBonded * elapsed) / 86400 / 1000;
    this.lastUpdated = now;
  }

  getTeerDays() {
    return this.accumulatedTeerDays.toFixed(4);
  }

  getTeerBonded() {
    return this.teerBonded.toFixed(4);
  }
}

export class PendingUnlock {
  teerToUnlock: number;
  due: Date;

  constructor(teerToUnlock: number = 0, due: Date = new Date()) {
    this.teerToUnlock = teerToUnlock;
    this.due = due;
  }

  getDueDateStr() {
    return this.due.toISOString();
  }

  getTeerToUnlock() {
    return this.teerToUnlock > 0 ? this.teerToUnlock.toFixed(4) : null;
  }

  canWithdraw() {
    return this.due < new Date();
  }
}
