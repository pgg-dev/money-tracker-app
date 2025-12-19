import { EmptyState } from "@/components";
import ExpenseCard from "@/features/expenses/components";
import { useExpensesQuery } from "@/features/expenses/hooks/useExpensesQuery";
import { Button, Typography } from "@mui/material";

function ExpenseListPage() {
  const { data, isLoading, isError, refetch } = useExpensesQuery();

  if (isLoading) return <Typography>로딩 중입니다...</Typography>;

  if (isError)
    return (
      <div>
        <p>데이터를 불러오지 못했습니다.</p>
        <Button onClick={() => refetch()}>다시 시도</Button>
      </div>
    );

  if (!data) return null;

  return (
    <div>
      <h1>ExpenseListPage</h1>
      {data.length === 0 ? (
        <EmptyState />
      ) : (
        data.map((expense) => (
          <ExpenseCard key={expense.id} expense={expense} />
        ))
      )}
    </div>
  );
}

export default ExpenseListPage;
