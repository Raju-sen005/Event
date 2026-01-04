import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Redirect to the new admin dashboard
    navigate('/admin/dashboard', { replace: true });
  }, [navigate]);

  return null;
};