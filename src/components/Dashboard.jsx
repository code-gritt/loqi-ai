import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(false);

  // Dummy data for charts
  const dashboardData = [
    { name: "Jan", users: 4200, apiCalls: 5400 },
    { name: "Feb", users: 3500, apiCalls: 4300 },
    { name: "Mar", users: 3000, apiCalls: 6200 },
    { name: "Apr", users: 4000, apiCalls: 7100 },
    { name: "May", users: 2500, apiCalls: 3800 },
    { name: "Jun", users: 3200, apiCalls: 4600 },
  ];

  const trafficData = [
    { name: "Mon", requests: 4000, sessions: 2400 },
    { name: "Tue", requests: 3000, sessions: 1800 },
    { name: "Wed", requests: 2000, sessions: 3800 },
    { name: "Thu", requests: 2780, sessions: 3908 },
    { name: "Fri", requests: 1890, sessions: 4800 },
    { name: "Sat", requests: 2390, sessions: 3200 },
    { name: "Sun", requests: 3490, sessions: 4300 },
  ];

  const engagementData = [
    { name: "Web", value: 50, color: "#ec4899" },
    { name: "Mobile", value: 30, color: "#3b82f6" },
    { name: "API", value: 20, color: "#10b981" },
  ];

  const handleTabChange = (tabId) => {
    setIsLoading(true);
    setActiveTab(tabId);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  // Dashboard content component
  const DashboardContent = () => (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Active Users",
            value: "3,215",
            change: "+14%",
            color: "text-green-500",
          },
          {
            title: "API Calls",
            value: "54,678",
            change: "+10%",
            color: "text-green-500",
          },
          {
            title: "Models Deployed",
            value: "12",
            change: "+2%",
            color: "text-green-500",
          },
          {
            title: "Conversion Rate",
            value: "4.1%",
            change: "+6%",
            color: "text-green-500",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm font-medium">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-navy dark:text-dark-text">
                  {stat.value}
                </p>
              </div>
              <div className={`text-sm font-medium ${stat.color}`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Charts */}
      <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-navy dark:text-dark-text mb-4">
          User & API Activity
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dashboardData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f0f0f0"
                className="dark:stroke-gray-700"
              />
              <XAxis
                dataKey="name"
                stroke="#6b7280"
                className="dark:stroke-gray-400"
              />
              <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--tw-bg-opacity, 1)",
                  border: "1px solid var(--tw-border-opacity, 1)",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                }}
                wrapperClassName="dark:bg-dark-card dark:border-gray-700"
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#ec4899"
                strokeWidth={3}
                dot={{ fill: "#ec4899", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#ec4899", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="apiCalls"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );

  // Sidebar Tabs
  const tabs = [
    { id: "dashboard", name: "Dashboard", icon: "📊" },
    { id: "models", name: "Models", icon: "🤖" },
    { id: "analytics", name: "Analytics", icon: "📈" },
    { id: "billing", name: "Billing", icon: "💳" },
    { id: "settings", name: "Settings", icon: "⚙️" },
    { id: "support", name: "Support", icon: "🎧" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />;
      // Add ModelsContent, AnalyticsContent, BillingContent, SettingsContent, SupportContent similarly
      default:
        return <DashboardContent />;
    }
  };

  return (
    <section className="relative py-20 bg-white dark:bg-dark-bg overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink/17 via-transparent to-blue-500/17"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-dark-text font-sora mb-4">
            Loqi AI Admin Dashboard
          </h2>
          <p className="text-lg text-dark-gray dark:text-dark-text-secondary max-w-2xl mx-auto">
            Monitor your AI models, users, and analytics all in one place
          </p>
        </div>

        <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl flex">
          {/* Sidebar */}
          <div className="w-64 bg-gray-800 p-6">
            <nav className="space-y-2">
              {tabs.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    activeTab === item.id
                      ? "bg-pink text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 bg-gray-50 dark:bg-dark-bg">
            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-pink rounded-full animate-bounce"></div>
                  <div
                    className="w-4 h-4 bg-pink rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-4 h-4 bg-pink rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <span className="ml-3 text-gray-600">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="transition-all duration-300 ease-in-out">
                {renderContent()}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
