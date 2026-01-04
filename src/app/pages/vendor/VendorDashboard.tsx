import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Award,
  Search,
  FileText,
  Calendar,
  DollarSign,
  Star,
  TrendingUp,
  Clock,
  AlertCircle,
  ChevronRight,
  CheckCircle,
  Package
} from 'lucide-react';

export const VendorDashboard: React.FC = () => {
  // Mock data
  const stats = [
    {
      label: 'Active Events',
      value: '8',
      change: '+2 this month',
      icon: Award,
      color: 'bg-[#075056]',
      trend: 'up'
    },
    {
      label: 'Pending Bids',
      value: '12',
      change: '3 shortlisted',
      icon: FileText,
      color: 'bg-[#FF5B04]',
      trend: 'up'
    },
    {
      label: 'This Month Earnings',
      value: '₹2,45,000',
      change: '+18% vs last month',
      icon: DollarSign,
      color: 'bg-[#075056]',
      trend: 'up'
    },
    {
      label: 'Rating',
      value: '4.8',
      change: 'From 156 reviews',
      icon: Star,
      color: 'bg-[#FF5B04]',
      trend: 'stable'
    },
  ];

  const activeEvents = [
    {
      id: '1',
      name: 'Sharma Wedding Reception',
      customer: 'Priya Sharma',
      date: '2025-01-15',
      location: 'The Grand, Mumbai',
      category: 'Catering',
      status: 'In Progress',
      progress: 65,
      nextAction: 'Upload menu confirmation'
    },
    {
      id: '2',
      name: 'Tech Corp Annual Gala',
      customer: 'Rahul Mehta',
      date: '2025-01-20',
      location: 'ITC Grand Central, Mumbai',
      category: 'Photography',
      status: 'Confirmed',
      progress: 30,
      nextAction: 'Review shot list'
    },
    {
      id: '3',
      name: 'Birthday Celebration',
      customer: 'Anjali Verma',
      date: '2025-01-22',
      location: 'Private Residence, Bandra',
      category: 'Decoration',
      status: 'Planning',
      progress: 45,
      nextAction: 'Submit theme mockup'
    },
  ];

  const newRequirements = [
    {
      id: '1',
      title: 'Wedding Photography & Videography',
      customer: 'Vikram Singh',
      eventType: 'Wedding',
      date: '2025-02-14',
      location: 'Jaipur, Rajasthan',
      budget: '₹80,000 - ₹1,20,000',
      postedAt: '2 hours ago',
      applicants: 8
    },
    {
      id: '2',
      title: 'Corporate Event Catering (500 guests)',
      customer: 'Neha Kapoor',
      eventType: 'Corporate',
      date: '2025-02-10',
      location: 'BKC, Mumbai',
      budget: '₹3,00,000 - ₹4,00,000',
      postedAt: '5 hours ago',
      applicants: 12
    },
    {
      id: '3',
      title: 'Engagement Ceremony Decoration',
      customer: 'Amit Patel',
      eventType: 'Engagement',
      date: '2025-02-08',
      location: 'Ahmedabad, Gujarat',
      budget: '₹60,000 - ₹90,000',
      postedAt: '1 day ago',
      applicants: 15
    },
  ];

  const upcomingDeadlines = [
    {
      title: 'Submit deliverables for Sharma Wedding',
      date: '2025-01-18',
      type: 'Deliverable',
      priority: 'high'
    },
    {
      title: 'Sign agreement for Tech Corp Gala',
      date: '2025-01-19',
      type: 'Agreement',
      priority: 'high'
    },
    {
      title: 'Final menu approval - Gupta Anniversary',
      date: '2025-01-21',
      type: 'Approval',
      priority: 'medium'
    },
  ];

  const recentNotifications = [
    {
      id: '1',
      message: 'Your bid for "Corporate Gala Catering" was shortlisted',
      time: '1 hour ago',
      type: 'success'
    },
    {
      id: '2',
      message: 'New requirement matching your profile: "Wedding Photography"',
      time: '3 hours ago',
      type: 'info'
    },
    {
      id: '3',
      message: 'Agreement pending signature for "Birthday Party Decoration"',
      time: '5 hours ago',
      type: 'warning'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-[#16232A] mb-2">Vendor Dashboard</h1>
        <p className="text-[#16232A]/70">Welcome back! Here's your business overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 border border-gray-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`${stat.color} rounded-lg p-3`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              {stat.trend === 'up' && <TrendingUp className="h-5 w-5 text-green-600" />}
            </div>
            <p className="text-3xl font-bold text-[#16232A] mb-1">{stat.value}</p>
            <p className="text-sm text-[#16232A]/70 mb-1">{stat.label}</p>
            <p className="text-xs text-green-600">{stat.change}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Events */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-[#075056]" />
              <h2 className="text-[#16232A]">Active Awarded Events</h2>
            </div>
            <Link
              to="/vendor/events"
              className="text-sm text-[#075056] hover:text-[#075056]/80 font-medium flex items-center gap-1"
            >
              View All
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {activeEvents.map((event) => (
              <Link
                key={event.id}
                to={`/vendor/events/${event.id}`}
                className="block p-4 border border-gray-200 rounded-lg hover:border-[#075056] transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-[#16232A] mb-1">{event.name}</h3>
                    <p className="text-sm text-[#16232A]/70">Customer: {event.customer}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                    {event.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="flex items-center gap-2 text-sm text-[#16232A]/70">
                    <Calendar className="h-4 w-4" />
                    {new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#16232A]/70">
                    <Package className="h-4 w-4" />
                    {event.category}
                  </div>
                </div>

                <div className="mb-2">
                  <div className="flex items-center justify-between text-xs text-[#16232A]/70 mb-1">
                    <span>Progress</span>
                    <span>{event.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#075056] rounded-full transition-all"
                      style={{ width: `${event.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#FF5B04]">
                  <AlertCircle className="h-4 w-4" />
                  Next: {event.nextAction}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-[#FF5B04]" />
              <h2 className="text-[#16232A]">Upcoming Deadlines</h2>
            </div>

            <div className="space-y-3">
              {upcomingDeadlines.map((deadline, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    deadline.priority === 'high'
                      ? 'border-red-200 bg-red-50'
                      : 'border-yellow-200 bg-yellow-50'
                  }`}
                >
                  <div className="flex items-start gap-2 mb-1">
                    <AlertCircle
                      className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                        deadline.priority === 'high' ? 'text-red-600' : 'text-yellow-600'
                      }`}
                    />
                    <p className="text-sm font-medium text-[#16232A]">{deadline.title}</p>
                  </div>
                  <div className="flex items-center justify-between ml-6">
                    <span className="text-xs text-[#16232A]/70">
                      {new Date(deadline.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-white rounded-full">
                      {deadline.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Notifications */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[#16232A]">Recent Notifications</h2>
              <Link
                to="/vendor/settings"
                className="text-xs text-[#075056] hover:text-[#075056]/80"
              >
                View All
              </Link>
            </div>

            <div className="space-y-3">
              {recentNotifications.map((notification) => (
                <div key={notification.id} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                  <div
                    className={`h-2 w-2 rounded-full flex-shrink-0 mt-2 ${
                      notification.type === 'success'
                        ? 'bg-green-500'
                        : notification.type === 'warning'
                        ? 'bg-yellow-500'
                        : 'bg-blue-500'
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm text-[#16232A]">{notification.message}</p>
                    <p className="text-xs text-[#16232A]/50 mt-1">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New Requirements Feed */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-[#FF5B04]" />
            <h2 className="text-[#16232A]">New Event Requirements</h2>
            <span className="px-2 py-1 bg-[#FF5B04]/10 text-[#FF5B04] text-xs rounded-full">
              {newRequirements.length} New
            </span>
          </div>
          <Link
            to="/vendor/requirements"
            className="text-sm text-[#075056] hover:text-[#075056]/80 font-medium flex items-center gap-1"
          >
            Browse All
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newRequirements.map((req) => (
            <Link
              key={req.id}
              to={`/vendor/requirements/${req.id}`}
              className="p-4 border border-gray-200 rounded-lg hover:border-[#075056] hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                  {req.eventType}
                </span>
                <span className="text-xs text-[#16232A]/50">{req.postedAt}</span>
              </div>

              <h3 className="font-semibold text-[#16232A] mb-2 line-clamp-2">{req.title}</h3>

              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-sm text-[#16232A]/70">
                  <Calendar className="h-4 w-4" />
                  {new Date(req.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
                <p className="text-sm text-[#16232A]/70">{req.location}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="font-semibold text-[#075056]">{req.budget}</span>
                <span className="text-xs text-[#16232A]/50">{req.applicants} bids</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
