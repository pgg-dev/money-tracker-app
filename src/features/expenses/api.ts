import apiClient from "@/shared/apiClient";
import type { Expense } from "./types";

export const fetchExpenses = async (): Promise<Expense[]> => {
  const res = await apiClient.get("/expenses");
  return res.data;
};
