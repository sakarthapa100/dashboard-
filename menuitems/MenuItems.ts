import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney, MdTrendingUp, MdReport, MdGroup, MdSettings, MdHelp, MdLogout } from 'react-icons/md';
import { MenuCategory } from '@/types';

const menuItems: MenuCategory[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: MdDashboard,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: MdSupervisedUserCircle,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: MdShoppingBag,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: MdAttachMoney,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/analytics/revenue",
        icon: MdTrendingUp,
      },
      {
        title: "Reports",
        path: "/analytics/reports",
        icon: MdReport,
      },
      {
        title: "Teams",
        path: "/analytics/teams",
        icon: MdGroup,
      },
    ],
  },
  {
    title: "Users",
    list: [
      {
        title: "Settings",
        path: "/users/settings",
        icon: MdSettings,
      },
      {
        title: "Help",
        path: "/users/help",
        icon: MdHelp,
      },
      
    ],
  },
];

export default menuItems;
