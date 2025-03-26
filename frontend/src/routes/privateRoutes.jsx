// === src/routes/PrivateRoute.jsx ===
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const PrivateRoute = ({ children, role }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;
  if (!user || user.role !== role) return <Navigate to="/login" />;

  return children;
};

export default PrivateRoute;
