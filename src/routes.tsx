import { useRoutes } from "react-router-dom";
import { DashboardLayout } from "./packages";
import { AddItem, ItemList, Page404 } from "./pages";

export const RouteList: React.FC = () => {
  return useRoutes([
    {
      path: "/*",
      element: <Page404 />,
    },
    {
      element: <DashboardLayout />,
      children: [
        {
          path: "/",
          element: <>Home</>,
        },
        {
          path: "/add-item",
          element: <AddItem />,
        },
        {
          path: "/item-list",
          element: <ItemList />,
        },
      ],
    },
  ]);
};
