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

const Feedback = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <CssBaseline />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar />
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Feedback & Complaints
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Manage homeowner feedback and complaints efficiently, with status tracking.
          </Typography>

          <Grid container spacing={3}>
            {/* View Feedback */}
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    View Feedback
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    Read and manage submitted feedback and complaints.
                  </Typography>
                  <Button variant="contained" color="primary">View Feedback</Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Track Complaint Status */}
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Track Complaint Status
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    Monitor and update the status of homeowner complaints.
                  </Typography>
                  <Button variant="contained" color="primary">Track Complaints</Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Submit New Feedback */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Submit New Feedback
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={2}>
                    Allow homeowners to submit new feedback or complaints.
                  </Typography>
                  <Button variant="contained" color="primary">Submit Feedback</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Feedback;