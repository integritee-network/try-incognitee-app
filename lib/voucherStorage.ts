export class Voucher {
  timestamp: Date;
  shard: string;
  address: string;
  seed: string;
  url: string;
  amount: number;
  note: string | null;
  constructor(
    timestamp: Date,
    shard: string,
    address: string,
    seed: string,
    url: string,
    amount: number,
    note: string | null,
  ) {
    this.timestamp = timestamp;
    this.shard = shard;
    this.address = address;
    this.seed = seed;
    this.url = url;
    this.amount = amount;
    this.note = note;
  }
  equals(other: Voucher): boolean {
    return this.url === other.url;
  }
}

const parseVoucher = (data: any): Voucher => {
  return new Voucher(
    new Date(data.timestamp),
    data.shard,
    data.address,
    data.seed,
    data.url,
    data.amount,
    data.note,
  );
};

export const storeVoucher = (voucher: Voucher) => {
  const vouchersMap = JSON.parse(localStorage.getItem("vouchers") || "{}");
  if (!vouchersMap[voucher.shard]) {
    vouchersMap[voucher.shard] = [];
  }
  vouchersMap[voucher.shard].push(voucher);
  localStorage.setItem("vouchers", JSON.stringify(vouchersMap));
};

export const getStoredVouchers = (shard: string): Voucher[] => {
  const vouchersMap = JSON.parse(localStorage.getItem("vouchers") || "{}");
  const vouchers = vouchersMap[shard] || [];
  return vouchers.map((v: any) => parseVoucher(v));
};

export const forgetAllVouchersForShard = (shard: string) => {
  const vouchersMap = JSON.parse(localStorage.getItem("vouchers") || "{}");
  delete vouchersMap[shard];
  localStorage.setItem("vouchers", JSON.stringify(vouchersMap));
};

export const forgetVoucherForShard = (voucher: Voucher, shard: string) => {
  const vouchersMap = JSON.parse(localStorage.getItem("vouchers") || "{}");
  const vouchersForShard = vouchersMap[shard] || [];
  vouchersMap[shard] = vouchersForShard
    .map((v: any) => parseVoucher(v))
    .filter((v: Voucher) => !v.equals(voucher));
  localStorage.setItem("vouchers", JSON.stringify(vouchersMap));
};
