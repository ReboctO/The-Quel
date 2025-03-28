import React from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import { Description } from "@mui/icons-material";
import Sidebar from "../../components/AdminSidebar";

const documents = [
  { name: "Community Guidelines", url: "/docs/community-guidelines.pdf" },
  { name: "HOA Meeting Minutes", url: "/docs/hoa-meeting-minutes.pdf" },
  { name: "Financial Report Q1", url: "/docs/financial-report-q1.pdf" },
];

const Documents = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <CssBaseline />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar />
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Document Management
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Access and download important subdivision documents.
          </Typography>

          <Paper sx={{ p: 2 }}>
            <List>
              {documents.map((doc, index) => (
                <ListItem key={index} divider>
                  <ListItemIcon>
                    <Description color="primary" />
                  </ListItemIcon>
                  <ListItemText>
                    <Link href={doc.url} target="_blank" rel="noopener noreferrer">
                      {doc.name}
                    </Link>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Documents;
