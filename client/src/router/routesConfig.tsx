import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import {
  Home,
  ShowChart,
  PieChart,
  TrendingUp,
  AttachMoney,
  Settings,
} from "@mui/icons-material"; // Import necessary icons

// Lazy load the components
const HomePage = lazy(() => import("../pages/Home"));
const StocksPage = lazy(() => import("../pages/Stocks"));
const OptionsPage = lazy(() => import("../pages/Options"));
const FuturesPage = lazy(() => import("../pages/Futures"));
const BondsPage = lazy(() => import("../pages/Bonds"));
const SettingsPage = lazy(() => import("../pages/Settngs"));
const LogoutPage = lazy(() => import("../pages/Logout")); 

type CustomRoute = {
  path: string;
  element: React.ReactNode;
  label: string;
  icon: React.ReactNode;
};

const routesConfig: CustomRoute[] = [
  {
    path: "/",
    element: <HomePage />,
    label: "Dashboard",
    icon: <Home />,
  },
  {
    path: "/stocks",
    element: <StocksPage />,
    label: "Stocks",
    icon: <TrendingUp />,
  },
  {
    path: "/options",
    element: <OptionsPage />,
    label: "Options",
    icon: <ShowChart />,
  },
  {
    path: "/futures",
    element: <FuturesPage />,
    label: "Futures",
    icon: <PieChart />,
  },
  {
    path: "/bonds",
    element: <BondsPage />,
    label: "Bonds",
    icon: <AttachMoney />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
    label: "Settings",
    icon: <Settings />,
  },
  {
    path: "/logout",
    element: <LogoutPage />, 
    label: "Logout",
    icon: <Settings />, 
  },
];

export const reactRouterConfig: RouteObject[] = routesConfig.map((route) => ({
  path: route.path,
  element: route.element,
}));

export default routesConfig;
