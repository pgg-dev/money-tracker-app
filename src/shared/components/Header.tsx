import { useAuthStore } from "@/store/authStore";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router";

export function Header() {
  const { user, isLoggedIn, logout } = useAuthStore();

  const navigate = useNavigate();

  return isLoggedIn ? (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography>{user?.name}님</Typography>
      <Button color="inherit" onClick={logout}>
        로그아웃
      </Button>
    </Box>
  ) : (
    <Button color="inherit" onClick={() => navigate("/login")}>
      로그인
    </Button>
  );
}
