import React from 'react';
import { Calendar, MessageCircle, FileText, Clock, Heart, TrendingUp } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const ClientDashboard: React.FC = () => {
  const { user } = useAuth();

  const upcomingAppointments = [
    {
      id: 1,
      therapist: 'Dr. Michael Chen',
      date: '2024-01-16',
      time: '2:00 PM',
      type: 'Individual Therapy'
    },
    {
      id: 2,
      therapist: 'Dr. Sarah Wilson',
      date: '2024-01-18',
      time: '10:30 AM',
      type: 'Group Session'
    }
  ];

  const recentMessages = [
    {
      id: 1,
      from: 'Dr. Michael Chen',
      message: 'Great progress in our last session. Remember to practice the breathing exercises.',
      time: '2 hours ago'
    },
    {
      id: 2,
      from: 'Care Team',
      message: 'Your wellness report is ready for review.',
      time: '1 day ago'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.name?.split(' ')[0]}
        </h1>
        <p className="text-gray-600">Here's your wellness overview for today</p>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Next Session</p>
              <p className="text-lg font-semibold text-gray-900">Tomorrow</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-teal-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-teal-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Progress</p>
              <p className="text-lg font-semibold text-gray-900">Improving</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Mood Today</p>
              <p className="text-lg font-semibold text-gray-900">Good</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Session Hours</p>
              <p className="text-lg font-semibold text-gray-900">12.5</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              Upcoming Appointments
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{appointment.therapist}</p>
                    <p className="text-sm text-gray-500">{appointment.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{appointment.date}</p>
                    <p className="text-sm text-gray-500">{appointment.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Schedule New Appointment
            </button>
          </div>
        </div>

        {}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2 text-teal-600" />
              Recent Messages
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div key={message.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium text-gray-900">{message.from}</p>
                    <p className="text-xs text-gray-500">{message.time}</p>
                  </div>
                  <p className="text-sm text-gray-600">{message.message}</p>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors duration-200">
              View All Messages
            </button>
          </div>
        </div>
      </div>

      {}
      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-purple-600" />
              Resources & Tools
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <h3 className="font-medium text-gray-900 mb-1">Wellness Journal</h3>
                <p className="text-sm text-gray-500">Track your daily mood and thoughts</p>
              </button>
              <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <h3 className="font-medium text-gray-900 mb-1">Breathing Exercises</h3>
                <p className="text-sm text-gray-500">Guided mindfulness sessions</p>
              </button>
              <button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <h3 className="font-medium text-gray-900 mb-1">Progress Reports</h3>
                <p className="text-sm text-gray-500">View your therapy progress</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;