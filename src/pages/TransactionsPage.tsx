import { Box, Button, Container, Modal } from "@mui/material";
import TransactionList from "../components/TransactionList/TransactionList";
import { seeds } from "../data/seeds";
import { useState } from "react";
import TransactionForm from "../components/TransactionForm";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState(seeds);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "0 auto",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          margin: "10px",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button variant="contained" color="primary">
            Пошук
          </Button>
          <Button variant="contained" color="primary">
            Фільтр
          </Button>
        </Box>

        <Button variant="contained" color="success" onClick={handleOpen}>
          Додати
        </Button>
      </Box>
      <TransactionList transactions={transactions} />
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflow: "auto" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <TransactionForm
            onClose={handleClose}
            setTransactions={setTransactions}
          />
        </Box>
      </Modal>
    </Container>
  );
};

export default TransactionsPage;
