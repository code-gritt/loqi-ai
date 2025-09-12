import React, { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (tabId) => {
    setIsLoading(true);
    setActiveTab(tabId);
    // Simulate loading time for better UX
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
          { title: 'Total Users', value: '2,847', change: '+12%', color: 'text-green-500' },
          { title: 'Revenue', value: '$24,567', change: '+8%', color: 'text-green-500' },
          { title: 'Orders', value: '1,234', change: '-3%', color: 'text-red-500' },
          { title: 'Conversion', value: '3.2%', change: '+5%', color: 'text-green-500' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-navy">{stat.value}</p>
              </div>
              <div className={`text-sm font-medium ${stat.color}`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Area */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-navy mb-4">Analytics Overview</h3>
        <div className="h-64 bg-gradient-to-r from-pink/10 to-blue-500/10 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">📈</div>
            <p className="text-gray-600">Interactive charts and graphs</p>
            <p className="text-sm text-gray-500">Real-time data visualization</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-navy mb-4">Recent Users</h3>
          <div className="space-y-3">
            {[
              { name: 'John Doe', email: 'john@example.com', time: '2 min ago' },
              { name: 'Jane Smith', email: 'jane@example.com', time: '5 min ago' },
              { name: 'Mike Johnson', email: 'mike@example.com', time: '10 min ago' }
            ].map((user, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-pink rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-navy">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <span className="text-xs text-gray-500">{user.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-navy mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {[
              { name: 'Add New User', icon: '👤' },
              { name: 'Generate Report', icon: '📊' },
              { name: 'Send Newsletter', icon: '📧' },
              { name: 'Update Settings', icon: '⚙️' }
            ].map((action, index) => (
              <button
                key={index}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg">{action.icon}</span>
                <span className="text-navy font-medium">{action.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  // Users content component
  const UsersContent = () => (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-navy">User Management</h2>
        <button className="bg-pink text-white px-4 py-2 rounded-lg hover:bg-pink/90 transition-colors">
          Add New User
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-4">
            <input 
              type="text" 
              placeholder="Search users..." 
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink/50"
            />
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink/50">
              <option>All Users</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
                { name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
                { name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'Inactive' },
                { name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Moderator', status: 'Active' }
              ].map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-pink rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-medium">{user.name.charAt(0)}</span>
                      </div>
                      <span className="font-medium text-navy">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-pink hover:text-pink/80 text-sm font-medium">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  // Analytics content component
  const AnalyticsContent = () => (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-navy mb-2">Analytics Dashboard</h2>
        <p className="text-gray-600">Track your application performance and user behavior</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-navy mb-4">Traffic Overview</h3>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-gray-600">Traffic Analytics Chart</p>
              <p className="text-sm text-gray-500">Page views, sessions, and bounce rate</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-navy mb-4">User Engagement</h3>
          <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">👥</div>
              <p className="text-gray-600">Engagement Metrics</p>
              <p className="text-sm text-gray-500">Time on site, pages per session</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-navy">Page Views</h4>
            <span className="text-2xl">📄</span>
          </div>
          <div className="text-3xl font-bold text-navy mb-2">45,678</div>
          <div className="text-sm text-green-600">+12.5% from last month</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-navy">Unique Visitors</h4>
            <span className="text-2xl">👤</span>
          </div>
          <div className="text-3xl font-bold text-navy mb-2">12,345</div>
          <div className="text-sm text-green-600">+8.2% from last month</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-navy">Conversion Rate</h4>
            <span className="text-2xl">🎯</span>
          </div>
          <div className="text-3xl font-bold text-navy mb-2">3.2%</div>
          <div className="text-sm text-red-600">-0.5% from last month</div>
        </div>
      </div>
    </>
  );

  // Settings content component
  const SettingsContent = () => (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-navy mb-2">Settings</h2>
        <p className="text-gray-600">Manage your application configuration</p>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-navy mb-4">General Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Application Name</label>
              <input 
                type="text" 
                defaultValue="Larafast Dashboard" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea 
                rows={3}
                defaultValue="A powerful Laravel development toolkit"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink/50"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-navy mb-4">Email Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-navy">Email Notifications</h4>
                <p className="text-sm text-gray-600">Receive email notifications for important events</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-navy">Marketing Emails</h4>
                <p className="text-sm text-gray-600">Receive updates about new features and tips</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-navy mb-4">Security Settings</h3>
          <div className="space-y-4">
            <button className="bg-pink text-white px-4 py-2 rounded-lg hover:bg-pink/90 transition-colors">
              Change Password
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors ml-4">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>
    </>
  );

  // Payments content component
  const PaymentsContent = () => (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-navy">Payment Management</h2>
        <button className="bg-pink text-white px-4 py-2 rounded-lg hover:bg-pink/90 transition-colors">
          Add Payment Method
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-navy mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            {[
              { id: '#1234', amount: '$99.00', status: 'Completed', date: '2024-01-15' },
              { id: '#1235', amount: '$129.00', status: 'Pending', date: '2024-01-14' },
              { id: '#1236', amount: '$49.00', status: 'Completed', date: '2024-01-13' }
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-navy">{transaction.id}</p>
                  <p className="text-sm text-gray-600">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-navy">{transaction.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    transaction.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-navy mb-4">Payment Methods</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💳</span>
                <div>
                  <p className="font-medium text-navy">**** **** **** 4242</p>
                  <p className="text-sm text-gray-600">Expires 12/25</p>
                </div>
              </div>
              <button className="text-pink hover:text-pink/80 text-sm">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏦</span>
                <div>
                  <p className="font-medium text-navy">Bank Account</p>
                  <p className="text-sm text-gray-600">****1234</p>
                </div>
              </div>
              <button className="text-pink hover:text-pink/80 text-sm">Edit</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-navy mb-4">Billing Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-navy mb-2">$277</div>
            <div className="text-sm text-gray-600">Total Revenue</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-navy mb-2">3</div>
            <div className="text-sm text-gray-600">Active Subscriptions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-navy mb-2">$92</div>
            <div className="text-sm text-gray-600">Average Order</div>
          </div>
        </div>
      </div>
    </>
  );

  // Reports content component
  const ReportsContent = () => (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-navy mb-2">Reports & Analytics</h2>
        <p className="text-gray-600">Generate and download detailed reports</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[
          { title: 'User Report', description: 'Detailed user analytics and behavior', icon: '👥' },
          { title: 'Sales Report', description: 'Revenue and transaction analysis', icon: '💰' },
          { title: 'Performance Report', description: 'System performance metrics', icon: '⚡' },
          { title: 'Security Report', description: 'Security events and audit logs', icon: '🔒' },
          { title: 'Custom Report', description: 'Create your own custom report', icon: '📊' },
          { title: 'Export Data', description: 'Export all data in various formats', icon: '📤' }
        ].map((report, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4">{report.icon}</div>
            <h3 className="text-lg font-semibold text-navy mb-2">{report.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{report.description}</p>
            <button className="w-full bg-pink text-white py-2 rounded-lg hover:bg-pink/90 transition-colors">
              Generate Report
            </button>
          </div>
        ))}
      </div>
    </>
  );

  // Support content component
  const SupportContent = () => (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-navy mb-2">Support Center</h2>
        <p className="text-gray-600">Get help and support for your Larafast installation</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-navy mb-4">Quick Help</h3>
          <div className="space-y-3">
            {[
              { title: 'Getting Started Guide', icon: '🚀' },
              { title: 'API Documentation', icon: '📚' },
              { title: 'Video Tutorials', icon: '🎥' },
              { title: 'Community Forum', icon: '💬' }
            ].map((item, index) => (
              <button key={index} className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-xl">{item.icon}</span>
                <span className="text-navy font-medium">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-navy mb-4">Contact Support</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-medium text-navy">Email Support</p>
                <p className="text-sm text-gray-600">support@larafast.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-medium text-navy">Live Chat</p>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-medium text-navy">Phone Support</p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-navy mb-4">Submit a Ticket</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <input 
              type="text" 
              placeholder="Brief description of your issue"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea 
              rows={4}
              placeholder="Detailed description of your issue or question"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink/50"
            />
          </div>
          <button className="bg-pink text-white px-6 py-2 rounded-lg hover:bg-pink/90 transition-colors">
            Submit Ticket
          </button>
        </div>
      </div>
    </>
  );

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'users':
        return <UsersContent />;
      case 'analytics':
        return <AnalyticsContent />;
      case 'settings':
        return <SettingsContent />;
      case 'payments':
        return <PaymentsContent />;
      case 'reports':
        return <ReportsContent />;
      case 'support':
        return <SupportContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-4">
            Beautiful Admin Dashboard
          </h2>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">
            Get a professional admin panel that's ready to use from day one
          </p>
        </div>

        <div className="relative">
          {/* Dashboard Mockup */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-pink rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <h3 className="text-white font-semibold">Larafast Dashboard</h3>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <span className="text-gray-300 text-sm">Admin User</span>
              </div>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="w-64 bg-gray-800 p-6">
                <nav className="space-y-2">
                  {[
                    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
                    { id: 'users', name: 'Users', icon: '👥' },
                    { id: 'analytics', name: 'Analytics', icon: '📈' },
                    { id: 'settings', name: 'Settings', icon: '⚙️' },
                    { id: 'payments', name: 'Payments', icon: '💳' },
                    { id: 'reports', name: 'Reports', icon: '📋' },
                    { id: 'support', name: 'Support', icon: '🎧' }
                  ].map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleTabChange(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                        activeTab === item.id
                          ? 'bg-pink text-white' 
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 bg-gray-50">
                {/* Breadcrumb */}
                <div className="mb-6">
                  <nav className="flex items-center space-x-2 text-sm">
                    <span className="text-gray-500">Dashboard</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-navy font-medium capitalize">{activeTab}</span>
                  </nav>
                </div>

                {isLoading ? (
                  <div className="flex items-center justify-center h-64">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-pink rounded-full animate-bounce"></div>
                      <div className="w-4 h-4 bg-pink rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-4 h-4 bg-pink rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
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

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
