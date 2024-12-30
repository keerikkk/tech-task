import TransactionList from "../components/TransactionList/TransactionList";
import { seeds } from "../data/seeds";

const TransactionsPage = () => {


	return <TransactionList transactions={seeds} />
};

export default TransactionsPage;