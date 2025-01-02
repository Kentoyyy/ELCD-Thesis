"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faEnvelope, faChild } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Register = () => {
  const [error, setError] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false); // Checkbox state
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simplified and robust email regex
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const parentName = form["parentName"].value;
    const childName = form["childName"].value;
    const childAge = form["childAge"].value;
    const accountName = form["accountName"].value;
    const accountEmail = form["accountEmail"].value;
    const password = form["password"].value;

    if (!agreeTerms) {
      setError("You must agree to the Privacy Policy and Terms.");
      return;
    }

    if (!isValidEmail(accountEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ parentName, childName, childAge, accountName, accountEmail, password }),
      });

      if (res.status === 400) {
        setError("This email is already registered.");
      } else if (res.status === 200) {
        setError("");
        router.push("/login");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again.");
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google"); // Trigger Google OAuth
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
              Sign Up First!
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Input Fields */}
              {[
                { name: "parentName", label: "Parent's Full Name", type: "text", placeholder: "Enter Parent's Name", icon: faUser },
                { name: "childName", label: "Child's Name", type: "text", placeholder: "Enter Child's Name", icon: faChild },
                { name: "accountName", label: "Name", type: "text", placeholder: "Enter Your Name", icon: faUser },
                { name: "accountEmail", label: "Email", type: "email", placeholder: "Enter Email Address", icon: faEnvelope },
                { name: "password", label: "Password", type: "password", placeholder: "Enter Password", icon: faLock },
              ].map((field, index) => (
                <div key={index} className="relative flex items-center">
                  <FontAwesomeIcon icon={field.icon} className="absolute left-3 text-gray-400 text-lg" />
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="w-full pl-10 pr-3 py-2 text-black bg-transparent border-b-2 border-gray-300 text-sm focus:outline-none focus:border-primary-col transition duration-200"
                  />
                </div>
              ))}

              {/* Child's Age Dropdown */}
              <div className="relative flex items-center">
                <FontAwesomeIcon icon={faChild} className="absolute left-3 text-gray-400 text-lg" />
                <select
                  id="childAge"
                  name="childAge"
                  defaultValue=""
                  required
                  className="w-full pl-10 pr-3 py-2 text-black bg-transparent border-b-2 border-gray-300 text-sm focus:outline-none focus:border-primary-col transition duration-200"
                >
                  <option value="" disabled>
                    Select Child's Age (2-7)
                  </option>
                  {[2, 3, 4, 5, 6, 7].map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>

              {/* Checkbox for Terms */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                  className="w-4 h-4 cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <Link href="/privacy-policy" className="text-primary-color hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" className="text-primary-color hover:underline">
                    Terms of Service
                  </Link>
                </label>
              </div>

              {error && <p className="text-red-600 text-sm text-center">{error}</p>}
              <button
                type="submit"
                disabled={!agreeTerms}
                className={`w-full px-3 py-2 text-white text-sm rounded-md transition duration-200 ${
                  agreeTerms
                    ? "bg-primary-color hover:bg-secondary-color focus:ring-2 focus:ring-blue-400"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Register
              </button>
            </form>

            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 mt-4 px-3 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
            >
              <FontAwesomeIcon icon={faGoogle} className="text-lg" />
              Continue with Google
            </button>

            <div className="text-center mt-4">
              <Link href="/login" className="text-sm text-primary-color hover:underline">
                Already have an account? Login
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full md:w-1/2 h-[200px] md:h-auto bg-primary-color flex flex-col items-center justify-start">
            <div className="w-full text-center p-4">
              <blockquote className="text-lg font-semibold italic text-white">
                "Play is the highest form of research"
              </blockquote>
            </div>
            <img
              src="/images/pictureereg.png"
              alt="Welcome Image"
              className="object-contain w-3/4 h-auto rounded-r-xl"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Register;
