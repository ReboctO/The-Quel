import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import Sidebar from "../../components/AdminSidebar";

const Polls = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [voteSubmitted, setVoteSubmitted] = useState(false);

  const poll = {
    question: "Should we build a new community playground?",
    options: ["Yes", "No", "Maybe"],
  };

  const handleVote = () => {
    if (selectedOption) {
      setVoteSubmitted(true);
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <CssBaseline />
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar />
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Community Polls & Surveys
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Participate in surveys to help shape community decisions.
          </Typography>

          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                {poll.question}
              </Typography>
              {!voteSubmitted ? (
                <>
                  <RadioGroup value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                    {poll.options.map((option, index) => (
                      <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                    ))}
                  </RadioGroup>
                  <Button variant="contained" color="primary" onClick={handleVote} sx={{ mt: 2 }}>
                    Submit Vote
                  </Button>
                </>
              ) : (
                <Typography color="green" mt={2}>
                  Thank you for your response!
                </Typography>
              )}
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default Polls;
