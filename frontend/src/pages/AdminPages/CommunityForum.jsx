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
} from "@mui/material";
import Sidebar from "../../components/AdminSidebar";

const CommunityForum = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: "John Doe", message: "Welcome to the community forum!" },
    { id: 2, author: "Jane Smith", message: "Does anyone know the next HOA meeting date?" },
  ]);
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (newPost.trim() === "") return;

    const newEntry = {
      id: posts.length + 1,
      author: "Admin", // Replace with authenticated user in the future
      message: newPost,
    };
    setPosts([...posts, newEntry]);
    setNewPost("");
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <CssBaseline />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar />
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Community Forum
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Engage in discussions, share ideas, and raise concerns with other homeowners.
          </Typography>

          <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Post a Message
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Write something..."
              variant="outlined"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              sx={{ mt: 2, mb: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handlePostSubmit}>
              Post
            </Button>
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Recent Posts
            </Typography>
            <List>
              {posts.map((post) => (
                <ListItem key={post.id} divider>
                  <ListItemText primary={post.message} secondary={`Posted by ${post.author}`} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default CommunityForum;