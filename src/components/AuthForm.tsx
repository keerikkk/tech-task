import { Box, Button, Container } from "@mui/material";
import { useAuth } from "./AuthProvider";

const AuthForm = () => {
  const { handleLogin } = useAuth();

  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="center" mt={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ width: 200, height: 60, fontSize: 24 }}
        >
          Касир
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogin}
          sx={{ width: 200, height: 60, fontSize: 24 }}
        >
          Адмін
        </Button>
      </Box>
    </Container>
  );
};

export default AuthForm;

