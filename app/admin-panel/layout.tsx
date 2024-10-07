// app/admin/layout.tsx
"use client"; // Mark as client component

import React from "react";
import { Inter } from "next/font/google";
import AuthProvider from "@/utils/SessionProvider";
import AdminSidebar from "../components/AdminSidebar"; // We'll create this component next

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <AuthProvider>
          <div className="flex">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <div className="flex-1 p-10 bg-gray-100">
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
