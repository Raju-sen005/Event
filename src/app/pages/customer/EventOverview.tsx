import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { Button } from '../../components/ui/button';
import {
  Calendar,
  MapPin,
  DollarSign,
  Users,
  ShoppingBag,
  MessageSquare,
  FileText,
  Settings,
  ArrowLeft,
  Plus,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp,
  Edit
} from 'lucide-react';
import { motion } from 'motion/react';

export const EventOverview: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in real app, fetch based on id
  const event = {
    id: 1,
    name: 'Sarah & John Wedding',
    type: 'Wedding',
    date: '2025-02-15',
    time: '18:00',
    location: 'Grand Hotel Ballroom, New York',
    budget: 50000,
    spent: 32500,
    estimatedGuests: 150,
    confirmedGuests: 120,
    pendingGuests: 20,
    declinedGuests: 10,
    vendors: 5,
    activeRequirements: 3,
    completedTasks: 24,
    totalTasks: 35,
    status: 'planning',
    progress: 65,
    theme: 'Vintage Garden',
    description: 'An elegant vintage-themed wedding celebration in the heart of New York City.',
  };

  const stats = [
    {
      label: 'Budget Used',
      value: `$${event.spent.toLocaleString()}`,
      total: `/ $${event.budget.toLocaleString()}`,
      icon: DollarSign,
      color: 'bg-[#FF5B04]',
      progress: (event.spent / event.budget) * 100
    },
    {
      label: 'Guest RSVPs',
      value: event.confirmedGuests,
      total: `/ ${event.estimatedGuests}`,
      icon: Users,
      color: 'bg-[#075056]',
      progress: (event.confirmedGuests / event.estimatedGuests) * 100
    },
    {
      label: 'Active Vendors',
      value: event.vendors,
      total: 'vendors',
      icon: ShoppingBag,
      color: 'bg-[#16232A]'
    },
    {
      label: 'Tasks Complete',
      value: event.completedTasks,
      total: `/ ${event.totalTasks}`,
      icon: CheckCircle,
      color: 'bg-green-500',
      progress: (event.completedTasks / event.totalTasks) * 100
    }
  ];

  const timeline = [
    {
      id: 1,
      title: 'Venue Booked',
      description: 'Grand Hotel Ballroom confirmed',
      date: '2024-12-01',
      status: 'completed',
      type: 'milestone'
    },
    {
      id: 2,
      title: 'Catering Selected',
      description: 'Elite Catering awarded contract',
      date: '2024-12-15',
      status: 'completed',
      type: 'vendor'
    },
    {
      id: 3,
      title: 'Invitations Sent',
      description: 'Digital invitations sent to 150 guests',
      date: '2025-01-05',
      status: 'completed',
      type: 'guest'
    },
    {
      id: 4,
      title: 'Photography Pending',
      description: 'Reviewing bids from 3 photographers',
      date: '2025-01-20',
      status: 'pending',
      type: 'vendor'
    },
    {
      id: 5,
      title: 'Final RSVP Deadline',
      description: 'Deadline for guest confirmations',
      date: '2025-02-01',
      status: 'upcoming',
      type: 'milestone'
    }
  ];

  const quickActions = [
    { label: 'Add Guests', href: `/customer/guests/add?event=${id}`, icon: Users, color: 'bg-[#075056]' },
    { label: 'Post Requirement', href: '/customer/vendors/post-requirement', icon: Plus, color: 'bg-[#FF5B04]' },
    { label: 'View Vendors', href: `/customer/vendors`, icon: ShoppingBag, color: 'bg-[#16232A]' },
    { label: 'Messages', href: '/customer/messages', icon: MessageSquare, color: 'bg-blue-500' },
  ];

  const recentVendors = [
    { id: 1, name: 'Elite Catering', category: 'Catering', status: 'Confirmed', avatar: 'EC' },
    { id: 2, name: 'Dream Photography', category: 'Photography', status: 'Bidding', avatar: 'DP' },
    { id: 3, name: 'Floral Designs Co', category: 'Decorations', status: 'Confirmed', avatar: 'FD' },
    { id: 4, name: 'Sound & Lights Pro', category: 'Audio/Visual', status: 'Confirmed', avatar: 'SL' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <button
          onClick={() => navigate('/customer/events')}
          className="flex items-center gap-2 text-[#16232A]/70 hover:text-[#16232A] mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </button>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-[#16232A]">{event.name}</h1>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
              </span>
            </div>
            <div className="flex items-center gap-4 text-[#16232A]/70">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(event.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {event.location}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Edit className="h-4 w-4 mr-2" />
              Edit Event
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/customer/settings')}
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-[#16232A]">Event Progress</h3>
          <span className="text-2xl font-bold text-[#FF5B04]">{event.progress}%</span>
        </div>
        <div className="bg-gray-200 rounded-full h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${event.progress}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="bg-[#FF5B04] h-3 rounded-full"
          />
        </div>
        <p className="text-sm text-[#16232A]/60 mt-2">
          {event.completedTasks} of {event.totalTasks} tasks completed
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`h-10 w-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
            </div>
            <p className="text-sm text-[#16232A]/60 mb-1">{stat.label}</p>
            <div className="flex items-baseline gap-1">
              <p className="text-2xl font-bold text-[#16232A]">{stat.value}</p>
              {stat.total && <p className="text-sm text-[#16232A]/60">{stat.total}</p>}
            </div>
            {stat.progress !== undefined && (
              <div className="mt-3 bg-gray-200 rounded-full h-1.5">
                <div
                  className={`${stat.color} h-1.5 rounded-full`}
                  style={{ width: `${stat.progress}%` }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-[#16232A] mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <Link key={action.label} to={action.href}>
              <Button variant="outline" className="w-full justify-start h-auto py-4">
                <div className={`h-10 w-10 ${action.color} rounded-lg flex items-center justify-center mr-3`}>
                  <action.icon className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">{action.label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Timeline */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-[#16232A] mb-4">Event Timeline</h2>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={item.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    item.status === 'completed' ? 'bg-green-100' :
                    item.status === 'pending' ? 'bg-yellow-100' :
                    'bg-blue-100'
                  }`}>
                    {item.status === 'completed' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : item.status === 'pending' ? (
                      <Clock className="h-5 w-5 text-yellow-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-blue-600" />
                    )}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <h3 className="font-semibold text-[#16232A]">{item.title}</h3>
                  <p className="text-sm text-[#16232A]/60 mt-1">{item.description}</p>
                  <p className="text-xs text-[#16232A]/50 mt-2">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vendors */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#16232A]">Active Vendors</h2>
            <Link to="/customer/vendors">
              <Button variant="ghost" size="sm">View All</Button>
            </Link>
          </div>
          <div className="space-y-3">
            {recentVendors.map((vendor) => (
              <div key={vendor.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-[#FF5B04] rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{vendor.avatar}</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#16232A]">{vendor.name}</p>
                    <p className="text-sm text-[#16232A]/60">{vendor.category}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  vendor.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {vendor.status}
                </span>
              </div>
            ))}
          </div>
          <Link to="/customer/vendors/post-requirement">
            <Button className="w-full mt-4 bg-[#FF5B04] hover:bg-[#FF5B04]/90 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Post New Requirement
            </Button>
          </Link>
        </div>
      </div>

      {/* Event Details */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-[#16232A] mb-4">Event Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-[#16232A] mb-3">Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#16232A]/60">Event Type:</span>
                <span className="font-medium text-[#16232A]">{event.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#16232A]/60">Theme:</span>
                <span className="font-medium text-[#16232A]">{event.theme}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#16232A]/60">Time:</span>
                <span className="font-medium text-[#16232A]">{event.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#16232A]/60">Status:</span>
                <span className="font-medium text-[#16232A]">{event.status}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[#16232A] mb-3">Description</h3>
            <p className="text-sm text-[#16232A]/70 leading-relaxed">{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};