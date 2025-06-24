import React from 'react';
import { LogOut, User, Shield, UserCheck } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  const getRoleIcon = () => {
    switch (user?.role) {
      case 'admin':
        return <Shield className="w-4 h-4" />;
      case 'therapist':
        return <UserCheck className="w-4 h-4" />;
      case 'client':
        return <User className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  const getRoleColor = () => {
    switch (user?.role) {
      case 'admin':
        return 'text-purple-600 bg-purple-100';
      case 'therapist':
        return 'text-teal-600 bg-teal-100';
      case 'client':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                HealthCare Portal
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {user?.avatar && (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
                />
              )}
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getRoleColor()}`}>
                  {getRoleIcon()}
                  <span className="capitalize">{user?.role}</span>
                </div>
              </div>
            </div>

            <button
              onClick={logout}
              className="inline-flex items-center space-x-2 px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;