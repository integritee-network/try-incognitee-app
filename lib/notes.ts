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
}
