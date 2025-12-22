import { useAuthStore } from "@/store/authStore";
import { Button, Typography, Box } from "@mui/material";

export function Header() {
  const { user, isLoggedIn, login, logout } = useAuthStore();

  const handleAuthAction = () => {
    if (isLoggedIn) logout();

    login({ id: "1", name: "mia", email: "mia@test.com" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 2,
        borderBottom: "1px solid #ccc",
      }}
    >
      <Typography variant="h6">내 지출 관리</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {isLoggedIn && user && (
          <Typography variant="body2">{user.name}님 환영합니다!</Typography>
        )}
        <Button variant="contained" onClick={handleAuthAction}>
          {isLoggedIn ? "로그아웃" : "로그인"}
        </Button>
      </Box>
    </Box>
  );
}
