import { useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login success");
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
  <div>
    <h2>Login</h2>

    <input
      placeholder="Email"
      onChange={(e) => setForm({ ...form, email: e.target.value })}
    />

    <input
      placeholder="Password"
      type="password"
      onChange={(e) => setForm({ ...form, password: e.target.value })}
    />

    <button onClick={handleLogin}>Login</button>

    <p>
      Don't have an account?{" "}
      <a href="/register">Register here</a>
    </p>
  </div>
  );
}