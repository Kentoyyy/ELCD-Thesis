"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use this import for the app directory
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const searchParams = useSearchParams(); // Get search parameters
    const token = searchParams.get('token'); // Extract token from search parameters

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
        if (password !== confirmPassword) {
          setMessage("Passwords do not match");
          return;
        }
      
        try {
          const response = await axios.post('/api/auth/reset-password/new', {
            token,  // Ensure the token is be ing sent
            password,
          });
          setMessage(response.data.message);  // Use the response message
        } catch (error) {
          const errorMessage = axios.isAxiosError(error) && error.response?.data?.error
            ? error.response.data.error
            : "Failed to reset password. Please try again.";
          setMessage(errorMessage);
        }
      };
      
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex-grow flex justify-center items-center">
                <div className="bg-transparent p-8 rounded-lg shadow-md w-full max-w-md">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Reset Your Password</h2>
                        <p className="mt-2 text-gray-600">Enter your new password below.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">New Password</label>
                            <input
                                type="password"
                                value={password}
                                placeholder="Enter new password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 border-b-2 bg-transparent  border-gray-300 text-sm focus:outline-none focus:border-blue-500 transition duration-200"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                placeholder="Confirm new password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 border-b-2 bg-transparent border-gray-300 text-sm focus:outline-none focus:border-blue-500 transition duration-200"
                            />
                        </div>
                        <button type="submit" className="w-full py-3 bg-secondary-color text-white rounded-lg hover:bg-primary-color transition-colors">
                            Reset Password
                        </button>
                    </form>
                    {message && (
                        <p className="mt-4 text-center text-red-600">
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
