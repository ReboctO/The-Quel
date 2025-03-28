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

const Security = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <CssBaseline />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar />
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Security Features
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Manage visitor pass requests, vehicle registration, and emergency contact directories.
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Visitor Pass Requests
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    Approve or decline visitor passes.
                  </Typography>
                  <Button variant="contained" color="primary">Manage Requests</Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Vehicle Registration
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    Maintain a list of registered vehicles.
                  </Typography>
                  <Button variant="contained" color="primary">View List</Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Emergency Contacts
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    Access emergency contact information.
                  </Typography>
                  <Button variant="contained" color="primary">View Contacts</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Security;
