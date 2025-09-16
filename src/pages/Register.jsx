import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { request, gql } from "graphql-request";
import { useAuthStore } from "../store/store";
import Loader from "../components/Loader";

const REGISTER_MUTATION = gql`
  mutation Register($email: String!, $username: String!, $password: String!) {
    register(email: $email, username: $username, password: $password)
  }
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setLoading, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await request(
        "https://loqi-ai-backend.onrender.com/graphql",
        REGISTER_MUTATION,
        { email, username, password }
      );
      navigate("/login");
    } catch (err) {
      setError(err.response?.errors[0]?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-navy transition-colors duration-300 px-4">
      {isLoading && <Loader />}
      <div className="bg-white dark:bg-dark-card rounded-2xl p-6 sm:p-8 shadow-lg max-w-md w-full transition-colors duration-300">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-sora text-center">
          Register for Loqi AI
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-pink focus:border-pink transition-all"
            required
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
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
            Register
          </button>
        </form>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-pink hover:underline">
            Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default Register;
