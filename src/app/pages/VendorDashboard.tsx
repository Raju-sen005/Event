import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Briefcase, Calendar, BarChart3, LogOut, Sparkles } from 'lucide-react';

export const VendorDashboard: React.FC = () => {
  const { user, logout, isDemo } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">✦</span>
              </div>
              <div>
                <h2 className="text-gray-900">EventFlow</h2>
                {isDemo && (
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Demo Mode</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Welcome, {user?.name}</span>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Vendor Dashboard</h1>
          <p className="text-gray-600">Manage your services and bookings</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-gray-900 mb-2">My Services</h3>
            <p className="text-gray-600 mb-4">Manage your offerings</p>
            <Button className="w-full">View Services</Button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Bookings</h3>
            <p className="text-gray-600 mb-4">Track your reservations</p>
            <Button className="w-full" variant="outline">View Bookings</Button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Analytics</h3>
            <p className="text-gray-600 mb-4">View performance metrics</p>
            <Button className="w-full" variant="outline">See Stats</Button>
          </div>
        </div>
      </main>
    </div>
  );
};