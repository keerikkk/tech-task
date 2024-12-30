export interface Transaction {
  id: string;
  type: "buy" | "sell";
  fron: string;
  amountFrom: number;
  to: string;
  amountTo: number;
  rate: number;
  createdAt: Date;
  client: string;
}