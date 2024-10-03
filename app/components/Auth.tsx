'use client';

import React, { useState } from 'react';
import { ESGIcon } from './PDFViewer';
import { useAuth } from '../context/AuthContext';

function Auth() {
  const { login } = useAuth();
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // Error state
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Handle the authentication action (signup or login)
  const handleAuth = async () => {
    setError(null); // Reset error before each request
    setIsLoading(true); // Set loading state

    if (isSignUp) {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        setIsLoading(false); // Disable loading
        return;
      }

      // Sign-up logic
      
try {
  const response = await fetch('http://localhost:8000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: email, password }), // Ensure 'username' is set to 'email'
  });

  if (!response.ok) {
    const data = await response.json();
    setError(data.detail || 'Error signing up');
    setIsLoading(false); // Disable loading
    return;
  }

  // Automatically log in after successful sign-up
  await handleLogin();
} catch (err) {
  setError('Network error');
  setIsLoading(false); // Disable loading
}

    } else {
      // Sign-in logic
      await handleLogin();
    }
  };
  console.log('Sending login request with:', { email, password });
  // Handle the login
  const handleLogin = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append('username', email);
      formData.append('password', password);

      const response = await fetch('http://localhost:8000/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.detail || 'Invalid credentials');
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      login(data.access_token);
      localStorage.setItem('token', data.access_token);

      setIsLoading(false);
    } catch (err) {
      console.error('Network error:', err);
      setError('Network error. Please check your connection and try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center mb-8">
          <ESGIcon type="environmental" />
          <ESGIcon type="social" />
          <ESGIcon type="governance" />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Display error */}

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {isSignUp && (
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}

        <button
          onClick={handleAuth}
          className={`w-full bg-blue-600 text-white py-2 rounded-md ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In'}
        </button>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-600"
          >
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
