export enum SessionProxyRole {
  ReadBalance = "readBalance",
  ReadAny = "readAny",
  NonTransfer = "nonTransfer",
  Any = "any",
  TransferAllowance = "transferAllowance",
}

export const sessionProxyRoleOrder = [
  SessionProxyRole.ReadBalance,
  SessionProxyRole.ReadAny,
  SessionProxyRole.NonTransfer,
  SessionProxyRole.TransferAllowance,
  SessionProxyRole.Any,
];

export function isRoleAtLeast(
  role1: SessionProxyRole,
  role2: SessionProxyRole,
): boolean {
  return roleOrder.indexOf(role1) >= roleOrder.indexOf(role2);
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
