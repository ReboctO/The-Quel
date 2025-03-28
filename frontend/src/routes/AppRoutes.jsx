import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

// Admin Pages
import AdminLogin from "../pages/AdminPages/AdminLogin";
import AdminRegister from "../pages/AdminPages/AdminRegister";
import AdminDashboard from "../pages/AdminPages/AdminDashboard";
import UserManagement from "../pages/AdminPages/UserManagement";
import Announcements from "../pages/AdminPages/Announcements";
import Billing from "../pages/AdminPages/Billing";
import Facilities from "../pages/AdminPages/Facilities";
import ServiceRequests from "../pages/AdminPages/ServiceRequests";
import Documents from "../pages/AdminPages/Documents";
import CommunityForum from "../pages/AdminPages/CommunityForum";
import Security from "../pages/AdminPages/Security";
import Events from "../pages/AdminPages/Events";
import Feedback from "../pages/AdminPages/Feedback";
import Contacts from "../pages/AdminPages/Contacts";
import Reports from "../pages/AdminPages/Reports";
import Polls from "../pages/AdminPages/Polls";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />

        {/* Admin Dashboard with Nested Routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="users" element={<UserManagement />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="billing" element={<Billing />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="requests" element={<ServiceRequests />} />
          <Route path="documents" element={<Documents />} />
          <Route path="forum" element={<CommunityForum />} />
          <Route path="security" element={<Security />} />
          <Route path="events" element={<Events />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="reports" element={<Reports />} />
          <Route path="polls" element={<Polls />} />
        </Route>

        {/* 404 Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
