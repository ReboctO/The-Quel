import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  MenuItem,
} from "@mui/material";
import Sidebar from "../../components/AdminSidebar";

const ServiceRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, category: "Maintenance", description: "Leaking pipe in clubhouse", status: "Pending" },
    { id: 2, category: "Security", description: "Suspicious activity near gate", status: "Resolved" },
  ]);
  const [newRequest, setNewRequest] = useState({ category: "", description: "" });

  const handleSubmit = () => {
    if (newRequest.category && newRequest.description) {
      setRequests([...requests, { ...newRequest, id: requests.length + 1, status: "Pending" }]);
      setNewRequest({ category: "", description: "" });
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <CssBaseline />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar />
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Service Request Management
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Submit and track maintenance, security, and other service requests.
          </Typography>

          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Existing Requests
            </Typography>
            <List>
              {requests.map((req) => (
                <ListItem key={req.id}>
                  <ListItemText
                    primary={`${req.category}: ${req.description}`}
                    secondary={`Status: ${req.status}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Typography variant="h6" fontWeight="bold" mb={2}>
            Submit a New Request
          </Typography>
          <TextField
            fullWidth
            select
            label="Category"
            value={newRequest.category}
            onChange={(e) => setNewRequest({ ...newRequest, category: e.target.value })}
            sx={{ mb: 2 }}
          >
            <MenuItem value="Maintenance">Maintenance</MenuItem>
            <MenuItem value="Security">Security</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            multiline
            rows={3}
            value={newRequest.description}
            onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit Request
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default ServiceRequests;
