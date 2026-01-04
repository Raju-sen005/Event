import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import {
  Briefcase,
  Search,
  FileText,
  Award,
  MessageSquare,
  Upload,
  DollarSign,
  User,
  Calendar,
  Settings,
  Bell,
  LogOut,
  Home,
  Menu,
  X,
  Sparkles
} from 'lucide-react';

export const VendorLayout: React.FC = () => {
  const { user, logout, isDemo } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationCount] = useState(5);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navigation = [
    { name: 'Dashboard', href: '/vendor/dashboard', icon: Home },
    { name: 'Requirements', href: '/vendor/requirements', icon: Search },
    { name: 'My Bids', href: '/vendor/bids', icon: FileText },
    { name: 'Awarded Events', href: '/vendor/events', icon: Award },
    { name: 'Messages', href: '/vendor/messages', icon: MessageSquare },
    { name: 'Deliverables', href: '/vendor/deliverables', icon: Upload },
    { name: 'Earnings', href: '/vendor/earnings', icon: DollarSign },
    { name: 'Profile', href: '/vendor/profile', icon: User },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="min-h-screen bg-[#E4EEF0]">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between h-14 px-4 lg:px-6">
          {/* Left: Logo & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-50"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Link to="/vendor/dashboard" className="flex items-center gap-2">
              <div className="h-9 w-9 bg-[#075056] rounded-xl flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#16232A]">EventFlow</span>
              <span className="hidden sm:inline text-sm text-[#075056] font-medium">Vendor</span>
            </Link>
          </div>

          {/* Right: Actions & User */}
          <div className="flex items-center gap-3">
            <Link to="/vendor/requirements">
              <Button className="bg-[#075056] hover:bg-[#075056]/90 text-white">
                <Search className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Find Events</span>
              </Button>
            </Link>
            <button className="relative p-2 rounded-lg hover:bg-gray-50">
              <Bell className="h-5 w-5 text-[#16232A]" />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 bg-[#FF5B04] text-white text-xs rounded-full flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </button>
            <div className="hidden md:flex items-center gap-3 pl-3 border-l border-gray-200">
              <div className="text-right">
                <p className="font-medium text-[#16232A]">{user?.name}</p>
                {isDemo && (
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Demo</span>
                )}
              </div>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-14 left-0 bottom-0 z-30 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <nav className="p-4 space-y-1">
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                  active
                    ? 'bg-[#075056] text-white'
                    : 'text-[#16232A] hover:bg-gray-50'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 space-y-1">
          <Link
            to="/vendor/availability"
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
              isActive('/vendor/availability')
                ? 'bg-[#075056] text-white'
                : 'text-[#16232A] hover:bg-gray-50'
            }`}
          >
            <Calendar className="h-5 w-5" />
            Availability
          </Link>
          <Link
            to="/vendor/settings"
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
              isActive('/vendor/settings')
                ? 'bg-[#075056] text-white'
                : 'text-[#16232A] hover:bg-gray-50'
            }`}
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="lg:ml-64 pt-14 min-h-screen bg-[#E4EEF0]">
        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};