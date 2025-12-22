import apiClient from "@/shared/apiClient";
import { useQuery } from "@tanstack/react-query";

const fetchExpenseById = async (id: string) => {
  const { data } = await apiClient.get(`/expenses/${id}`);
  return data;
};

export const useExpenseDetail = (id: string) => {
  return useQuery({
    queryKey: ["expense", id],
    queryFn: () => fetchExpenseById(id),
    enabled: !!id,
  });
};
