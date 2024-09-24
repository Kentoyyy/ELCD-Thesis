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

            if (res.status === 400) {
                setError("This email is already registered");
            } else if (res.status === 200) {
                setError("");
                router.push("/login");
            }
        } catch (error) {
            setError("Error, try again");
        }
    };

    if (sessionStatus === "loading") {
        return <h1>Loading...</h1>;
    }

    return (
        sessionStatus !== "authenticated" && (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="flex bg-white shadow-lg rounded-lg w-full max-w-6xl h-auto">
                    {/* Left side - Form */}
                    <div className="w-1/2 p-8">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Create Your Account</h2>
                        <button className="w-full px-4 py-2 mb-4 bg-gray-100 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-200">
                            Sign up with Google
                        </button>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            {[
                                { label: "Parent's Full Name", type: "text", placeholder: "Enter Parent's Name" },
                                { label: "Child's Name", type: "text", placeholder: "Enter Child's Name" },
                                { label: "Child's Age", type: "number", placeholder: "Enter Child's Age" },
                                { label: "Name", type: "text", placeholder: "Enter Your Name" },
                                { label: "Email", type: "email", placeholder: "Enter Email Address" },
                                { label: "Password", type: "password", placeholder: "Enter Password" },
                            ].map((field, index) => (
                                <div key={index}>
                                    <label htmlFor={field.label} className="block text-sm font-medium text-gray-700 mb-1">
                                        {field.label}
                                    </label>
                                    <input
                                        id={field.label}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        required
                                        className="w-full px-4 py-2 bg-gray-50 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"
                                    />
                                </div>
                            ))}
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            >
                                Register
                            </button>
                            {error && <p className="text-red-600 text-sm mt-2 text-center">{error}</p>}
                        </form>
                        <div className="text-center mt-4">
                            <Link href="/login" className="text-sm text-blue-500 hover:underline">
                                Already have an account? Login
                            </Link>
                        </div>
                    </div>

                    {/* Right side - Welcome and chart */}
                    <div className="w-1/2 bg-gray-900 text-white p-8 flex flex-col justify-center items-center">
                        <h2 className="text-3xl font-bold mb-2 text-center">
                            Welcome To FillQuick Pay!
                        </h2>
                        <p className="text-gray-400 mb-6 text-center">
                            Join now for seamless payments. Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        </p>
                        {/* Placeholder for chart */}
                        <div className="bg-gray-800 rounded-lg p-4 w-full h-48 flex justify-center items-center">
                            <p className="text-gray-400">[Sales Report Chart Placeholder]</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Register;
