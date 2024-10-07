// app/admin/dashboard/page.tsx
"use client"; // Ensure this is treated as a client component

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminDashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user?.role !== "admin") {
        router.replace("/"); // Redirect non-admins to homepage
      }
    }
  }, [status, session, router]);

  if (status === "loading") {
    return <p>Loading...</p>; // Display loading text
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Please log in.</p>
      </div>
    ); // Center the "Please log in" message
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="mt-4">Welcome, {session.user.name}!</p>
      {/* Add your admin dashboard content here */}
    </div>
  );
};

export default AdminDashboard;
