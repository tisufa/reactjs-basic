import { Box, Button, Container, Stack, TextField } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f0f0f0",
        padding: "1rem",
      }}
    >
      <Container
        sx={{
          background: "#fff",
          boxShadow: "0 1px 2px 0 rgba(0,0,0,0.1)",
          padding: "1rem",
          borderRadius: "0.5rem",
          display: "grid",
          gap: "1rem",
        }}
        maxWidth="md"
      >
        <Stack direction="row" spacing={2}>
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </Stack>

        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              label="Username"
              placeholder="Enter username"
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <TextField
              type="password"
              required
              label="Password"
              placeholder="Enter password"
              slotProps={{ inputLabel: { shrink: true } }}
            />
          </div>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
