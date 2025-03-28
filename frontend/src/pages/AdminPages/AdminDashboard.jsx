import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import Sidebar from "../../components/AdminSidebar";
import {
  People,
  Campaign,
  Payments,
  Business,
  Description,
  Event,
  Feedback,
  ContactMail,
  Poll,
} from "@mui/icons-material";

const dashboardItems = [
  { title: "User Management", path: "/admin/users", icon: <People />, summary: "Manage user accounts" },
  { title: "Announcements", path: "/admin/announcements", icon: <Campaign />, summary: "5 new announcements" },
  { title: "Billing", path: "/admin/billing", icon: <Payments />, summary: "Track payments and invoices" },
  { title: "Facilities", path: "/admin/facilities", icon: <Business />, summary: "Manage amenities" },
  { title: "Documents", path: "/admin/documents", icon: <Description />, summary: "Access community files" },
  { title: "Events", path: "/admin/events", icon: <Event />, summary: "Upcoming community events" },
  { title: "Feedback", path: "/admin/feedback", icon: <Feedback />, summary: "User feedback and concerns" },
  { title: "Contacts", path: "/admin/contacts", icon: <ContactMail />, summary: "Community directory" },
  { title: "Polls", path: "/admin/polls", icon: <Poll />, summary: "Latest voting results" },
];

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <CssBaseline />
      <Sidebar />

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar />
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Admin Dashboard
          </Typography>

          {/* Grid of Dashboard Cards */}
          <Grid container spacing={3}>
            {dashboardItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: 150, // Ensures uniform height
                    textAlign: "center",
                    boxShadow: 2,
                    transition: "0.3s",
                    "&:hover": { boxShadow: 5, transform: "translateY(-2px)" },
                  }}
                >
                  <CardActionArea onClick={() => navigate(item.path)} sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <CardContent>
                      <Box sx={{ color: "primary.main", mb: 1 }}>{item.icon}</Box>
                      <Typography variant="h6" fontWeight="bold">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {item.summary}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
