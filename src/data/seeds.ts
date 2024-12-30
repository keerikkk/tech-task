import { Transaction } from "../types/transactions";

export const displayedColumns: Record<keyof Transaction, string> = {
  id: "ID",
  type: "Операція",
  from: "Валюта 1",
  amountFrom: "Сума 1",
  to: "Валюта 2",
  amountTo: "Сума 2",
  rate: "Курс",
  createdAt: "Дата",
  client: "Клієнт",
};

export const seeds: Transaction[] = [
  {
    id: "1",
    type: "buy",
    from: "EUR",
    amountFrom: 400,
    to: "UAH",
    amountTo: 16000,
    rate: 40,
    createdAt: new Date(),
    client: "1",
  },
  {
    id: "2",
    type: "buy",
    from: "USD",
    amountFrom: 100,
    to: "UAH",
    amountTo: 4100,
    rate: 41,
    createdAt: new Date(),
    client: "1",
  },
  {
    id: "3",
    type: "sell",
    from: "USD",
    amountFrom: 100,
    to: "EUR",
    amountTo: 80,
    rate: 0.8,
    createdAt: new Date(),
    client: "1",
  },
];

export const currencyRates = {
  UAH: {
    USD: 41,
    EUR: 40,
  },
  USD: {
    UAH: 0.24,
    EUR: 0.95,
  },
  EUR: {
    UAH: 24,
    USD: 1.05,
  },
};
