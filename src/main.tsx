import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@ant-design/v5-patch-for-react-19";

import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./layouts/Layout.tsx";
import { CounterPage } from "./pages/CounterPage/CounterPage.tsx";
import { TodoPage } from "./pages/TodoPage/TodoPage.tsx";
import { CoffeePage } from "./pages/CoffeePage/CoffeePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dev",
    element: <Layout />,
    children: [
      {
        path: "counter",
        element: <CounterPage />,
      },
      {
        path: "easy-todo",
        element: <TodoPage />,
      },
      {
        path: "coffee-app",
        element: <CoffeePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
