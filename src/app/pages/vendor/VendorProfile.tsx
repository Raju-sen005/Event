import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { User, Briefcase, MapPin, Phone, Mail, Star, Save, Image as ImageIcon, Plus } from 'lucide-react';
import { Button } from '../../components/ui/button';

export const VendorProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const portfolioItems = [
    { id: '1', title: 'Luxury Wedding Setup', category: 'Catering', image: 'sample1' },
    { id: '2', title: 'Corporate Gala Dinner', category: 'Catering', image: 'sample2' },
    { id: '3', title: 'Birthday Party Spread', category: 'Catering', image: 'sample3' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[#16232A] mb-2">Vendor Profile</h1>
        <p className="text-[#16232A]/70">Manage your business profile and portfolio</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {['profile', 'portfolio', 'packages'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-[#075056] text-[#075056]'
                    : 'border-transparent text-[#16232A]/70 hover:text-[#16232A]'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'profile' && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#16232A] mb-2">Business Name *</label>
                  <input
                    {...register('businessName')}
                    defaultValue="Premium Catering Services"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075056]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#16232A] mb-2">Contact Person</label>
                  <input
                    {...register('contactPerson')}
                    defaultValue="Rajesh Kumar"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075056]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#16232A] mb-2">Email</label>
                  <input
                    type="email"
                    {...register('email')}
                    defaultValue="rajesh@premiumcatering.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075056]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#16232A] mb-2">Phone</label>
                  <input
                    {...register('phone')}
                    defaultValue="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075056]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#16232A] mb-2">Business Description</label>
                <textarea
                  {...register('description')}
                  rows={4}
                  defaultValue="We are a premium catering service provider with over 15 years of experience in delivering exceptional culinary experiences for weddings, corporate events, and social gatherings."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075056] resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#16232A] mb-2">Service Locations</label>
                  <input
                    {...register('locations')}
                    defaultValue="Mumbai, Pune, Thane"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075056]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#16232A] mb-2">Years of Experience</label>
                  <input
                    type="number"
                    {...register('experience')}
                    defaultValue="15"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075056]"
                  />
                </div>
              </div>

              <Button type="submit" className="bg-[#075056] hover:bg-[#075056]/90 text-white gap-2">
                <Save className="h-4 w-4" />
                Save Profile
              </Button>
            </form>
          )}

          {activeTab === 'portfolio' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <p className="text-[#16232A]/70">Showcase your best work to attract more customers</p>
                <Button className="bg-[#075056] hover:bg-[#075056]/90 text-white gap-2">
                  <Plus className="h-4 w-4" />
                  Add Item
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {portfolioItems.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#075056] transition-colors">
                    <div className="aspect-video bg-gray-100 flex items-center justify-center">
                      <ImageIcon className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[#16232A] mb-1">{item.title}</h3>
                      <p className="text-sm text-[#16232A]/70">{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'packages' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <p className="text-[#16232A]/70">Create standard packages to simplify bidding</p>
                <Button className="bg-[#075056] hover:bg-[#075056]/90 text-white gap-2">
                  <Plus className="h-4 w-4" />
                  Add Package
                </Button>
              </div>

              {[
                { name: 'Basic Package', price: '₹50,000 - ₹80,000', features: ['Up to 100 guests', 'Standard menu', '3 courses', 'Basic service staff'] },
                { name: 'Premium Package', price: '₹1,00,000 - ₹1,50,000', features: ['Up to 200 guests', 'Multi-cuisine menu', '5 courses', 'Premium service staff', 'Live counters'] },
                { name: 'Luxury Package', price: '₹2,00,000+', features: ['Unlimited guests', 'Customized menu', 'Unlimited courses', 'Premium staff', 'Live counters', 'Special decorations'] },
              ].map((pkg, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#16232A] mb-1">{pkg.name}</h3>
                      <p className="text-xl font-bold text-[#075056]">{pkg.price}</p>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#16232A]/70">
                        <div className="h-1.5 w-1.5 bg-[#075056] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
