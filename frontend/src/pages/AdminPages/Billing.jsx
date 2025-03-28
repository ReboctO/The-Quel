import React from "react";
import { useState } from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
} from "@mui/material";
import Sidebar from "../../components/AdminSidebar";

const billingData = [
  { id: 1, homeowner: "John Doe", amount: "$150", dueDate: "2025-04-10", status: "Pending" },
  { id: 2, homeowner: "Jane Smith", amount: "$200", dueDate: "2025-03-30", status: "Overdue" },
  { id: 3, homeowner: "Robert Brown", amount: "$180", dueDate: "2025-04-05", status: "Paid" },
];

const Billing = () => {
  const [bills, setBills] = useState(billingData);

  const handleMarkAsPaid = (id) => {
    setBills((prevBills) =>
      prevBills.map((bill) =>
        bill.id === id ? { ...bill, status: "Paid" } : bill
      )
    );
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <CssBaseline />
      <Sidebar />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar />
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Billing and Payment Portal
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Allow homeowners to view and pay association dues, maintenance fees, and other bills securely online.
          </Typography>

          {/* Billing Table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Homeowner</strong></TableCell>
                  <TableCell><strong>Amount</strong></TableCell>
                  <TableCell><strong>Due Date</strong></TableCell>
                  <TableCell><strong>Status</strong></TableCell>
                  <TableCell align="right"><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bills.map((bill) => (
                  <TableRow key={bill.id}>
                    <TableCell>{bill.homeowner}</TableCell>
                    <TableCell>{bill.amount}</TableCell>
                    <TableCell>{bill.dueDate}</TableCell>
                    <TableCell>
                      <Chip
                        label={bill.status}
                        color={
                          bill.status === "Paid"
                            ? "success"
                            : bill.status === "Overdue"
                            ? "error"
                            : "warning"
                        }
                      />
                    </TableCell>
                    <TableCell align="right">
                      {bill.status !== "Paid" && (
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={() => handleMarkAsPaid(bill.id)}
                        >
                          Mark as Paid
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </Box>
  );
};

export default Billing;