'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    title: 'VTOL Design',
    desc: 'Vertical takeoff and landing for ultimate flexibility and speed.',
    icon: '✈️'
  },
  {
    title: 'Autonomous Flight',
    desc: 'Smart AI navigation with QR code verified landing.',
    icon: '🤖'
  },
  {
    title: 'Eco-Friendly',
    desc: 'Zero-emission electric motors and sustainable materials.',
    icon: '🌿'
  },
  {
    title: 'Real-Time Tracking',
    desc: 'Track your package live with GPS integration and app support.',
    icon: '📍'
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="pt-16 pb-32 bg-gradient-to-b from-gray-950 to-black text-white w-full">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            ZLYFT Features
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Discover the cutting-edge technology powering the future of autonomous aerial delivery.
          </p>
        </motion.div>

        <div className="space-y-4 text-left max-w-3xl mx-auto">
          {features.map(({ title, desc, icon }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`rounded-xl border ${activeIndex === index ? 'border-gray-600' : 'border-gray-700'} transition-all duration-300 overflow-hidden`}>
                {/* Glassy container background */}
                <div className={`absolute inset-0 bg-gray-800/30 backdrop-blur-md ${activeIndex === index ? 'opacity-100' : 'opacity-70'} transition-opacity duration-300`}></div>
                
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-5 text-left relative z-10 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl backdrop-blur-sm ${activeIndex === index ? 'bg-gray-700/60 text-blue-400' : 'bg-gray-800/50 text-gray-400'} transition-all duration-300`}>
                      {icon}
                    </div>
                    <h3 className={`text-xl font-medium ${activeIndex === index ? 'text-white' : 'text-gray-200'} transition-colors duration-300`}>
                      {title}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm ${activeIndex === index ? 'bg-gray-700/60 rotate-180' : 'bg-gray-800/50'} transition-all duration-300`}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`text-gray-400 ${activeIndex === index ? 'rotate-180 text-blue-400' : ''} transition-transform duration-300`}
                    >
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      key="desc"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-5 pb-5 relative z-10"
                    >
                      <div className="pl-16 pr-4">
                        {/* Subtle glassy pointer container */}
                        <div className="border-t border-gray-700 pt-4">
                          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                              {desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Subtle glow effect */}
              {activeIndex === index && (
                <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}