import { formatMoment } from "~/helpers/date";
import { encodeAddress } from "@polkadot/util-crypto";

export enum NoteDirection {
  Incoming,
  Outgoing,
  None,
}

export class Note {
  timestamp: Date;
  direction: NoteDirection;
  category: string;
  account: string | null;
  amount: BigInt | null;
  assetId: string | null;
  note: string | null;

  constructor(
    category: string,
    direction: NoteDirection,
    account: string | null,
    amount: BigInt | null,
    assetId: string | null,
    timestamp: Date,
    note: string | null,
  ) {
    this.timestamp = timestamp;
    this.direction = direction;
    this.category = category;
    this.account = account;
    this.amount = amount;
    this.assetId = assetId;
    this.note = note;
  }
  equals(other: Note): boolean {
    return (
      this.timestamp.getTime() === other.timestamp.getTime() &&
      this.account === other.account &&
      this.note === other.note &&
      this.direction === other.direction &&
      this.category === other.category &&
      this.amount === other.amount &&
      this.assetId === other.assetId
    );
  }
}

export const parseCall = (call, timestamp, ownAddress, ss58format): Note => {
  if (call.isBalanceShield) {
    const typedCall = call.asBalanceShield;
    console.debug(
      `[${formatMoment(timestamp?.toNumber())}] balance shield: ${typedCall}`,
    );
    const to = encodeAddress(typedCall[1], ss58format);
    return new Note(
      "Shield",
      NoteDirection.Incoming,
      to,
      BigInt(typedCall[2]),
      null,
      new Date(timestamp?.toNumber()),
      null,
    );
  } else if (call.isBalanceUnshield) {
    const typedCall = call.asBalanceUnshield;
    console.debug(
      `[${formatMoment(timestamp?.toNumber())}] balance unshield: ${typedCall}`,
    );
    const to = encodeAddress(typedCall[1], ss58format);
    return new Note(
      "Unshield",
      NoteDirection.Outgoing,
      to,
      BigInt(typedCall[2]),
      null,
      new Date(timestamp?.toNumber()),
      null,
    );
  } else if (call.isBalanceTransfer) {
    const typedCall = call.asBalanceTransfer;
    console.debug(
      `[${formatMoment(timestamp?.toNumber())}] balance transfer: ${typedCall}`,
    );
    const from = encodeAddress(typedCall[0], ss58format);
    const to = encodeAddress(typedCall[1], ss58format);
    if (from === ownAddress) {
      return new Note(
        "Outgoing Transfer",
        NoteDirection.Outgoing,
        to,
        BigInt(typedCall[2]),
        null,
        new Date(timestamp?.toNumber()),
        null,
      );
    } else if (to === ownAddress) {
      return new Note(
        "Incoming Transfer",
        NoteDirection.Incoming,
        from,
        BigInt(typedCall[2]),
        null,
        new Date(timestamp?.toNumber()),
        null,
      );
    } else {
      console.error(
        `[${formatMoment(timestamp?.toNumber())}] unknown relation to transfer: ${typedCall}`,
      );
    }
  } else if (call.isAssetsTransfer) {
    const typedCall = call.asAssetsTransfer;
    console.debug(
      `[${formatMoment(timestamp?.toNumber())}] assets transfer: ${typedCall}`,
    );
    const from = encodeAddress(typedCall[0], ss58format);
    //console.debug(`asset id: ${typedCall[2]} => ${String(typedCall[2])}  `);
    const to = encodeAddress(typedCall[1], ss58format);
    if (from === ownAddress) {
      return new Note(
        "Outgoing Transfer",
        NoteDirection.Outgoing,
        to,
        BigInt(typedCall[3]),
        String(typedCall[2]),
        new Date(timestamp?.toNumber()),
        null,
      );
    } else if (to === ownAddress) {
      return new Note(
        "Incoming Transfer",
        NoteDirection.Incoming,
        from,
        BigInt(typedCall[3]),
        String(typedCall[2]),
        new Date(timestamp?.toNumber()),
        null,
      );
    } else {
      console.error(
        `[${formatMoment(timestamp?.toNumber())}] unknown relation to transfer: ${typedCall}`,
      );
    }
  } else if (call.isBalanceTransferWithNote) {
    const typedCall = call.asBalanceTransferWithNote;
    console.debug(
      `[${formatMoment(timestamp?.toNumber())}] balance transfer with note: ${typedCall}`,
    );
    const from = encodeAddress(typedCall[0], ss58format);
    const to = encodeAddress(typedCall[1], ss58format);
    if (from === ownAddress) {
      return new Note(
        "Outgoing Transfer",
        NoteDirection.Outgoing,
        to,
        BigInt(typedCall[2]),
        null,
        new Date(timestamp?.toNumber()),
        typedCall[3].toString(),
      );
    } else if (to === ownAddress) {
      return new Note(
        "Incoming Transfer",
        NoteDirection.Incoming,
        from,
        BigInt(typedCall[2]),
        null,
        new Date(timestamp?.toNumber()),
        typedCall[3].toString(),
      );
    } else {
      console.error(
        `[${formatMoment(timestamp?.toNumber())}] unknown relation to transfer: ${typedCall}`,
      );
    }
  } else if (call.isSendNote) {
    const typedCall = call.asSendNote;
    console.debug(
      `[${formatMoment(timestamp?.toNumber())}] send note: ${typedCall}`,
    );
    const from = encodeAddress(typedCall[0], ss58format);
    const to = encodeAddress(typedCall[1], ss58format);
    if (from === ownAddress) {
      return new Note(
        "Outgoing Note",
        NoteDirection.Outgoing,
        to,
        BigInt(0),
        null,
        new Date(timestamp?.toNumber()),
        typedCall[2].toString(),
      );
    } else if (to === ownAddress) {
      return new Note(
        "Incoming Note",
        NoteDirection.Incoming,
        from,
        BigInt(0),
        null,
        new Date(timestamp?.toNumber()),
        typedCall[2].toString(),
      );
    } else {
      console.error(
        `[${formatMoment(timestamp?.toNumber())}] unknown relation to transfer: ${typedCall}`,
      );
    }
  } else if (call.isGuessTheNumber) {
    const typedCall = call.asGuessTheNumber.asGuess;
    console.debug(
      `[${formatMoment(timestamp?.toNumber())}] guess the number: ${typedCall}`,
    );
    return new Note(
      `Submit Guess (${typedCall[1]})`,
      NoteDirection.None,
      null,
      null,
      null,
      new Date(timestamp?.toNumber()),
      null,
    );
  } else if (call.isAddSessionProxy) {
    const typedCall = call.asAddSessionProxy;
    const proxy = encodeAddress(typedCall[1], ss58format);
    console.debug(
      `[${formatMoment(timestamp?.toNumber())}] add session proxy: ${typedCall}`,
    );
    return new Note(
      `Add Session Proxy (${typedCall[2].role})`,
      NoteDirection.None,
      proxy,
      null,
      null,
      new Date(timestamp?.toNumber()),
      null,
    );
  } else {
    console.error(
      `[${formatMoment(timestamp?.toNumber())}] unknown call: ${call}`,
    );
  }
};
