"use client";

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Welcome: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  const handleProceed = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="/images/elcdfavicon.png"
          alt="Logo"
          className="w-40 h-40 mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h1
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Welcome to <span className="font-extrabold">EarlyEdge</span>, {session?.user?.name}!
        </motion.h1>

        <motion.p
          className="text-gray-400 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >s
          Your gateway to uncovering the power of early child detection of learning disabilities using advanced machine learning insights
        </motion.p>
      </motion.div>

      <motion.button
        onClick={handleProceed}
        className="mt-10 px-6 py-3 bg-primary-color text-white rounded-full text-sm hover:bg-secondary-color transition duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Proceed
      </motion.button>
    </div>
  );
};

export default Welcome;
