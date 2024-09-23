"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation'; // Import useRouter
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import logo from '../../public/images/logoelcdl.png';
import avatarFallback from '../../public/images/avatar.png'; // Fallback avatar

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { data: session }: any = useSession(); // Get session data
    const router = useRouter(); // Initialize useRouter

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const linkClassNames = (path: string) =>
        `text-sm font-medium ${pathname === path
            ? 'text-[#0D7C66] underline underline-offset-4 decoration-[#0D7C66]' 
            : 'text-gray-800'
        } hover:text-[#0D7C66] hover:underline hover:decoration-[#0D7C66] focus:text-[#0D7C66] focus:underline focus:decoration-[#0D7C66] transition duration-300`;

    const handleSignOut = () => {
        signOut({ callbackUrl: '/login' }); // Redirect to login page after sign out
    };

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="w-full flex justify-between items-center py-4 px-5 md:px-10 lg:px-28">
                <div className="flex items-center">
                    <Image src={logo} alt="Logo" width={40} height={40} />
                    <Link href="/" className="text-xl font-bold text-gray-900 ml-3">
                        EarlyEdge
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {isOpen ? <HiOutlineX className="text-2xl text-gray-800" /> : <HiOutlineMenu className="text-3xl text-gray-800" />}
                    </button>
                </div>
                <div className="hidden md:flex space-x-8 items-center">
                    <Link href="/" className={linkClassNames('/')}>Home</Link>
                    <Link href="/about" className={linkClassNames('/about')}>About</Link>
                    <Link href="/disabilities" className={linkClassNames('/disabilities')}>Detection Test</Link>
                    <Link href="/machinemodel" className={linkClassNames('/machinemodel')}>ML Model</Link>
                    <Link href="/resources" className={linkClassNames('/resources')}>Resources</Link>
                    <Link href="/contact" className={linkClassNames('/contact')}>Contact</Link>
                    {!session ? (
                        <>
                            <Link href="/login" className={linkClassNames('/login')}>Login</Link>
                            <Link
                                href="/register"
                                className={`border border-[#0D7C66] rounded-lg px-4 py-2 text-sm font-medium text-gray-800 
                                ${pathname === '/register' ? 'bg-[#0D7C66] text-white' : 'hover:bg-[#0D7C66] hover:text-white'} 
                                transition duration-300`}
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <span className="text-black">Hi {session.user?.name || 'User'}!</span>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <Image
                                            alt="User Avatar"
                                            src={session.user?.image || avatarFallback} // Use session avatar or fallback
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md">
                                    <li>
                                        <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
                                            Settings
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleSignOut} // Use the new handler
                                            className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-black bg-opacity-70 ${isOpen ? 'flex' : 'hidden'} md:hidden`}>
                <div className="bg-white w-64 h-full flex flex-col p-8 space-y-6 shadow-lg">
                    <button onClick={toggleMenu} aria-label="Close Menu" className="self-end">
                        <HiOutlineX className="text-3xl text-gray-800" />
                    </button>
                    <Link href="/" onClick={toggleMenu} className={linkClassNames('/')}>Home</Link>
                    <Link href="/about" onClick={toggleMenu} className={linkClassNames('/about')}>About</Link>
                    <Link href="/disabilities" onClick={toggleMenu} className={linkClassNames('/disabilities')}>Detection Test</Link>
                    <Link href="/machinemodel" onClick={toggleMenu} className={linkClassNames('/machinemodel')}>ML Model</Link>
                    <Link href="/resources" onClick={toggleMenu} className={linkClassNames('/resources')}>Resources</Link>
                    <Link href="/contact" onClick={toggleMenu} className={linkClassNames('/contact')}>Contact</Link>
                    {!session ? (
                        <>
                            <Link href="/login" onClick={toggleMenu} className={linkClassNames('/login')}>Login</Link>
                            <Link
                                href="/register"
                                onClick={toggleMenu}
                                className={`border border-[#0D7C66] rounded-lg px-4 py-2 text-sm font-medium text-gray-800 
                                ${pathname === '/register' ? 'bg-[#0D7C66] text-white' : 'hover:bg-[#0D7C66] hover:text-white'} 
                                transition duration-300`}
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <>
                            <span>Hi {session.user?.name || 'User'}!</span>
                            <button
                                onClick={() => {
                                    toggleMenu();
                                    handleSignOut();
                                }}
                                className="text-left"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
