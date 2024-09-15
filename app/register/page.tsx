"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Register = () => {
    const [error, setError] = useState("");
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/");
        }
    }, [sessionStatus, router]);

    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const parentName = e.target[0].value;
        const childName = e.target[1].value;
        const childAge = e.target[2].value;
        const accountName = e.target[3].value;
        const accountEmail = e.target[4].value;
        const password = e.target[5].value;
    
        if (!isValidEmail(accountEmail)) {
            setError("Email is invalid");
            return;
        }
    
        if (!password || password.length < 8) {
            setError("Password is invalid");
            return;
        }
    
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    parentName,
                    childName,
                    childAge,
                    accountName,
                    accountEmail,
                    password,
                }),
            });
    
            console.log("Response:", await res.text());
    
            if (res.status === 400) {
                setError("This email is already registered");
            } else if (res.status === 200) {
                setError("");
                router.push("/login");
            }
        } catch (error) {
            setError("Error, try again");
            console.log("Fetch Error:", error);
        }
    };
    

    if (sessionStatus === "loading") {
        return <h1>Loading...</h1>;
    }

    return (
        sessionStatus !== "authenticated" && (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Register</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="parentName" className="block text-sm font-medium text-gray-600 mb-1">Parent's Full Name</label>
                            <input
                                id="parentName"
                                type="text"
                                placeholder="Parent's Full Name"
                                required
                                className="w-full px-3 py-2 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-0"
                            />
                        </div>
                        <div>
                            <label htmlFor="childName" className="block text-sm font-medium text-gray-600 mb-1">Child's Name</label>
                            <input
                                id="childName"
                                type="text"
                                placeholder="Child's Name"
                                required
                                className="w-full px-3 py-2 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-0"
                            />
                        </div>
                        <div>
                            <label htmlFor="childAge" className="block text-sm font-medium text-gray-600 mb-1">Child's Age</label>
                            <input
                                id="childAge"
                                type="number"
                                placeholder="Child's Age"
                                required
                                className="w-full px-3 py-2 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-0"
                            />
                        </div>
                        <div>
                            <label htmlFor="accountName" className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                            <input
                                id="accountName"
                                type="text"
                                placeholder="Name"
                                required
                                className="w-full px-3 py-2 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-0"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email Address"
                                required
                                className="w-full px-3 py-2 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-0"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter Password"
                                required
                                className="w-full px-3 py-2 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-0"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Register
                        </button>
                        {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}
                    </form>
                    <div className="text-center text-gray-500 mt-4">- OR -</div>
                    <Link
                        href="/login"
                        className="block text-center text-blue-500 hover:underline mt-2"
                    >
                        Login with an existing account
                    </Link>
                </div>
            </div>
        )
    );
};

export default Register;
