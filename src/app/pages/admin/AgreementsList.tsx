import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Search, Filter, Eye, Download, FileSignature, CheckCircle, Clock } from 'lucide-react';

export const AgreementsList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const agreements = [
    {
      id: '1',
      title: 'Catering Service Agreement',
      customer: 'Priya Sharma',
      vendor: 'Royal Caterers',
      amount: '₹4,75,000',
      createdDate: '2024-03-12',
      signedDate: '2024-03-13',
      status: 'Signed'
    },
    {
      id: '2',
      title: 'Venue Rental Agreement',
      customer: 'Rahul Mehta',
      vendor: 'Dream Venues',
      amount: '₹8,50,000',
      createdDate: '2024-03-14',
      signedDate: null,
      status: 'Pending'
    },
    {
      id: '3',
      title: 'Decoration Service Agreement',
      customer: 'Ananya Gupta',
      vendor: 'Elegant Decor',
      amount: '₹1,25,000',
      createdDate: '2024-03-10',
      signedDate: '2024-03-11',
      status: 'Signed'
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-gray-900 mb-2">Agreements & Compliance</h1>
        <p className="text-gray-600">Monitor legal agreements and maintain audit trail</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total Agreements</p>
          <p className="text-3xl font-bold text-gray-900">{agreements.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Signed Agreements</p>
          <p className="text-3xl font-bold text-green-600">
            {agreements.filter(a => a.status === 'Signed').length}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Pending Signature</p>
          <p className="text-3xl font-bold text-yellow-600">
            {agreements.filter(a => a.status === 'Pending').length}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search agreements..."
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

      <div className="space-y-4">
        {agreements.map((agreement) => (
          <div key={agreement.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <FileSignature className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-gray-900 font-semibold">{agreement.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div className="text-sm text-gray-600">
                    Customer: <span className="font-semibold text-gray-900">{agreement.customer}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Vendor: <span className="font-semibold text-gray-900">{agreement.vendor}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Amount: <span className="font-semibold text-gray-900">{agreement.amount}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Created: {new Date(agreement.createdDate).toLocaleDateString('en-IN')}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {agreement.status === 'Signed' ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      <CheckCircle className="h-3 w-3" />
                      Signed on {agreement.signedDate && new Date(agreement.signedDate).toLocaleDateString('en-IN')}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                      <Clock className="h-3 w-3" />
                      Pending Signature
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};