// app/components/AdminSidebar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block w-64 h-screen bg-gray-800 text-white p-6`}
      >
        <h2 className="text-2xl font-bold mb-8">Admin Page</h2>
        <nav className="space-y-4">
          <Link href="/admin-panel/dashboard" className="block hover:bg-gray-700 p-2 rounded">
            Dashboard
          </Link>
          <Link href="/admin-panel/users" className="block hover:bg-gray-700 p-2 rounded">
            User Management
          </Link>
          <Link href="/admin-panel/assessment" className="block hover:bg-gray-700 p-2 rounded">
            Test Management
          </Link>
          <Link href="/admin-panel/reports" className="block hover:bg-gray-700 p-2 rounded">
            Reports & Analytics
          </Link>
          <Link href="/admin-panel/settings" className="block hover:bg-gray-700 p-2 rounded">
            Settings
          </Link>
          <Link href="/api/auth/signout" className="block hover:bg-gray-700 p-2 rounded">
            Logout
          </Link>
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;
