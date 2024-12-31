import { displayedColumns } from "../../data/seeds";
import { Transaction } from "../../types/transactions";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import TransactionItem from "./TransactionItem";

type TransactionListProps = {
  transactions: Transaction[];
};

const TransactionList = ({ transactions }: TransactionListProps) => {
  const columns = Object.keys(transactions[0]) as (keyof Transaction)[];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>{displayedColumns[column]}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              columns={columns}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionList;
