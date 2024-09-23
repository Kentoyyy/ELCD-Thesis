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
        } else {
            setError("");
            if (res?.url) router.replace("/");
        }
    };

    if (sessionStatus === "loading") {
        return <h1>Loading...</h1>;
    }

    return (
        sessionStatus !== "authenticated" && (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="flex flex-col lg:flex-row w-full max-w-6xl shadow-2xl min-h-[600px] bg-white rounded-lg overflow-hidden">

                    <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
                        
                        <h1 className="text-3xl font-semibold text-gray-800 mb-2 font-robotoserif ">Welcome back!<br></br>Log in to your profile.</h1><br></br>
                        <p className="text-gray-600 mb-6">Enter your credentials to access your account.</p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-primary-color transition duration-300 p-2 bg-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    placeholder="********"
                                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-primary-color transition duration-300 p-2 bg-transparent"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span className="text-sm text-gray-600">Remember me</span>
                                </label>
                                <a href="#" className="text-sm text-gray-400 hover:underline">
                                    Forgot your password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary-color text-white p-3 rounded-lg font-semibold hover:bg-secondary-color-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Log In
                            </button>
                            {error && <p className="text-red-600 text-center mt-2">{error}</p>}
                        </form>
                        <div className="flex items-center justify-center mt-6">
                            <button className="flex items-center justify-center w-full p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
                                <img src="/images/google.png" alt="Google" className="w-5 h-5 mr-2" />
                                Sign in with Google
                            </button>
                        </div>
                        <div className="mt-6 text-center">
                            <span className="text-gray-600">Don't have an account? </span>
                            <Link href="/register" className="text-blue-600 hover:underline">
                                Sign up
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 bg-slate-50 relative flex flex-col items-center justify-center">
                        <img src="/images/logoelcdl.png" alt="Logo" className="w-35 h-35" />
                        <p className="mt-4 text-center text-gray-600">Empowering Early Detection for Brighter Futures</p> {/* Add your motto or tips here */}
                    </div>



                </div>
            </div>
        )
    );
};

export default Login;
