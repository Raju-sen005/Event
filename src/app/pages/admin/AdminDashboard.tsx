import { useNavigate } from 'react-router';
import {
  Users,
  Briefcase,
  Calendar,
  FileText,
  Gavel,
  FileSignature,
  AlertTriangle,
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowRight
} from 'lucide-react';
import React, { useEffect, useState } from "react";
import axios from "axios";

interface MetricCard {
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down';
  icon: React.ElementType;
  color: string;
  bgColor: string;
  link: string;
  alert?: boolean;
}

export const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
  totalUsers: 0,
  totalVendors: 0,
  activeEvents: 0,
  totalRequirements: 0,
});

useEffect(() => {
  const fetchDashboardStats = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/dashboard-stats"
      );
      setStats(res.data.stats);
    } catch (error) {
      console.error("Failed to load dashboard stats", error);
    }
  };

  fetchDashboardStats();
}, []);

  const navigate = useNavigate();

  const metrics: MetricCard[] = [
    {
      label: 'Total Customers',
      value: stats.totalUsers,
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      link: '/admin/users'
    },
    {
      label: 'Total Vendors',
      value: stats.totalVendors,
      change: '+8%',
      trend: 'up',
      icon: Briefcase,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      link: '/admin/vendors'
    },
    {
      label: 'Active Events',
      value: stats.activeEvents,
      change: '+15%',
      trend: 'up',
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      link: '/admin/requirements'
    },
    {
      label: 'Requirements Posted',
      value: stats.totalRequirements,
      change: '+10%',
      trend: 'up',
      icon: FileText,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      link: '/admin/requirements'
    },
    {
      label: 'Bids Submitted',
      value: '542',
      change: '+18%',
      trend: 'up',
      icon: Gavel,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      link: '/admin/bids'
    },
    {
      label: 'Ongoing Agreements',
      value: '127',
      change: '+5%',
      trend: 'up',
      icon: FileSignature,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      link: '/admin/agreements'
    },
    {
      label: 'Active Disputes',
      value: '8',
      change: '-3%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      link: '/admin/disputes',
      alert: true
    },
    {
      label: 'Platform Revenue',
      value: '₹12.4L',
      change: '+22%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      link: '/admin/financial'
    },
  ];

  const systemAlerts = [
    {
      id: 1,
      type: 'warning',
      title: '3 Vendors Pending Verification',
      description: 'Review and approve pending vendor applications',
      link: '/admin/vendors',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'urgent',
      title: '2 Disputes Require Action',
      description: 'Unresolved disputes need immediate attention',
      link: '/admin/disputes',
      time: '4 hours ago'
    },
    {
      id: 3,
      type: 'info',
      title: '15 New Support Tickets',
      description: 'Customer support requests awaiting response',
      link: '/admin/support',
      time: '1 day ago'
    },
  ];

  const recentActivity = [
    { id: 1, action: 'New customer registered', user: 'Priya Sharma', time: '5 min ago' },
    { id: 2, action: 'Vendor verified', user: 'Royal Caterers', time: '15 min ago' },
    { id: 3, action: 'Event created', user: 'Rahul Mehta', time: '30 min ago' },
    { id: 4, action: 'Bid submitted', user: 'Elegant Decor', time: '1 hour ago' },
    { id: 5, action: 'Agreement signed', user: 'Dream Venues', time: '2 hours ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-gray-900 mb-2">Platform Dashboard</h1>
        <p className="text-gray-600">Monitor and manage your entire event platform</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;

          return (
            <div
              key={metric.label}
              onClick={() => navigate(metric.link)}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer relative"
            >
              {metric.alert && (
                <div className="absolute top-3 right-3">
                  <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse" />
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div className={`h-12 w-12 ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={`h-6 w-6 ${metric.color}`} />
                </div>
                {metric.change && (
                  <div className={`flex items-center gap-1 text-sm ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendIcon className="h-4 w-4" />
                    <span className="font-semibold">{metric.change}</span>
                  </div>
                )}
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                <p className="text-sm text-gray-600">{metric.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* System Alerts */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-900">System Alerts</h2>
            <span className="text-sm text-gray-500">{systemAlerts.length} active</span>
          </div>

          <div className="space-y-3">
            {systemAlerts.map((alert) => (
              <div
                key={alert.id}
                onClick={() => navigate(alert.link)}
                className={`p-4 rounded-lg border-l-4 cursor-pointer hover:bg-gray-50 transition ${
                  alert.type === 'urgent'
                    ? 'bg-red-50 border-red-500'
                    : alert.type === 'warning'
                    ? 'bg-yellow-50 border-yellow-500'
                    : 'bg-blue-50 border-blue-500'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{alert.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-900">Recent Activity</h2>
            <button className="text-sm text-[#FF5B04] hover:underline">View All</button>
          </div>

          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className="h-2 w-2 bg-[#075056] rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    <span className="font-semibold">{activity.user}</span> · {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-br from-[#16232A] to-[#075056] rounded-xl p-6 text-white">
        <h2 className="mb-4">Quick Stats</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <p className="text-3xl font-bold mb-1">94%</p>
            <p className="text-sm text-gray-300">Customer Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-1">4.8</p>
            <p className="text-sm text-gray-300">Avg. Vendor Rating</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-1">2.4k</p>
            <p className="text-sm text-gray-300">Events Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-1">₹45L</p>
            <p className="text-sm text-gray-300">Total GMV</p>
          </div>
        </div>
      </div>
    </div>
  );
};