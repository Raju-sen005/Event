import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Search, Filter, Eye, Gavel, DollarSign } from 'lucide-react';

export const BidsList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const bids = [
    {
      id: '1',
      vendor: 'Royal Caterers',
      requirement: 'Wedding Catering Service',
      customer: 'Priya Sharma',
      amount: '₹4,75,000',
      submittedDate: '2024-03-11',
      status: 'Pending'
    },
    {
      id: '2',
      vendor: 'Dream Venues',
      requirement: 'Venue Booking',
      customer: 'Rahul Mehta',
      amount: '₹8,50,000',
      submittedDate: '2024-03-12',
      status: 'Accepted'
    },
    {
      id: '3',
      vendor: 'Elegant Decor',
      requirement: 'Event Decoration',
      customer: 'Ananya Gupta',
      amount: '₹1,25,000',
      submittedDate: '2024-03-09',
      status: 'Rejected'
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 mb-2">Bids & Activity Monitoring</h1>
        <p className="text-gray-600">Track vendor bidding patterns and marketplace activity</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total Bids</p>
          <p className="text-3xl font-bold text-gray-900">{bids.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Accepted Bids</p>
          <p className="text-3xl font-bold text-green-600">
            {bids.filter(b => b.status === 'Accepted').length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Pending Review</p>
          <p className="text-3xl font-bold text-yellow-600">
            {bids.filter(b => b.status === 'Pending').length}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search bids..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Vendor</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Requirement</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Bid Amount</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bids.map((bid) => (
              <tr key={bid.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Gavel className="h-4 w-4 text-purple-600" />
                    <span className="font-semibold text-gray-900">{bid.vendor}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{bid.requirement}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{bid.customer}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="font-semibold text-gray-900">{bid.amount}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    bid.status === 'Accepted' ? 'bg-green-100 text-green-700' :
                    bid.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {bid.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};