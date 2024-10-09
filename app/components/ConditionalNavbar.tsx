// app/components/ConditionalNavbar.tsx
"use client"; // This is a client component

import Navbar from "./Navbar"; // Import your Navbar component
import { usePathname } from "next/navigation";

const ConditionalNavbar = () => {
  const pathname = usePathname();

  // Hide the Navbar on admin routes
  const shouldShowNavbar = !pathname.startsWith("/admin-panel");

  if (!shouldShowNavbar) {
    return null; // Don't render anything for admin pages
  }

  return <Navbar />; // Render the Navbar on non-admin routes
};

export default ConditionalNavbar;
