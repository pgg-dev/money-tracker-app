import { useQuery } from "@tanstack/react-query";
import { fetchExpenses } from "./api";

export const useExpensesQuery = () => {
  return useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });
};
