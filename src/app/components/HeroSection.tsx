'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-start h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to ZLYFT
      </motion.h1>
      <motion.p
        className="text-lg mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Your futuristic autonomous drone delivery solution for fast and efficient logistics. <br />
        Experience the future of delivery with our cutting-edge VTOL drones.
        
        
      </motion.p>
      <motion.button
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        View More
      </motion.button>
    </section>
  );
}
