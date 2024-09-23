"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    const [error, setError] = useState("");
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
        const email = e.target[0].value;
        const password = e.target[1].value;

        if (!isValidEmail(email)) {
            setError("Email is invalid");
            return;
        }

        if (!password || password.length < 8) {
            setError("Password is invalid");
            return;
        }

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (res?.error) {
            setError("Invalid email or password");
            if (res?.url) router.replace("/");
        } else {
            setError("");
        }
    };

    if (sessionStatus === "loading") {
        return <h1>Loading...</h1>;
    }

    return (
        sessionStatus !== "authenticated" && (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                    {/* Logo Section */}
                    <div className="flex justify-center mb-6">
                        <img src="/path/to/logo.png" alt="Logo" className="h-12 w-auto" />
                    </div>
                    
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Welcome back! Log in to your profile</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Sign In
                            </button>
                        </div>
                        {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-500">Or sign in with</p>
                        <div className="flex justify-center mt-4 space-x-3">
                            <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800 hover:bg-gray-200">
                                Google
                            </button>
                            <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800 hover:bg-gray-200">
                                Facebook
                            </button>
                        </div>
                    </div>

                    <div className="mt-4 text-center">
                        <Link href="/register" className="text-sm text-blue-500 hover:underline">Don't have an account? Sign Up</Link>
                    </div>
                </div>
            </div>
        )
    );
};

export default Login;
