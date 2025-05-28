import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "@ant-design/v5-patch-for-react-19";

import "./index.css";
import { CounterPage } from "./pages/CounterPage/CounterPage.tsx";
import { TodoPage } from "./pages/TodoPage/TodoPage.tsx";
import { CoffeePage } from "./pages/CoffeePage/CoffeePage.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <CoffeePage />,
      },
      {
        path: "easy-todo",
        element: <TodoPage />,
      },
      {
        path: "counter",
        element: <CounterPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
