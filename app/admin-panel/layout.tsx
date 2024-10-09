// app/admin-panel/layout.tsx
"use client";

import React from "react";
import { Inter } from "next/font/google";
import AuthProvider from "@/utils/SessionProvider";
import AdminSidebar from "../components/AdminSidebar"; // Sidebar component

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className={`${inter.className} flex bg-gray-100`}>
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <div className="flex-1 p-10">
          {children}
        </div>
      </div>
    </AuthProvider>
  );
}
