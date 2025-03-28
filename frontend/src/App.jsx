import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";  // Ensure proper casing

//imports
import AdminDashboard from "./pages/AdminPages/AdminDashboard"; 
import HomeownerDashboard from "./pages/HomeownerPages/DashboardHomeowner"; 

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Admin and Homeowner Dashboards */}
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/homeowner/*" element={<HomeownerDashboard />} />

        {/* 404 Not Found */}
        {/* Uncomment if you have a NotFound page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
