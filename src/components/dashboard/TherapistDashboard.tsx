import React from 'react';
import { Users, Calendar, FileText, Clock, AlertCircle, TrendingUp } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const TherapistDashboard: React.FC = () => {
  const { user } = useAuth();

  const todaySchedule = [
    {
      id: 1,
      client: 'Sarah Johnson',
      time: '9:00 AM',
      type: 'Individual Session',
      status: 'confirmed'
    },
    {
      id: 2,
      client: 'Mark Rodriguez',
      time: '11:00 AM',
      type: 'Follow-up',
      status: 'confirmed'
    },
    {
      id: 3,
      client: 'Emma Davis',
      time: '2:00 PM',
      type: 'Initial Consultation',
      status: 'pending'
    }
  ];

  const recentNotes = [
    {
      id: 1,
      client: 'Sarah Johnson',
      date: '2024-01-15',
      summary: 'Discussed coping strategies, showed improvement in anxiety management.'
    },
    {
      id: 2,
      client: 'Mark Rodriguez',
      date: '2024-01-14',
      summary: 'Working through relationship issues, making good progress.'
    }
  ];

  const alerts = [
    {
      id: 1,
      type: 'high',
      message: 'Emma Davis requires follow-up within 24 hours',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'medium',
      message: 'Monthly report due for 3 clients',
      time: '1 day ago'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Good morning, {user?.name?.split(' ')[1] || user?.name}
        </h1>
        <p className="text-gray-600">You have 3 sessions scheduled for today</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-teal-100 rounded-lg">
              <Users className="w-6 h-6 text-teal-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Active Clients</p>
              <p className="text-lg font-semibold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Today's Sessions</p>
              <p className="text-lg font-semibold text-gray-900">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">This Week</p>
              <p className="text-lg font-semibold text-gray-900">18 Sessions</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <AlertCircle className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Pending Tasks</p>
              <p className="text-lg font-semibold text-gray-900">5</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              Today's Schedule
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {todaySchedule.map((session) => (
                <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-teal-600 font-medium">
                        {session.client.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{session.client}</p>
                      <p className="text-sm text-gray-500">{session.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{session.time}</p>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      session.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {session.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors duration-200">
              View Full Calendar
            </button>
          </div>
        </div>

        {}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
              Alerts
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                  alert.type === 'high' 
                    ? 'bg-red-50 border-red-400' 
                    : 'bg-yellow-50 border-yellow-400'
                }`}>
                  <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-purple-600" />
              Recent Session Notes
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentNotes.map((note) => (
                <div key={note.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">{note.client}</h3>
                    <span className="text-xs text-gray-500">{note.date}</span>
                  </div>
                  <p className="text-sm text-gray-600">{note.summary}</p>
                  <button className="mt-2 text-sm text-teal-600 hover:text-teal-700">
                    View full notes →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistDashboard;