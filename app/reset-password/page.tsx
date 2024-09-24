"use client";

import React, { useState } from "react";
import axios from "axios";
import Footer from '../../app/components/Footer';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("/api/auth/reset-password", { email });
      setMessage("Password reset link sent to your email.");
    } catch (error) {
      console.error("Error sending password reset link:", error);

      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.error || "Failed to send password reset link.";
        setMessage(errorMessage);
      } else {
        setMessage("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-50">
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-primary-color">Reset Password</h2>
            <p className="mt-2 text-gray-500">
              Enter the email address associated with your account and we’ll send you a link to reset your password.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-primary-color transition duration-300 p-2 bg-transparent"
                placeholder="example@gmail.com"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary-color text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue
            </button>
          </form>
          {message && (
            <p className="mt-4 text-center text-green-500">{message}</p>
          )}
          <div className="text-center mt-6">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <a href="/sign-up" className="text-primary-color hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPasswordPage;
