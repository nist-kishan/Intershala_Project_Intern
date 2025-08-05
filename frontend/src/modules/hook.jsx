import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchDashboardData,
  fetchLeaderboard,
  loginUser,
  signupUser,
  addNewIntern,
} from './api';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export function useDashboardData() {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboardData,
  });
}

export function useLeaderboard() {
  return useQuery({
    queryKey: ['leaderboard'],
    queryFn: fetchLeaderboard,
    staleTime: 5 * 60 * 1000, 
  });
}

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      queryClient.invalidateQueries(['dashboard']);
      navigate('/dashboard');
    },
    onError: (error) => {
      alert(error?.response?.data?.message || 'Login failed.');
    },
  });
}

export function useSignup() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      alert('Signup successful');
      navigate('/login');
    },
    onError: (error) => {
      alert(error?.response?.data?.message || 'Signup failed.');
    },
  });
}

export function useAddIntern() {
  return useMutation({
    mutationFn: addNewIntern,
    onError: (error) => {
      alert(error?.response?.data?.message || 'Adding intern failed.');
    },
  });
}

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      localStorage.removeItem('token');
      queryClient.clear();
      navigate('/');
    },
    onError: (error) => {
      alert(error?.response?.data?.message || 'Logout failed.');
    },
  });
}

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (err) {
        console.error('Invalid token');
        setUser(null);
      }
    }
  }, []);

  return { user };
}
