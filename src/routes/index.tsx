import { MainLayout, ProductPage } from "@/constants/lazy-load";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProductPage />,
      },
    ],
  },
]);

export default router;
