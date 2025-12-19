import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";

export default function EmptyState() {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="60vh"
      gap={2}
    >
      <Typography variant="h6">아직 지출 내역이 없어요</Typography>

      <Typography variant="body2" color="text.secondary">
        첫 지출을 추가해보세요
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => navigate("/expenses/new")}
      >
        지출 추가
      </Button>
    </Box>
  );
}
