import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request, gql } from "graphql-request";
import { useAuthStore } from "../store/store";
import Loader from "../components/Loader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  vs,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const ME_QUERY = gql`
  query Me {
    me {
      id
      email
      username
    }
  }
`;

const GENERATE_CODE_MUTATION = gql`
  mutation GenerateCode($prompt: String!) {
    generateCode(prompt: $prompt)
  }
`;

const Dashboard = () => {
  const { user, token, setUser, isLoading, setLoading } = useAuthStore();
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [error, setError] = useState("");

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

  const handleGenerate = async () => {
    if (!prompt) {
      setError("Please enter a prompt");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const data = await request(
        "https://loqi-ai-backend.onrender.com/graphql",
        GENERATE_CODE_MUTATION,
        { prompt },
        { Authorization: `Bearer ${token}` }
      );
      setGeneratedCode(data.generateCode);
    } catch (err) {
      setError(err.response?.errors[0]?.message || "Failed to generate code");
    } finally {
      setLoading(false);
    }
  };

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
            placeholder="Enter your prompt (e.g., 'Generate a Python sorting function')"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg mb-4 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-pink focus:border-pink transition-all"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full sm:w-auto bg-pink text-white py-3 px-6 rounded-lg font-medium hover:bg-pink/90 transition-colors duration-300 disabled:opacity-50"
          >
            Generate
          </button>

          {generatedCode && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Generated Code
              </h3>
              <SyntaxHighlighter
                language="javascript" // Adjust dynamically if needed
                style={useAuthStore.getState().isDarkMode ? vscDarkPlus : vs}
                className="rounded-lg border border-gray-300 dark:border-gray-700"
                showLineNumbers
                wrapLines
              >
                {generatedCode}
              </SyntaxHighlighter>
              <button
                onClick={() => navigator.clipboard.writeText(generatedCode)}
                className="mt-2 bg-gray-200 dark:bg-dark-bg text-gray-900 dark:text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-dark-surface transition-colors"
              >
                Copy Code
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
