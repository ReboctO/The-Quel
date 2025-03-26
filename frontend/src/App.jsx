import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/loginPage";
import AdminDashboard from "./pages/DashboardAdmin";
import HomeownerDashboard from "./pages/DashboardHomeowner";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/homeowner" element={<HomeownerDashboard />} />
        {/* <Route path="*" element={<NotFound />} /> Catch-all route */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
