"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineBell,
} from "react-icons/ai";
import { FaClipboardList, FaChartBar } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/images/adminlogo.png";

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
      <button
        className="md:hidden p-4 focus:outline-none absolute top-4 left-4 z-20 bg-gray-900 text-white rounded-full transition duration-200 hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      <div
        className={`fixed z-10 top-0 left-0 h-full bg-[#2c2c2c] text-gray-700 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-64 w-64 shadow-lg flex flex-col`}
      >
        <div className="flex items-center justify-center py-6">
          <Image src={logo} alt="Logo" width={55} height={55} />
          <span className="ml-3 text-base font-bold text-white">
            EarlyEdge Admin
          </span>
        </div>

        <nav className="mt-4 flex-grow">
          <p className="text-xs uppercase text-white pl-6 mb-2 font-Montserrat">
            General
          </p>
          <Link
            href="/admin-panel/dashboard"
            className="flex items-center px-6 py-3 text-sm transition duration-200 text-white hover:bg-[#434343] focus:bg-[#434343] rounded-lg  font-normal"
          >
            <AiOutlineDashboard className="mr-3" size={20} />
            Dashboard
          </Link>
          <Link
            href="/admin-panel/notifications"
            className="flex items-center px-6 py-3 text-sm transition duration-200 text-white hover:bg-[#434343] focus:bg-[#434343] rounded-lg  font-normal"
          >
            <AiOutlineBell className="mr-3" size={20} />
            Notifications
            <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </Link>
          <Link
            href="/admin-panel/users"
            className="flex items-center px-6 py-3 text-sm transition duration-200 text-white hover:bg-[#434343] focus:bg-[#434343] rounded-lg  font-normal"
          >
            <AiOutlineUser className="mr-3" size={20} />
            User Management
          </Link>

          <p className="text-xs uppercase text-white pl-6 mt-6 mb-2">System</p>
          <Link
            href="/admin-panel/assessment"
            className="flex items-center px-6 py-3 text-sm transition duration-200 text-white hover:bg-[#434343] focus:bg-[#434343] rounded-lg  font-normal"
          >
            <FaClipboardList className="mr-3" size={20} />
            Test Management
          </Link>
          <Link
            href="/admin-panel/reports"
            className="flex items-center px-6 py-3 text-sm transition duration-200 text-white hover:bg-[#434343] focus:bg-[#434343] rounded-lg  font-normal"
          >
            <FaChartBar className="mr-3" size={20} />
            Reports & Analytics
          </Link>
          <Link
            href="/admin-panel/settings"
            className="flex items-center px-6 py-3 text-sm transition duration-200 text-white hover:bg-[#434343] focus:bg-[#434343] rounded-lg  font-normal"
          >
            <AiOutlineSetting className="mr-3" size={20} />
            Settings
          </Link>
        </nav>

        {/* Move Logout button to the bottom */}
        <div className="mt-auto mb-4">
          <Link
            href="/api/auth/signout"
            className="flex items-center px-6 py-3 text-sm transition duration-200 text-white hover:bg-[#434343] focus:bg-[#434343] rounded-lg  font-normal"
          >
            <AiOutlineLogout className="mr-3" size={20} />
            Logout
          </Link>
        </div>
      </div>

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
