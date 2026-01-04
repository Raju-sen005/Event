import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../components/ui/button';
import {
  Calendar,
  MapPin,
  DollarSign,
  Users,
  Type,
  FileText,
  ArrowLeft,
  Check
} from 'lucide-react';

export const CreateEvent: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    date: '',
    time: '',
    location: '',
    venue: '',
    budget: '',
    estimatedGuests: '',
    description: '',
    theme: '',
    preferences: ''
  });

  const eventTypes = [
    'Wedding',
    'Birthday',
    'Corporate Event',
    'Anniversary',
    'Baby Shower',
    'Graduation',
    'Conference',
    'Product Launch',
    'Charity Event',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to backend
    console.log('Creating event:', formData);
    navigate('/customer/events');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#16232A]/70 hover:text-[#16232A] mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <h1 className="text-3xl font-bold text-[#16232A]">Create New Event</h1>
        <p className="text-[#16232A]/70 mt-1">Fill in the details to create your event</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-[#16232A] mb-4">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#16232A] mb-2">
                Event Name *
              </label>
              <div className="relative">
                <Type className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Sarah & John Wedding"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#16232A] mb-2">
                Event Type *
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
              >
                <option value="">Select event type</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#16232A] mb-2">
                  Event Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#16232A] mb-2">
                  Event Time *
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-[#16232A] mb-4">Location Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#16232A] mb-2">
                City/Location *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="e.g., New York, NY"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#16232A] mb-2">
                Venue Name (Optional)
              </label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="e.g., Grand Hotel Ballroom"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
              />
            </div>
          </div>
        </div>

        {/* Budget & Guest Count */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-[#16232A] mb-4">Budget & Capacity</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#16232A] mb-2">
                Estimated Budget *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 50000"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#16232A] mb-2">
                Estimated Guests *
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  name="estimatedGuests"
                  value={formData.estimatedGuests}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 150"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-[#16232A] mb-4">Additional Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#16232A] mb-2">
                Event Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your event..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#16232A] mb-2">
                Theme/Style
              </label>
              <input
                type="text"
                name="theme"
                value={formData.theme}
                onChange={handleChange}
                placeholder="e.g., Vintage, Modern, Garden Party"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#16232A] mb-2">
                Special Preferences/Requirements
              </label>
              <textarea
                name="preferences"
                value={formData.preferences}
                onChange={handleChange}
                rows={3}
                placeholder="Any special requirements, dietary restrictions, accessibility needs, etc."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-[#FF5B04] hover:bg-[#FF5B04]/90 text-white"
          >
            <Check className="h-4 w-4 mr-2" />
            Create Event
          </Button>
        </div>
      </form>
    </div>
  );
};
