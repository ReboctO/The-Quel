import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, IconButton } from "@mui/material";
import {
  Menu,
  Dashboard,
  People,
  Notifications,
  Payments,
  Event,
  Security,
  RoomService,
  Feedback,
} from "@mui/icons-material";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  const menuItems = [
    { name: "Dashboard", icon: <Dashboard />, path: "/admin/dashboard" },
    { name: "User Management", icon: <People />, path: "/admin/users" },
    {
      name: "Announcements & Notifications",
      icon: <Notifications />,
      path: "/admin/announcements",
    },
    { name: "Billing & Payment", icon: <Payments />, path: "/admin/billing" },
    {
      name: "Facility Reservation",
      icon: <Event />,
      path: "/admin/reservations",
    },
    {
      name: "Service Requests",
      icon: <RoomService />,
      path: "/admin/services",
    },
    { name: "Security", icon: <Security />, path: "/admin/security" },
    { name: "Event Management", icon: <Event />, path: "/admin/events" },
    {
      name: "Feedback & Complaints",
      icon: <Feedback />,
      path: "/admin/feedback",
    },
  ];

  return (
    <>
      {/* Sidebar Toggle Button (Mobile) */}
      <IconButton className="lg:hidden p-2" onClick={toggleSidebar}>
        <Menu className="text-gray-600" />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleSidebar}>
        <div className="w-64 h-full bg-gray-900 text-white flex flex-col">
          <h2 className="text-xl font-semibold text-center py-4">
            Admin Panel
          </h2>
          <nav className="flex flex-col">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700"
              >
                {item.icon} <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </Drawer>

      {/* Sidebar for Large Screens */}
      <div className="hidden lg:flex flex-col w-64 h-screen bg-gray-900 text-white p-4">
        <h2 className="text-xl font-semibold text-center py-4">Admin Panel</h2>
        <nav className="flex flex-col">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700"
            >
              {item.icon} <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
