import { useExpensesQuery } from "../../features/expenses/queries";

function ExpenseListPage() {
  const { data, isLoading, isError, refetch } = useExpensesQuery();

  return (
    <div>
      <h1>ExpenseListPage</h1>
    </div>
  );
}

export default ExpenseListPage;
