"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from 'next/image';

const DashboardPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [userCount, setUserCount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [modelAccuracy, setModelAccuracy] = useState<number | null>(null);
    const [recentTests, setRecentTests] = useState<any[]>([]);
    const [phonologicalCount, setPhonologicalCount] = useState<number>(0);
    const [phonologicalTests, setPhonologicalTests] = useState<any[]>([]);

    useEffect(() => {
        const checkAuthAndFetchData = async () => {
            if (status === "authenticated") {
                if (session?.user?.role !== "admin") {
                    router.replace("/");
                } else {
                    await fetchUserCount();
                    await fetchModelAccuracy();
                    await fetchRecentTests();
                    await fetchPhonologicalTests();
                }
            }
        };

        checkAuthAndFetchData();
    }, [status, session, router]);

    const fetchUserCount = async () => {
        try {
            const response = await fetch("/api/users/count", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUserCount(data.userCount);
            }
        } catch (err) {
            console.error("Could not load user count", err);
        } finally {
            setLoading(false);
        }
    };

    const fetchModelAccuracy = async () => {
        try {
            const response = await fetch("/api/ml/model/accuracy", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setModelAccuracy(data.accuracy);
            }
        } catch (err) {
            console.error("Could not load model accuracy", err);
        }
    };

    const fetchRecentTests = async () => {
        try {
            const response = await fetch("/api/tests/recent", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setRecentTests(data.tests);
            }
        } catch (err) {
            console.error("Could not load recent tests", err);
        }
    };

    const fetchPhonologicalTests = async () => {
        try {
            const response = await fetch("/api/tests/phonological", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setPhonologicalCount(data.count);
                setPhonologicalTests(data.tests);
            }
        } catch (err) {
            console.error("Could not load phonological tests", err);
        }
    };

    if (status === "loading" || loading) {
        return <p className="text-center">Loading...</p>;
    }

    if (!session) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg">Please log in.</p>
            </div>
        );
    }

    return (
        <div className="p-6">
            {/* Admin Avatar and Info */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
                </div>

                <div className="flex items-center space-x-4">
                    <Image
                        src={session.user.image || '/images/avatarrr.png'}
                        alt="Admin Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <h2 className="text-sm font-medium text-gray-700">{session.user.name}</h2>
                    </div>
                </div>
            </div>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow text-center">
                    <p className="text-3xl font-semibold text-gray-900">{userCount}</p>
                    <p className="text-xs text-gray-400">Registered Users</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow text-center">
                    <p className="text-3xl font-semibold text-gray-900">{phonologicalCount}</p>
                    <p className="text-xs text-gray-400">Phonological Tests Taken</p>
                </div>
            </div>

            {/* Phonological Test Details */}
            <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Phonological Test Details</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-4 py-2">User ID</th>
                                <th className="border px-4 py-2">Test ID</th>
                                <th className="border px-4 py-2">Date Taken</th>
                            </tr>
                        </thead>
                        <tbody>
                            {phonologicalTests.map((test) => (
                                <tr key={test.id}>
                                    <td className="border px-4 py-2">{test.user_id}</td>
                                    <td className="border px-4 py-2">{test.id}</td>
                                    <td className="border px-4 py-2">{new Date(test.date).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
