import { useParams, useNavigate } from "react-router";
import { useExpenseDetail } from "@/features/expenses/hooks";
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ExpenseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: expense, isLoading } = useExpenseDetail(id || "");

  if (isLoading) return <CircularProgress />;

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: 2 }}
      >
        목록으로 돌아가기
      </Button>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          지출 상세 내역
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Typography color="textSecondary">날짜</Typography>
            <Typography variant="h6">{expense?.date}</Typography>
          </Box>
          <Box>
            <Typography color="textSecondary">금액</Typography>
            <Typography variant="h5" color="primary" fontWeight="bold">
              {Number(expense?.amount).toLocaleString()}원
            </Typography>
          </Box>
          <Box>
            <Typography color="textSecondary">카테고리</Typography>
            <Typography variant="body1">{expense?.category}</Typography>
          </Box>
          <Box>
            <Typography color="textSecondary">메모</Typography>
            <Typography variant="body1">
              {expense?.memo || "메모가 없습니다."}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
