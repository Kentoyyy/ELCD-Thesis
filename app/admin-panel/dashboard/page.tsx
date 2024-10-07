"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardPage = () => {
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
        <div>
            <h1 className="text-3xl font-bold">Welcome to the Admin Dashboard, {session.user.name}!</h1>
            {/* Add your dashboard content here */}
        </div>
    );
};

export default DashboardPage;
