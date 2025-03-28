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

const Contacts = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <CssBaseline />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar />
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Contact Directory
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            List of important subdivision contacts such as the homeowners' association, security office, and maintenance team.
          </Typography>

          <Grid container spacing={3}>
            {/* Homeowners' Association */}
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Homeowners' Association
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    Contact details of HOA representatives.
                  </Typography>
                  <Button variant="contained" color="primary">View Contacts</Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Security Office */}
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Security Office
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    Get in touch with the subdivision security team.
                  </Typography>
                  <Button variant="contained" color="primary">View Contacts</Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Maintenance Team */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Maintenance Team
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    Reach out for maintenance-related concerns.
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

export default Contacts;
