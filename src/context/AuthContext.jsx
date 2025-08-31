// context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../url';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
  const [loading, setLoading] = useState(true);

  // Set up axios defaults
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  // Check token on app start
  useEffect(() => {
    if (token) {
      // Verify token is still valid
      axios.get(`${URL}/api/auth/refresh`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          if (response.data.user) {
            setUser(response.data.user);
          }
        })
        .catch(() => {
          // Token is invalid, clear everything
          logout();
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [token]);

  const login = async (credentials) => {
    try {
      setLoading(true);
      const response = await axios.post(`${URL}/api/auth/login`, credentials);
      
      const { accessToken, refreshToken: newRefreshToken, user: userData } = response.data;
      
      // Store tokens
      localStorage.setItem('token', accessToken);
      localStorage.setItem('refreshToken', newRefreshToken);
      
      // Update state
      setToken(accessToken);
      setRefreshToken(newRefreshToken);
      setUser(userData);
      
      // Set axios default header
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      
      return { success: true, user: userData };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: error.response?.data?.msg || error.response?.data?.error || 'Login failed'
      };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setLoading(true);
      const response = await axios.post(`${URL}/api/auth/register`, userData);
      
      return {
        success: true,
        message: response.data.msg || 'Registration successful'
      };
    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        error: error.response?.data?.msg || error.response?.data?.error || 'Registration failed'
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    // Clear tokens from storage
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    
    // Clear state
    setToken(null);
    setRefreshToken(null);
    setUser(null);
    
    // Remove axios default header
    delete axios.defaults.headers.common['Authorization'];
  };

  const refreshAuthToken = async () => {
    try {
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await axios.post('/api/auth/refresh', {
        refreshToken
      });

      const { accessToken, refreshToken: newRefreshToken } = response.data;
      
      // Update tokens
      localStorage.setItem('token', accessToken);
      localStorage.setItem('refreshToken', newRefreshToken);
      
      setToken(accessToken);
      setRefreshToken(newRefreshToken);
      
      // Update axios header
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      
      return accessToken;
    } catch (error) {
      console.error('Token refresh failed:', error);
      logout();
      throw error;
    }
  };

  // Axios interceptor for handling token refresh
  useEffect(() => {
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401 && refreshToken) {
          try {
            await refreshAuthToken();
            // Retry the original request
            return axios(error.config);
          } catch (refreshError) {
            logout();
            window.location.href = '/';
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [refreshToken]);

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!token && !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};