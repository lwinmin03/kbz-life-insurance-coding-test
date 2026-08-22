import {
  CartPage,
  MainLayout,
  OrderInfoPafe,
  OrderSuccessPage,
  ProductPage,
} from "@/constants/lazy-load";

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

      {
        path: "cart",
        element: <CartPage />,
      },

      {
        path: "order-information",
        element: <OrderInfoPafe />,
      },

      {
        path: "order-success",
        element: <OrderSuccessPage />,
      },
    ],
  },
]);

export default router;
