// src/App.jsx or src/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AdminLogin from "../pages/AdminPages/AdminLogin";
import AdminRegister from "../pages/AdminPages/AdminRegister";
import HomeownerLogin from "../pages/HomeownerPages/HomeownerLogin";
import HomeownerRegister from "../pages/HomeownerPages/HomeownerRegister";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Home and Main Routes */}
        <Route path="/" element={<Home />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />

        {/* Homeowner Routes */}
        <Route path="/homeowner/login" element={<HomeownerLogin />} />
        <Route path="/homeowner/register" element={<HomeownerRegister />} />

        {/* <Route path="*" element={<NotFound />} /> Uncomment if 404 page is needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
