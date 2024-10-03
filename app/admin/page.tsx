"use client";
import { useEffect, useState } from "react";

const AdminPanel = () => {
    const [userCount, setUserCount] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const res = await fetch("/api/admin/usercount");
                const data = await res.json();
                setUserCount(data.count);
            } catch (error) {
                console.error("Failed to fetch user count:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserCount();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg p-6 rounded-lg">
                <h1 className="text-2xl font-semibold">Admin Panel</h1>
                <p className="text-lg mt-4">Total Registered Users: {userCount !== null ? userCount : "Error"}</p>
            </div>
        </div>
    );
};

export default AdminPanel;
