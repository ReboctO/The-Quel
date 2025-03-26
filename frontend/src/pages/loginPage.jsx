import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email, password });
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
      if (response.data.user.role === "Admin") {
        navigate("/admin");
      } else {
        navigate("/homeowner");
      }
    } catch (error) {
      console.error("Login failed:", error.response.data);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
