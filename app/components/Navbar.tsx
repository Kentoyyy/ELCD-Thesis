"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import logo from '../../public/images/logoelcdl.png';
import avatarFallback from '../../public/images/avatar.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
    const pathname = usePathname();
    const { data: session, status }: any = useSession();
    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        setResourcesDropdownOpen(false);
    };

    const toggleResourcesDropdown = () => {
        setResourcesDropdownOpen(!resourcesDropdownOpen);
        setDropdownOpen(false);
    };

    const linkClassNames = (path: string) =>
        `text-sm font-medium ${pathname === path
            ? 'text-[#0D7C66] underline underline-offset-4 decoration-[#0D7C66]'
            : 'text-gray-800'
        } hover:text-[#0D7C66] hover:underline hover:decoration-[#0D7C66] focus:text-[#0D7C66] focus:underline focus:decoration-[#0D7C66] transition duration-300`;

    const handleSignOut = () => {
        signOut({ callbackUrl: '/login' });
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
                <div className="hidden md:flex flex-grow justify-center space-x-8 ">
                    <Link href="/about" className={linkClassNames('/about')}>About us</Link>
                    <div className="relative">
                        <button onClick={toggleDropdown} className={linkClassNames('/assessment')}>
                            Assessment
                        </button>
                        {dropdownOpen && (
                            <ul className="absolute mt-2 py-2 w-64 bg-white border border-gray-300 shadow-lg rounded-lg z-10">
                                <li>
                                    <Link href="/assessment/dyslexia" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Dyslexia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/assessment/dysgraphia" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Dysgraphia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/assessment/dyscalculia" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Dyscalculia
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                    <div className="relative">
                        <button onClick={toggleResourcesDropdown} className={linkClassNames('/resources')}>
                            Explore Resources
                        </button>
                        {resourcesDropdownOpen && (
                            <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 py-4 w-[750px] bg-white border border-gray-200 shadow-lg rounded-lg z-10 grid grid-cols-3 gap-10 px-8">
                                {/* Articles, Guides, and Tutorials Column */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-600 mb-2 px-2">Topics</h3>
                                    <li>
                                        <Link href="/resources/articles" className="block py-2 px-2 text-gray-700 text-sm hover:text-primary-color">
                                            Articles
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/resources/guides" className="block py-2 px-2 text-gray-700 text-sm hover:text-primary-color">
                                            Guides
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/resources/tutorials" className="block py-2 px-2 text-gray-700 text-sm hover:text-primary-color">
                                            Tutorials
                                        </Link>
                                    </li>
                                </div>

                                {/* Cognitive Skills Assessment and Training Column */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-600 mb-2">Cognitive Skills and Training</h3>
                                    <li>
                                        <Link href="/cognitive-skills" className="block py-2 px-2 text-gray-700 text-sm hover:text-primary-color">
                                            What Cognitive Skills Do We Assess?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/training-children" className="block py-2 px-2 text-gray-700 text-sm hover:text-primary-color">
                                            Training for Children
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/training-adults" className="block py-2 px-2 text-gray-700 text-sm hover:text-primary-color">
                                            Training for Adults
                                        </Link>
                                    </li>
                                </div>

                                {/* Learning Disabilities Information Column */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-600 mb-2 px-5">Learning Disabilities Information</h3>
                                    <li>
                                        <Link href="/learning-information/understanding-dyslexia" className="block py-2 px-5 text-gray-700 text-sm hover:text-primary-color">
                                            Understanding Dyslexia
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/learning-information/understanding-dysgraphia" className="block py-2 px-5 text-gray-700 text-sm hover:text-primary-color">
                                            Understanding Dysgraphia
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/resources/dyscalculia" className="block py-2 px-5 text-gray-700 text-sm hover:text-primary-color">
                                            Understanding Dyscalculia
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        )}
                    </div>



                </div>
                <div className="hidden md:flex items-center space-x-2">
                    {status === 'loading' ? (
                        <p>Loading...</p>
                    ) : !session ? (
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
                                            src={session.user?.image || avatarFallback}
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
                                            onClick={handleSignOut}
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
        </nav>
    );
};

export default Navbar;
