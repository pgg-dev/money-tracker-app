import { createBrowserRouter } from "react-router";
import { ExpenseListPage, HomePage } from "@/pages";
import { Layout } from "./layout";

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
    ],
  },
]);
