import axios from "axios";
import type { Expense } from "./types";

export const fetchExpenses = async (): Promise<Expense[]> => {
  const res = await axios.get("/expenses");
  return res.data;
};
