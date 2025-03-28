import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  Dashboard,
  People,
  Event,
  Forum,
  Settings,
  Payments,
  Description,
  CalendarToday,
  Feedback,
  Poll,
  ContactMail,
  ChevronLeft,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Sidebar toggle handler
  const toggleSidebar = () => setOpen(!open);

  // Menu items with paths
  const menuItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "/admin" },
    { text: "User Management", icon: <People />, path: "/admin/users" },
    { text: "Announcements", icon: <Event />, path: "/admin/announcements" },
    { text: "Billing", icon: <Payments />, path: "/admin/billing" },
    { text: "Facilities", icon: <Settings />, path: "/admin/facilities" },
    { text: "Service Requests", icon: <Forum />, path: "/admin/requests" },
    { text: "Documents", icon: <Description />, path: "/admin/documents" },
    { text: "Events", icon: <CalendarToday />, path: "/admin/events" },
    { text: "Feedback", icon: <Feedback />, path: "/admin/feedback" },
    { text: "Contacts", icon: <ContactMail />, path: "/admin/contacts" },
    { text: "Polls", icon: <Poll />, path: "/admin/polls" },
  ];

  return (
    <>
      {/* Toggle Button */}
      <IconButton
        onClick={toggleSidebar}
        sx={{
          position: "fixed",
          top: 10,
          left: 10,
          zIndex: 1300,
          color: "white",
          bgcolor: "primary.main",
          "&:hover": { bgcolor: "primary.dark" },
        }}
      >
        {open ? <ChevronLeft /> : <Menu />}
      </IconButton>

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={toggleSidebar}
        sx={{
          width: open ? 240 : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? 240 : 0,
            transition: "width 0.3s",
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />

        {/* User Profile Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            padding: 2,
            bgcolor: "primary.main",
            color: "white",
          }}
        >
          <Avatar src="/assets/profile-pic.jpg" alt="User" />
          <Box>
            <Typography variant="subtitle1">John Doe</Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Admin
            </Typography>
          </Box>
        </Box>

        <Divider />

        {/* Sidebar Menu */}
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  sx={{
                    "&.active": {
                      bgcolor: "primary.light",
                      color: "white",
                      "& .MuiListItemIcon-root": { color: "white" },
                    },
                    "&:hover": {
                      bgcolor: "primary.dark",
                      color: "white",
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
