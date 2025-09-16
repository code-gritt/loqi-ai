import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { request, gql } from "graphql-request";
import { useAuthStore } from "../store/store";
import Loader from "../components/Loader";

const ME_QUERY = gql`
  query Me {
    me {
      id
      email
      username
    }
  }
`;

const Dashboard = () => {
  const { user, token, setUser, isLoading, setLoading } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    const fetchUser = async () => {
      setLoading(true);
      try {
        const data = await request(
          "https://loqi-ai-backend.onrender.com/graphql",
          ME_QUERY,
          {},
          { Authorization: `Bearer ${token}` }
        );
        setUser(data.me);
      } catch (err) {
        console.error("Failed to fetch user", err);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    if (!user) fetchUser();
  }, [token, user, navigate, setUser, setLoading]);

  if (!user) return null;

  return (
    <section
      id="dashboard"
      className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-navy px-4 sm:px-6 lg:px-8"
    >
      {isLoading && <Loader />}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-navy dark:text-dark-text mb-8 font-sora">
          Welcome, {user.username}!
        </h2>
        <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-navy dark:text-dark-text mb-4">
            Generate Code
          </h3>
          <textarea
            placeholder="Enter your prompt (e.g., Generate a React component)"
            className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg mb-4 bg-transparent text-navy dark:text-dark-text"
          />
          <button className="bg-pink text-white px-6 py-3 rounded-lg font-medium hover:bg-pink/90 transition-all">
            Generate
          </button>
          {/* Add code output pre block here later */}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
