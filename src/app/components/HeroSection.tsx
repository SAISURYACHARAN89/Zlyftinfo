'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import VerticalTimeLine from './VerticalTimeLine';

export default function HeroSection() {
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);

  const handleClick = () => {
    setIsTimelineVisible(prev => !prev);
  };

  return (
    <section className="flex flex-col items-center justify-start min-h-screen py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">

    {/* Responsive Video */}
      <div className="w-[80%] max-w-4xl mb-6  overflow-hidden rounded-2xl">
        <video
          src="/assets/vid1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>

      {/* Button */}
      <div style={{height : "40px"}}></div>
      <div className="w-[80%] max-w-4xl mb-10 flex justify-center">
        <motion.button
          onClick={handleClick}
          className={`px-6 py-2 rounded-full font-semibold shadow-lg transition 
            ${isTimelineVisible ? 'bg-red-600' : 'bg-blue-600'} 
            hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isTimelineVisible ? 'Hide Timeline' : 'Visualize Order'}
        </motion.button>
      </div>

      {/* Timeline */}
      <AnimatePresence mode="wait">
        {isTimelineVisible && (
          <motion.div
            key="timeline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="w-[90%] max-w-5xl"
          >
            <VerticalTimeLine activeTimeline="Order1" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tagline */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-16 mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        We don't burn cash on dark stores.
      </motion.h1>
    </section>
  );
}
