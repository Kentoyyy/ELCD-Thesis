"use client";

import Navbar from "./Navbar"; // Assuming you have a Navbar component
import { usePathname } from "next/navigation";

const ConditionalNavbar = () => {
  const pathname = usePathname();

  // Hide the navbar on the "/admin-panel" and "/welcome" pages
  const shouldShowNavbar = !pathname.startsWith("/admin-panel") && pathname !== "/welcome";

  if (!shouldShowNavbar) {
    return null;
  }

  return <Navbar />;
};

export default ConditionalNavbar;
