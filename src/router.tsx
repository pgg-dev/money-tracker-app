import { createBrowserRouter } from "react-router";

import { ExpenseListPage, HomePage } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/expenses",
    element: <ExpenseListPage />,
  },
]);
