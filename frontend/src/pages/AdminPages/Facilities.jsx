import React from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Sidebar from "../../components/AdminSidebar";

const facilities = [
  {
    name: "Clubhouse",
    description: "A spacious clubhouse for meetings and events.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
  },
  {
    name: "Swimming Pool",
    description: "A clean and well-maintained pool for homeowners.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Tennis Court",
    description: "A professional-grade tennis court for residents.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Children's Playground",
    description: "A fun and safe area for kids to play.",
    image: "https://via.placeholder.com/300x200",
  },
];

const Facilities = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <CssBaseline />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar />
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Facilities Management
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            View and manage community amenities available for reservation.
          </Typography>

          <Grid container spacing={3}>
            {facilities.map((facility, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia component="img" height="140" image={facility.image} alt={facility.name} />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {facility.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {facility.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Facilities;
