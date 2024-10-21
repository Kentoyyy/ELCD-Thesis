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

    const validateAge = (e: any) => {
        const age = e.target.value;
        if (age < 2 || age > 7) {
            setError("Child's age must be between 2 and 7");
        } else {
            setError("");
        }
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

        if (childAge < 2 || childAge > 7) {
            setError("Child's age must be between 2 and 7");
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
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-xl w-full max-w-6xl overflow-hidden">
                    {/* Left side - Form */}
                    <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                            Create Your Account<br></br>
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            {[
                                { label: "Parent's Full Name", type: "text", placeholder: "Enter Parent's Name" },
                                { label: "Child's Name", type: "text", placeholder: "Enter Child's Name" },
                                { label: "Child's Age", type: "number", placeholder: "Enter Child's Age" },
                                { label: "Name", type: "text", placeholder: "Enter Your Name" },
                                { label: "Email", type: "email", placeholder: "Enter Email Address" },
                                { label: "Password", type: "password", placeholder: "Enter Password" },
                            ].map((field, index) => (
                                <div key={index} className="relative flex flex-col">
                                    <label htmlFor={field.label} className="block text-xs font-medium text-gray-600 mb-1">
                                        {field.label}
                                    </label>
                                    <input
                                        id={field.label}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        required
                                        min={field.label === "Child's Age" ? 2 : undefined}
                                        max={field.label === "Child's Age" ? 7 : undefined}
                                        className={`w-full px-3 py-2 text-black bg-transparent border-b-2 border-gray-300 text-sm focus:outline-none focus:border-blue-500 transition duration-200`}
                                        onBlur={field.label === "Child's Age" ? validateAge : undefined}
                                    />
                                    {field.label === "Child's Age" && error && (
                                        <span className="text-xs text-red-600 mt-1">
                                            {error}
                                        </span>
                                    )}
                                </div>
                            ))}
                            <button
                                type="submit"
                                className="w-full px-3 py-2 bg-primary-color text-white text-sm rounded-md hover:bg-secondary-color focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                            >
                                Register
                            </button>
                            {error && <p className="text-red-600 text-xs mt-2 text-center">{error}</p>}
                        </form>
                        <div className="text-center mt-4">
                            <Link href="/login" className="text-xs text-primary-color hover:underline">
                                Already have an account? Login
                            </Link>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="w-full md:w-1/2 h-[250px] md:h-auto relative overflow-hidden">
                        <img
                            src="/images/kidlogin.png"
                            alt="Welcome Image"
                            className="object-contain w-full h-full rounded-r-xl"
                        />
                    </div>
                </div>
            </div>
        )
    );
};

export default Register;
