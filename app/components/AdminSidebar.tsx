"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineDashboard, AiOutlineUser, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { FaClipboardList, FaChartBar } from "react-icons/fa";
import Image from 'next/image';
import logo from '../../public/images/logoelcdl.png';  // Adjust this path if needed

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative h-screen">
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden p-4 focus:outline-none absolute top-4 left-4 z-20 bg-gray-900 text-white rounded-full transition duration-200 hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed z-10 top-0 left-0 h-full bg-primary-color text-white transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:w-60 w-64`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center py-6">
          <Image src={logo} alt="Logo" width={40} height={40} />
        </div>

        {/* Navigation */}
        <nav className="mt-4 space-y-4">
          <Link
            href="/admin-panel/dashboard"
            className="flex items-center px-4 py-2 text-sm transition duration-200 hover:bg-gray-800 focus:bg-gray-700 focus:outline-none active:bg-gray-700 rounded-lg"
          >
            <AiOutlineDashboard className="mr-3" size={20} />
            Dashboard
          </Link>
          <Link
            href="/admin-panel/users"
            className="flex items-center px-4 py-2 text-sm transition duration-200 hover:bg-gray-800 focus:bg-gray-700 focus:outline-none active:bg-gray-700 rounded-lg"
          >
            <AiOutlineUser className="mr-3" size={20} />
            User Management
          </Link>
          <Link
            href="/admin-panel/assessment"
            className="flex items-center px-4 py-2 text-sm transition duration-200 hover:bg-gray-800 focus:bg-gray-700 focus:outline-none active:bg-gray-700 rounded-lg"
          >
            <FaClipboardList className="mr-3" size={20} />
            Test Management
          </Link>
          <Link
            href="/admin-panel/reports"
            className="flex items-center px-4 py-2 text-sm transition duration-200 hover:bg-gray-800 focus:bg-gray-700 focus:outline-none active:bg-gray-700 rounded-lg"
          >
            <FaChartBar className="mr-3" size={20} />
            Reports & Analytics
          </Link>
          <Link
            href="/admin-panel/settings"
            className="flex items-center px-4 py-2 text-sm transition duration-200 hover:bg-gray-800 focus:bg-gray-700 focus:outline-none active:bg-gray-700 rounded-lg"
          >
            <AiOutlineSetting className="mr-3" size={20} />
            Settings
          </Link>
          <Link
            href="/api/auth/signout"
            className="flex items-center px-4 py-2 text-sm transition duration-200 hover:bg-gray-800 focus:bg-gray-700 focus:outline-none active:bg-gray-700 rounded-lg"
          >
            <AiOutlineLogout className="mr-3" size={20} />
            Logout
          </Link>
        </nav>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-5"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminSidebar;
