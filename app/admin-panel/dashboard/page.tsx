"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from 'next/image'; // For handling the admin avatar image

const DashboardPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [userCount, setUserCount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [modelAccuracy, setModelAccuracy] = useState<number | null>(null);
    const [recentTests, setRecentTests] = useState<any[]>([]); // Array of recent dyslexia tests

    useEffect(() => {
        const checkAuthAndFetchData = async () => {
            if (status === "authenticated") {
                if (session?.user?.role !== "admin") {
                    router.replace("/");
                } else {
                    await fetchUserCount();
                    await fetchModelAccuracy();
                    await fetchRecentTests();
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
                {/* Page Title on Left Side */}
                <div>
                    <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
                </div>

                {/* Admin Info on Right Side */}
                <div className="flex items-center space-x-4">
                    {/* Notification icon (optional) */}
                    <button className="relative text-gray-500 hover:text-gray-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a7 7 0 10-14 0v3a2.032 2.032 0 01-.595 1.405L2 17h5m5 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="absolute top-0 right-0 block h-2 w-2 transform translate-x-1 -translate-y-1 bg-red-600 rounded-full"></span>
                    </button>

                    {/* Admin Avatar and Name */}
                    <div className="flex items-center space-x-2">
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
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {/* Registered Users Card */}
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow transition-shadow duration-300 text-center">
                    <div className="mb-3 text-gray-700">
                        {/* Add icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 2c-2.67 0-8 1.333-8 4v2h16v-2c0-2.667-5.33-4-8-4z" />
                        </svg>
                    </div>
                    <p className="text-3xl font-semibold text-gray-900">{userCount}</p>
                    <p className="text-xs text-gray-400">Registered Users</p>
                </div>

                {/* Model Accuracy Card */}
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow transition-shadow duration-300 text-center">
                    <div className="mb-3 text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.104 0-2 .896-2 2v6c0 1.104.896 2 2 2s2-.896 2-2v-6c0-1.104-.896-2-2-2zm-6 2h2v8h2v-8h2V8H6zm10 0v2h2v8h-2v-8h-2v-2h2z" />
                        </svg>
                    </div>
                    <p className="text-3xl font-semibold text-gray-900">{modelAccuracy ? `${modelAccuracy}%` : 'Loading...'}</p>
                    <p className="text-xs text-gray-400">Model Accuracy</p>
                </div>

                {/* Recent Tests Card */}
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow transition-shadow duration-300 text-center">
                    <div className="mb-3 text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12H9m6 4H9m3-10h-3m9 0h-3m-6 0H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-6z" />
                        </svg>
                    </div>
                    <p className="text-3xl font-semibold text-gray-900">{recentTests.length}</p>
                    <p className="text-xs text-gray-400">Recent Tests</p>
                </div>
            </div>

        </div>
    );
};

export default DashboardPage;
