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
  note: string | null;

  constructor(
    category: string,
    direction: NoteDirection,
    account: string | null,
    amount: BigInt | null,
    timestamp: Date,
    note: string | null,
  ) {
    this.timestamp = timestamp;
    this.direction = direction;
    this.category = category;
    this.account = account;
    this.amount = amount;
    this.note = note;
  }
  equals(other: Note): boolean {
    return (
      this.timestamp.getTime() === other.timestamp.getTime() &&
      this.account === other.account &&
      this.note === other.note &&
      this.direction === other.direction &&
      this.category === other.category &&
      this.amount === other.amount
    );
  }
}
