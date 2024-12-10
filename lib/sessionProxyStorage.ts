export enum SessionProxyRole {
  ReadBalance = "readBalance",
  ReadAny = "readAny",
  NonTransfer = "nonTransfer",
  Any = "any",
  TransferAllowance = "transferAllowance",
}

export class SessionProxyCredentials {
  role: SessionProxyRole;
  expiry: Date;
  seed: Uint8Array;

  constructor(role: SessionProxyRole, expiry: Date, seed: Uint8Array) {
    this.role = role;
    this.expiry = expiry;
    this.seed = seed;
  }
}
