import React, { useState } from "react";
import { 
  Container, Typography, Grid, Card, CardContent, CardActions, 
  Button, TextField, Box, Snackbar, Alert 
} from "@mui/material";
import { Email, Sms, Delete } from "@mui/icons-material";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "Community Meeting", content: "Join us this Friday for the monthly community meeting.", date: "2025-03-30" },
    { id: 2, title: "Pool Maintenance", content: "The pool will be closed for maintenance this weekend.", date: "2025-04-01" }
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notification, setNotification] = useState({ open: false, message: "" });

  const handleAddAnnouncement = () => {
    if (title && content) {
      const newAnnouncement = {
        id: Date.now(),
        title,
        content,
        date: new Date().toISOString().split("T")[0]
      };
      setAnnouncements([...announcements, newAnnouncement]);
      setTitle("");
      setContent("");
      setNotification({ open: true, message: "Announcement posted and notifications sent!" });
    }
  };

  const handleDelete = (id) => {
    setAnnouncements(announcements.filter(item => item.id !== id));
    setNotification({ open: true, message: "Announcement deleted!" });
  };

  const handleCloseNotification = () => {
    setNotification({ open: false, message: "" });
  };

  return (
    <Container maxWidth="lg" sx={{ minHeight: "90vh", py: 4 }}>
      <Typography variant="h3" fontWeight="bold" sx={{ mb: 4 }}>
        Announcements and Notifications
      </Typography>

      {/* Add Announcement Form */}
      <Box display="flex" gap={2} mb={4} sx={{ flexWrap: "wrap" }}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleAddAnnouncement}
          sx={{ whiteSpace: "nowrap" }}
        >
          Post Announcement
        </Button>
      </Box>

      {/* Announcement Cards */}
      <Grid container spacing={4}>
        {announcements.map((item) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">{item.title}</Typography>
                <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
                  {item.content}
                </Typography>
                <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>
                  Posted on: {item.date}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Box>
                  <Button startIcon={<Email />} color="info">Email</Button>
                  <Button startIcon={<Sms />} color="success">SMS</Button>
                </Box>
                <Button 
                  startIcon={<Delete />} 
                  color="error" 
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Notification */}
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity="success"
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Announcements;
