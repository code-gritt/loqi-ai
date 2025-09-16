import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { request, gql } from "graphql-request";
import Loader from "../components/Loader";
import { useAuthStore } from "../store/store";

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const ME_QUERY = gql`
  query Me {
    me {
      id
      email
      username
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setToken, setUser, setLoading, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await request(
        "https://loqi-ai-backend.onrender.com/graphql",
        LOGIN_MUTATION,
        { email, password }
      );
      const token = data.login;
      setToken(token);

      const userData = await request(
        "https://loqi-ai-backend.onrender.com/graphql",
        ME_QUERY,
        {},
        { Authorization: `Bearer ${token}` }
      );
      setUser(userData.me);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.errors[0]?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-navy transition-colors duration-300 px-4">
      {isLoading && <Loader />}
      <div className="bg-white dark:bg-dark-card rounded-2xl p-6 sm:p-8 shadow-lg max-w-md w-full transition-colors duration-300">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-sora text-center">
          Login to Loqi AI
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-pink focus:border-pink transition-all"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-pink focus:border-pink transition-all"
            required
          />
          <button
            type="submit"
            className="w-full bg-pink text-white py-3 rounded-lg font-medium hover:bg-pink/90 transition-colors duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-pink hover:underline">
            Register
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
