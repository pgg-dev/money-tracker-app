import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages";
import { Layout } from "./layout";
import { ExpenseDetailPage, ExpenseListPage } from "@/pages/expenses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "expenses",
        element: <ExpenseListPage />,
      },
      {
        path: "expenses/:id",
        element: <ExpenseDetailPage />,
      },
    ],
  },
]);
