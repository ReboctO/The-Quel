import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
// import Dashboard from "./pages/DashBoard";
// import UserManagement from "./pages/UsersManagement";
// import Announcements from "./pages/Announcements";
// import Billing from "./pages/Billing";
// import FacilityReservation from "./pages/FacilityReservatio";
// import ServiceRequests from "./pages/ServiceRequests";
// import Security from "./pages/Security";
// import Events from "./pages/Events";
// import Feedback from "./pages/Feedback";
// import LoginPage from "./pages/LoginPage";
// import Sidebar from "./components/common/Sidebar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/billing" element={<Billing />} />
          <Route
            path="/facility-reservation"
            element={<FacilityReservation />}
          />
          <Route path="/service-requests" element={<ServiceRequests />} />
          <Route path="/security" element={<Security />} />
          <Route path="/events" element={<Events />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}
