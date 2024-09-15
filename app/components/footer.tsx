import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../../public/images/logoelcdl.png'; // Ensure this path is correct

const FooterNav = () => {
  return (
    <footer className="bg-gray-50 text-black py-6">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
        
        {/* Logo */}
        <div className="mb-4">
          <Image 
            src={logo} 
            alt="ELCD Logo" 
            width={55} 
            height={55} 
            className="mx-auto"
          />
        </div>

        {/* Copyright Text */}
        <p className="text-xs md:text-sm mb-4 text-primary-color">
          &copy; 2023-2024 ELCD, Inc. All rights reserved.
        </p>

        {/* Navigation Links */}
        <ul className="flex justify-center space-x-4 md:space-x-6 mb-4 text-xs md:text-sm">
          <li>
            <a href="/privacy" className="text-black hover:text-gray-400">
              Privacy Notice
            </a>
          </li>
          <li>
            <a href="/terms" className="text-black hover:text-gray-400">
              Terms of Services
            </a>
          </li>
        </ul>

        {/* Social Media Icons (Optional) */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com" className="text-black hover:text-gray-400">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" className="text-black hover:text-gray-400">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" className="text-black hover:text-gray-400">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;