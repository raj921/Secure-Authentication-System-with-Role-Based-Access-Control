import React from 'react';
import { Users, Shield, BarChart3, AlertTriangle, UserPlus, Settings } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  const systemStats = [
    { label: 'Total Users', value: '156', change: '+12', trend: 'up' },
    { label: 'Active Sessions', value: '23', change: '+5', trend: 'up' },
    { label: 'System Uptime', value: '99.9%', change: '0.1%', trend: 'stable' },
    { label: 'Security Alerts', value: '2', change: '-3', trend: 'down' }
  ];

  const recentActivities = [
    {
      id: 1,
      action: 'New therapist registered',
      user: 'Dr. Emily Rodriguez',
      time: '5 minutes ago',
      type: 'user'
    },
    {
      id: 2,
      action: 'System backup completed',
      user: 'System',
      time: '1 hour ago',
      type: 'system'
    },
    {
      id: 3,
      action: 'Security audit passed',
      user: 'Security Team',
      time: '2 hours ago',
      type: 'security'
    },
    {
      id: 4,
      action: 'Database optimization',
      user: 'System',
      time: '4 hours ago',
      type: 'system'
    }
  ];

  const usersByRole = [
    { role: 'Clients', count: 89, percentage: 57 },
    { role: 'Therapists', count: 45, percentage: 29 },
    { role: 'Admins', count: 22, percentage: 14 }
  ];

  const securityAlerts = [
    {
      id: 1,
      level: 'medium',
      message: 'Unusual login pattern detected for user ID: 1247',
      time: '30 minutes ago'
    },
    {
      id: 2,
      level: 'low',
      message: 'Password policy reminder sent to 12 users',
      time: '2 hours ago'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          System Administration
        </h1>
        <p className="text-gray-600">Monitor and manage the healthcare platform</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {systemStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' :
                stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
              }`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-600" />
                User Distribution
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {usersByRole.map((userType) => (
                  <div key={userType.role}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{userType.role}</span>
                      <span className="text-sm text-gray-500">{userType.count} users</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${userType.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex space-x-3">
                <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add User
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Settings className="w-4 h-4 mr-2" />
                  Manage Roles
                </button>
              </div>
            </div>
          </div>

          {}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                Recent Activities
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`p-2 rounded-full ${
                      activity.type === 'user' ? 'bg-blue-100' :
                      activity.type === 'security' ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      {activity.type === 'user' ? (
                        <Users className="w-4 h-4 text-blue-600" />
                      ) : activity.type === 'security' ? (
                        <Shield className="w-4 h-4 text-green-600" />
                      ) : (
                        <Settings className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.user} • {activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-red-600" />
                Security Alerts
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {securityAlerts.map((alert) => (
                  <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                    alert.level === 'high' ? 'bg-red-50 border-red-400' :
                    alert.level === 'medium' ? 'bg-yellow-50 border-yellow-400' :
                    'bg-blue-50 border-blue-400'
                  }`}>
                    <div className="flex items-start">
                      <AlertTriangle className={`w-5 h-5 mr-2 mt-0.5 ${
                        alert.level === 'high' ? 'text-red-600' :
                        alert.level === 'medium' ? 'text-yellow-600' :
                        'text-blue-600'
                      }`} />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200">
                View All Alerts
              </button>
            </div>
          </div>

          {}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 text-gray-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">System Settings</p>
                      <p className="text-sm text-gray-500">Configure platform settings</p>
                    </div>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center">
                    <BarChart3 className="w-5 h-5 text-gray-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Analytics</p>
                      <p className="text-sm text-gray-500">View detailed reports</p>
                    </div>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Security Audit</p>
                      <p className="text-sm text-gray-500">Run security checks</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;