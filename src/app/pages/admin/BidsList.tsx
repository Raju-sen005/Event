import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '../../components/ui/button';
import { Search, Filter, Eye, Gavel, DollarSign } from 'lucide-react';

interface Bid {
  id: number;
  vendorName: string;
  requirementTitle: string;
  customerName: string;
  amount: number;
  status: "Pending" | "Approved" | "Rejected";
  createdAt: string;
  vendor: string;
  requirement: string;
  customer: string;
}

export const BidsList: React.FC = () => {
  const [bids, setBids] = useState<Bid[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [stats, setStats] = useState({
    total: 0,
    approved: 0,
    pending: 0,
  });

  /* =========================
     FETCH BIDS + STATS
  ========================= */
  useEffect(() => {
    fetchBids();
    // fetchBidStats();
  }, []);

  const fetchBids = async () => {
    const res = await axios.get("http://localhost:5000/api/bids");
    setBids(res.data.bids);
  };

  // const fetchBidStats = async () => {
  //   const res = await axios.get("http://localhost:5000/api/bids/stats");
  //   setStats({
  //     total: res.data.stats.total,
  //     approved: res.data.stats.approved,
  //     pending: res.data.stats.pending,
  //   });
  // };

  const filteredBids = bids.filter(
    (bid) =>
      bid.vendorName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bid.requirementTitle?.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            {bids.filter(b => b.status === 'Approved').length}
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
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${bid.status === 'Approved' ? 'bg-green-100 text-green-700' :
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