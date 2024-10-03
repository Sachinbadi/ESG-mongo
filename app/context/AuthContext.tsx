'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  token: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  const login = (token: string) => {
    setToken(token);
    localStorage.setItem('token', token); // Optionally, store the token in localStorage for persistence
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token'); // Clear the token on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!token, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
