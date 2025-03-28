import React from "react";
import { Typography, Container, Box, Card, CardContent, Grid, Button } from "@mui/material";
import { People, AdminPanelSettings, Home } from "@mui/icons-material";

const UserManagement = () => {
  return (
    <Container maxWidth="lg" style={{ minHeight: "100vh", padding: "4rem 0" }}>
      
      {/* Title Section */}
      <Box textAlign="center" mb={4}>
        <Typography 
          variant="h3" 
          style={{ fontWeight: "bold", color: "#2c3e50", marginBottom: "1rem" }}
        >
          User Management
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Manage user accounts and profiles for homeowners, administrators, and subdivision staff.
        </Typography>
      </Box>

      {/* Cards Section */}
      <Grid container spacing={4}>
        {/* Homeowners Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent style={{ textAlign: "center" }}>
              <Home style={{ fontSize: 60, color: "#3498db" }} />
              <Typography variant="h5" fontWeight="bold" mt={2}>
                Homeowners
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={1}>
                View and manage homeowner profiles and contact details.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: "1rem" }}>
                View
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Administrators Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent style={{ textAlign: "center" }}>
              <AdminPanelSettings style={{ fontSize: 60, color: "#e67e22" }} />
              <Typography variant="h5" fontWeight="bold" mt={2}>
                Administrators
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={1}>
                Manage admin accounts and privileges.
              </Typography>
              <Button variant="contained" color="secondary" style={{ marginTop: "1rem" }}>
                Manage
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Staff Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent style={{ textAlign: "center" }}>
              <People style={{ fontSize: 60, color: "#27ae60" }} />
              <Typography variant="h5" fontWeight="bold" mt={2}>
                Subdivision Staff
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={1}>
                Oversee staff accounts and roles.
              </Typography>
              <Button variant="contained" color="success" style={{ marginTop: "1rem" }}>
                Manage
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserManagement;
