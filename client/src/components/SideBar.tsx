import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import routesConfig from "../router/routesConfig";
import {
  Settings,
  HelpOutline,
  ExitToApp,
  Menu as MenuIcon,
  ChevronLeft,
} from "@mui/icons-material";

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false); 

  // Toggle sidebar collapse
  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: collapsed ? 80 : 280, 
        // bgcolor: "#111418",
        bgcolor: "red",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: collapsed ? 1 : 2,
        color: "#FFFFFF",
        transition: "width 0.3s", 
        overflow: "hidden",
      }}
    >
      {/* Collapse Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: collapsed ? "center" : "flex-end",
          p: 1,
        }}
      >
        <IconButton onClick={toggleSidebar} sx={{ color: "#FFFFFF" }}>
          {collapsed ? <MenuIcon /> : <ChevronLeft />}
        </IconButton>
      </Box>

      {/* Logo Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "flex-start",
          p: collapsed ? 0 : 2,
          mb: 2, 
        }}
      >
        <img
          src="https://cdn.usegalileo.ai/sdxl10/d24f1b3d-3813-47b9-9b87-8c433fff0c51.png"
          alt="Profile"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            marginRight: collapsed ? 0 : 16,
          }}
        />
        {!collapsed && (
          <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
            Portfolio
          </Typography>
        )}
      </Box>

      {/* Navigation Links */}
      <List sx={{ flexGrow: 1 }}>
        {routesConfig.map(
          (route) =>
            route.path !== "/settings" &&
            route.path !== "/logout" && (
              <ListItem
                key={route.path}
                component={Link}
                to={route.path || "/"}
                sx={{
                  marginBottom: 1,
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "#293038",
                  },
                  width: "fit-content",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ListItemIcon sx={{ color: "#FFFFFF", minWidth: 40 }}>
                  {route.icon}
                </ListItemIcon>
                {!collapsed && (
                  <ListItemText
                    primary={route.label}
                    primaryTypographyProps={{
                      variant: "body1",
                      fontWeight: 600,
                      color: "#FFFFFF",
                    }}
                  />
                )}
              </ListItem>
            )
        )}
      </List>

      {/* Divider */}
      <Divider sx={{ bgcolor: "#3c4753", marginBottom: 2 }} />

      {/* Settings and Help Links */}
      <List>
        <ListItem
          component={Link}
          to="/settings"
          sx={{
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#293038",
            },
            marginBottom: 1,
          }}
        >
          <ListItemIcon sx={{ color: "#FFFFFF", minWidth: 40 }}>
            <Settings />
          </ListItemIcon>
          {!collapsed && (
            <ListItemText
              primary="Settings"
              primaryTypographyProps={{
                variant: "body1",
                fontWeight: 600,
                color: "#FFFFFF",
              }}
            />
          )}
        </ListItem>
        <ListItem
          component={Link}
          to="/help"
          sx={{
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#293038",
            },
          }}
        >
          <ListItemIcon sx={{ color: "#FFFFFF", minWidth: 40 }}>
            <HelpOutline />
          </ListItemIcon>
          {!collapsed && (
            <ListItemText
              primary="Help"
              primaryTypographyProps={{
                variant: "body1",
                fontWeight: 600,
                color: "#FFFFFF",
              }}
            />
          )}
        </ListItem>
        {/* Logout Link */}
        <ListItem
          component={Link}
          to="/logout"
          sx={{
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#293038",
            },
          }}
        >
          <ListItemIcon sx={{ color: "#FFFFFF", minWidth: 40 }}>
            <ExitToApp />
          </ListItemIcon>
          {!collapsed && (
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{
                variant: "body1",
                fontWeight: 600,
                color: "#FFFFFF",
                maxWidth: 'fit-content',
              }}
            />
          )}
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
