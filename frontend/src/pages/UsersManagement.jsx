import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EventIcon from "@mui/icons-material/Event";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SecurityIcon from "@mui/icons-material/Security";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LoginIcon from "@mui/icons-material/Login";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
    {
      name: "Announcements",
      path: "/announcements",
      icon: <AnnouncementIcon />,
    },
    { name: "Billing", path: "/billing", icon: <ReceiptIcon /> },
    { name: "Events", path: "/events", icon: <EventIcon /> },
    {
      name: "Facility Reservation",
      path: "/facility-reservation",
      icon: <MeetingRoomIcon />,
    },
    { name: "Feedback", path: "/feedback", icon: <FeedbackIcon /> },
    { name: "Login", path: "/login", icon: <LoginIcon /> },
    {
      name: "Notifications",
      path: "/notifications",
      icon: <NotificationsIcon />,
    },
    { name: "Security", path: "/security", icon: <SecurityIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#1976d2",
          color: "white",
        },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            component={Link}
            to={item.path}
            sx={{ color: "white" }}
          >
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
