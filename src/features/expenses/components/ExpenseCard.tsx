import { Card, Typography, Stack } from "@mui/material";
import type { Expense } from "../types";

interface ExpenseCardProps {
  expense: Expense;
}

export default function ExpenseCard({ expense }: ExpenseCardProps) {
  return (
    <Card sx={{ mb: 2, p: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <div>
          <Typography variant="subtitle2">
            [{expense.category}] {expense.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {expense.date}
          </Typography>
        </div>

        <Typography fontWeight={600}>
          {expense.amount.toLocaleString()}원
        </Typography>
      </Stack>
    </Card>
  );
}
