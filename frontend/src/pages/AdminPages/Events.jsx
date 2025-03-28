import React from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import Sidebar from "../../components/AdminSidebar";

const Events = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <CssBaseline />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar />
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Event Calendar
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Manage and display subdivision events, maintenance schedules, and community activities.
          </Typography>

          <Grid container spacing={3}>
            {/* Upcoming Events */}
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Upcoming Events
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    View and manage scheduled community events.
                  </Typography>
                  <Button variant="contained" color="primary">View Events</Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Maintenance Schedules */}
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Maintenance Schedules
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    Track and update scheduled maintenance activities.
                  </Typography>
                  <Button variant="contained" color="primary">Manage Schedules</Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Add New Event */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Add New Event
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    Create and schedule a new community event.
                  </Typography>
                  <Button variant="contained" color="primary">Create Event</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Events;
