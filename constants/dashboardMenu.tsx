import { ArrowDownUp, LayoutDashboard, Package, Users } from "lucide-react";

const dashboardMenu = [
  {
    name: "Overview",
    icon: <LayoutDashboard />,
    link: "/dashboard",
  },
  {
    name: "Customers",
    icon: <Users />,
    link: "/dashboard/customers",
  },
  {
    name: "Products",
    icon: <Package />,
    link: "/dashboard/products",
  },
  {
    name: "Orders",
    icon: <ArrowDownUp />,
    link: "/dashboard/orders",
  },
];

export default dashboardMenu;
