import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "@/utils/SessionProvider"; // Your custom provider
import ConditionalNavbar from "@/app/components/ConditionalNavbar"; // Conditional navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EarlyEdge | Home",
  icons: {
    icon: "/images/elcdfavicon.png", // Correct favicon path in `public`
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <AuthProvider>
          <div className="w-full">
            {/* Conditionally render the Navbar */}
            <ConditionalNavbar />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
