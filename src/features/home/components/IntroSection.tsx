import { Box, Typography, Button, Container, Stack } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import InsightsIcon from "@mui/icons-material/Insights";
import { useAuthStore } from "@/store/authStore";

export default function IntroSection() {
  const { login } = useAuthStore();

  const handleClick = () => {
    login({
      id: "1",
      name: "mia",
      email: "mia@mail.com",
    });
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
        color: "white",
        py: 10,
        textAlign: "center",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ mb: 3 }}
        >
          <AccountBalanceWalletIcon sx={{ fontSize: 60, opacity: 0.9 }} />
          <InsightsIcon sx={{ fontSize: 60, opacity: 0.9 }} />
        </Stack>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Money Tracker
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleClick}
          sx={{
            bgcolor: "white",
            color: "primary.main",
            fontWeight: "bold",
            px: 6,
            py: 1.5,
            fontSize: "1.2rem",
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          시작하기
        </Button>
      </Container>
    </Box>
  );
}
