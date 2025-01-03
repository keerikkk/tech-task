import { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormHelperText,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { seeds, currencyRates } from "../data/seeds";
import { Transaction } from "../types/transactions";

type TransactionFormProps = {
  onClose: () => void;
  setTransactions: React.Dispatch<React.SetStateAction<typeof seeds>>;
};

const TransactionForm = ({
  onClose,
  setTransactions,
}: TransactionFormProps) => {
  const [amountFrom, setAmountFrom] = useState(0);
  const [fromCurrency, setFromCurrency] =
    useState<keyof typeof currencyRates>("USD");
  const [toCurrency, setToCurrency] = useState<typeof fromCurrency>("UAH");
  const [type, setType] = useState<"buy" | "sell">("buy");
  const [client, setClient] = useState("");
  const [sumFromClient, setSumFromClient] = useState(0);

  const rate = currencyRates[fromCurrency][toCurrency];
  const amountTo = amountFrom * rate;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTransaction: Transaction = {
      id: Math.floor(Math.random() * 1000000).toString(),
      type,
      from: fromCurrency as string,
      amountFrom,
      to: toCurrency as string,
      amountTo,
      rate,
      createdAt: new Date(),
      client,
    };

    setTransactions((transactions) => [...transactions, newTransaction]);
    setAmountFrom(0);
    setSumFromClient(0);
    setClient("");
    onClose();
  };

  const change = sumFromClient - amountFrom;
  const isDisabled = amountFrom === 0 || change < 0;

  return (
    <Container maxWidth="md">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="from-currency-label">From currency</InputLabel>
              <Select
                labelId="from-currency-label"
                id="from-currency"
                value={fromCurrency}
                label="Валюта 1"
                onChange={(event) => {
                  setFromCurrency(
                    event.target.value as keyof typeof currencyRates
                  );

                  setToCurrency(
                    Object.keys(currencyRates[event.target.value])[0]
                  );
                }}
              >
                {Object.keys(currencyRates).map((currency) => (
                  <MenuItem key={currency} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="to-currency-label">To currency</InputLabel>
              <Select
                labelId="to-currency-label"
                id="to-currency"
                value={toCurrency}
                label="Валюта 2"
                onChange={(event) =>
                  setToCurrency(
                    event.target
                      .value as keyof (typeof currencyRates)[typeof fromCurrency]
                  )
                }
              >
                {Object.keys(currencyRates[fromCurrency]).map((currency) => (
                  <MenuItem key={currency} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="amount-from"
              name="amountFrom"
              type="number"
              value={amountFrom}
              onChange={(event) => setAmountFrom(Number(event.target.value))}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              disabled
              fullWidth
              id="amount-to"
              name="amountTo"
              type="number"
              value={amountTo}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="type-label">Type</InputLabel>
              <Select
                labelId="type-label"
                id="type"
                value={type}
                label="Type"
                onChange={(event) =>
                  setType(event.target.value as "buy" | "sell")
                }
              >
                <MenuItem value="buy">Покупка</MenuItem>
                <MenuItem value="sell">Продаж</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="sum-from-client"
              label="Сума від клієнта"
              name="sumFromClient"
              type="number"
              value={sumFromClient}
              onChange={(event) => setSumFromClient(Number(event.target.value))}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="client"
              label="Клієнт"
              name="client"
              type="text"
              value={client}
              onChange={(event) => setClient(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Сума до сплати: {amountFrom.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Здача: {(sumFromClient - amountFrom).toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={isDisabled}
        >
          Додати
        </Button>
        <FormHelperText sx={{ textAlign: "center" }}>
          {isDisabled
            ? "Будь ласка, перевірте суму від клієнта"
            : "Будь ласка, заповніть всі поля, щоб додати транзакцію"}
        </FormHelperText>
      </Box>
    </Container>
  );
};

export default TransactionForm;
