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
    if (!token) return navigate("/login");

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
      } catch {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    if (!user) fetchUser();
  }, [token, user, navigate, setUser, setLoading]);

  if (!user) return null;

  return (
    <section className="min-h-screen pt-24 bg-gray-50 dark:bg-navy transition-colors duration-300 px-4 sm:px-6 lg:px-8">
      {isLoading && <Loader />}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 font-sora">
          Welcome, {user.username}!
        </h1>

        <div className="bg-white dark:bg-dark-card rounded-2xl p-6 sm:p-8 shadow-lg transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Generate Code
          </h2>
          <textarea
            placeholder="Enter your prompt..."
            className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg mb-4 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-pink focus:border-pink transition-all"
          />
          <button className="w-full sm:w-auto bg-pink text-white py-3 px-6 rounded-lg font-medium hover:bg-pink/90 transition-colors duration-300">
            Generate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
