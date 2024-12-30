import { TableRow, TableCell } from "@mui/material";
import { Transaction } from "../../types/transactions";

type TransactionItemProps = {
  transaction: Transaction;
  columns: (keyof Transaction)[];
};

const TransactionItem = ({ transaction, columns }: TransactionItemProps) => {
  const formatValue = (value: any, column: keyof Transaction) => {
    return column === "createdAt"
      ? new Date(value).toLocaleDateString()
      : value;
  };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      {columns.map((column) => (
        <TableCell key={column}>
          {formatValue(transaction[column], column)}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TransactionItem;
