// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/AdminSidebar";

// Import Admin Pages
import AdminDashboard from "./pages/AdminPages/AdminDashboard";
import UserManagement from "./pages/AdminPages/UserManagement";
import Announcements from "./pages/AdminPages/Announcements";
import Billing from "./pages/AdminPages/Billing";
import Facilities from "./pages/AdminPages/Facilities";
import ServiceRequests from "./pages/AdminPages/ServiceRequests";
import Documents from "./pages/AdminPages/Documents";
import Events from "./pages/AdminPages/Events";
import Feedback from "./pages/AdminPages/Feedback";
import Contacts from "./pages/AdminPages/Contacts";
import Polls from "./pages/AdminPages/Polls";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div style={{ flexGrow: 1, padding: "20px", marginLeft: "240px" }}>
          <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/announcements" element={<Announcements />} />
            <Route path="/admin/billing" element={<Billing />} />
            <Route path="/admin/facilities" element={<Facilities />} />
            <Route path="/admin/requests" element={<ServiceRequests />} />
            <Route path="/admin/documents" element={<Documents />} />
            <Route path="/admin/events" element={<Events />} />
            <Route path="/admin/feedback" element={<Feedback />} />
            <Route path="/admin/contacts" element={<Contacts />} />
            <Route path="/admin/polls" element={<Polls />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
