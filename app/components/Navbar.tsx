// components/Navbar.jsx
"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import logo from '../../public/images/logoelcdl.png';
import avatar from '../../public/images/avatar.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { data: session }: any = useSession();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const linkClassNames = (path: string) =>
        `text-sm font-medium ${pathname === path
            ? 'text-[#0D7C66] underline underline-offset-4 decoration-[#0D7C66]' // Active link gets the green color and underline
            : 'text-gray-800'
        } hover:text-[#0D7C66] hover:underline hover:decoration-[#0D7C66] focus:text-[#0D7C66] focus:underline focus:decoration-[#0D7C66] transition duration-300`;
    
    

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
                    <Link href="/" className={linkClassNames('/')}>
                        Home
                    </Link>
                    <Link href="/about" className={linkClassNames('/about')}>

                        About
                    </Link>
                    <Link href="/disabilities" className={linkClassNames('/disabilities')}>
                        Detection Test
                    </Link>
                    <Link href="/machinemodel" className={linkClassNames('/machinemodel')}>
                        ML Model
                    </Link>
                    <Link href="/resources" className={linkClassNames('/resources')}>
                        Resources
                    </Link>
                    <Link href="/contact" className={linkClassNames('/contact')}>
                        Contact
                    </Link>
                    {!session ? (
                        <>
                            <Link href="/login" className={linkClassNames('/login')}>
                                Login
                            </Link>
                           
                        </>
                    ) : (
                        <>
                            <div className="flex items-center space-x-2">
                              <span className="text-black">{session.user?.email}</span>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                        
                                            <Image
                                                alt="User Avatar"
                                                src={session.user?.image || avatar} // If session has image, use it, otherwise use the imported fallback avatar
                                                width={40}
                                                height={40}
                                                className="rounded-full"
                                            />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link href="/profile">
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/settings">
                                                Settings
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => signOut()}
                                                className="text-left"
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-black bg-opacity-70 ${isOpen ? 'flex' : 'hidden'} md:hidden`}>
                <div className="bg-white w-64 h-full flex flex-col p-8 space-y-6 shadow-lg">
                    <button onClick={toggleMenu} aria-label="Close Menu" className="self-end">
                        <HiOutlineX className="text-3xl text-gray-800" />
                    </button>
                    <Link href="/" onClick={toggleMenu} className={linkClassNames('/')}>
                        Home
                    </Link>
                    <Link href="/about" onClick={toggleMenu} className={linkClassNames('/about')}>
                        About
                    </Link>
                    <Link href="/disabilities" onClick={toggleMenu} className={linkClassNames('/disabilities')}>
                        Detection Test
                    </Link>
                    <Link href="/machinemodel" onClick={toggleMenu} className={linkClassNames('/machinemodel')}>
                        ML Model
                    </Link>
                    <Link href="/resources" onClick={toggleMenu} className={linkClassNames('/resources')}>
                        Resources
                    </Link>
                    <Link href="/contact" onClick={toggleMenu} className={linkClassNames('/contact')}>
                        Contact
                    </Link>
                    {!session ? (
                        <>
                            <Link href="/login" onClick={toggleMenu} className={linkClassNames('/login')}>
                                Login
                            </Link>
                            <Link href="/register" onClick={toggleMenu} className={linkClassNames('/register')}>
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <span>{session.user?.email}</span>
                            <button
                                onClick={() => {
                                    toggleMenu();
                                    signOut();
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
