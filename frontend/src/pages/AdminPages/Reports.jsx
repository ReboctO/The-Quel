import React, { /*useState*/ } from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import Sidebar from "../../components/AdminSidebar";

const Reports = () => {
  // Sample Data for Reports
  const serviceRequestData = [
    { name: "Pending", count: 12 },
    { name: "In Progress", count: 5 },
    { name: "Resolved", count: 20 },
  ];

  const paymentData = [
    { name: "Paid", value: 80 },
    { name: "Unpaid", value: 20 },
  ];

  const engagementData = [
    { name: "Forum Posts", count: 45 },
    { name: "Event Registrations", count: 30 },
    { name: "Poll Votes", count: 50 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <CssBaseline />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar />
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Reports & Analytics
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Get insights on service requests, payments, and community engagement.
          </Typography>

          <Grid container spacing={3}>
            {/* Service Requests Report */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" mb={2}>
                    Service Request Status
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={serviceRequestData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#1976D2" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>

            {/* Payment Report */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" mb={2}>
                    Payment Status
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={paymentData} dataKey="value" outerRadius={100} label>
                        {paymentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>

            {/* Community Engagement Report */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" mb={2}>
                    Community Engagement
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={engagementData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#FF5722" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Reports;
