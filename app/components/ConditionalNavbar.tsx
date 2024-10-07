// app/components/ConditionalNavbar.tsx
"use client"; // Mark as client component

import { usePathname } from "next/navigation";
import Navbar from "@/app/components/Navbar";

const ConditionalNavbar = () => {
  const pathname = usePathname(); // Get the current path

  // Conditionally render the Navbar based on pathname
  if (pathname === "/admin-panel") {
    return null; // Don't show Navbar on admin-panel page
  }

  return <Navbar />;
};

export default ConditionalNavbar;
