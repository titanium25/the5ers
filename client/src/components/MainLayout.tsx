import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./SideBar";

const MainLayout = () => {
  return (
    <Box component="main" sx={{ display: "flex" }}>
      <Box component="nav">
        <Sidebar />
      </Box>
      <Box
        sx={{
          flex: "1 1 auto",
          padding: 0,
          height: "100dvh",
          display: "flex",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
