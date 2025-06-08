"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import dynamic from "next/dynamic";

import Dock from './components/Dock';
import Footer from './components/Footer';
import { TbDrone } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";
import { VscHome } from "react-icons/vsc";
import RotatingText from './components/Tag';
import Image from 'next/image';
import Contact from './components/Contact';
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";

// Dynamic imports with SSR disabled
const Particles = dynamic(() => import("./components/Particles"), { ssr: false });
const EarthCanvas = dynamic(() => import("./components/Earth"), { ssr: false });

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed Dock */}
      <div>
        <Dock
          items={[
            { icon: <VscHome size={22} />, label: 'Home', onClick: () => alert('Home!') },
            { 
              icon: <AiOutlineTeam size={22} />, 
              label: 'Team', 
              onClick: () => router.push('/aboutus') // Changed to use router navigation
            },
          ]}
          panelHeight={68}
          baseItemSize={54}
          magnification={74}
          distance={160}
          spring={{ mass: 0.1, stiffness: 150, damping: 12 }}
        />
      </div>
      {/* Hero Section with Particles */}
      <div className="relative w-[95%] max-w-screen-xl mx-auto mt-4 rounded-[40px] overflow-hidden shadow-2xl bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#1f1f1f]">
        <div className="relative w-full h-[600px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
          <Particles
            className="absolute inset-0 z-0"
            particleColors={['#ffffff', '#ffffff']}
            particleCount={300}
            particleSpread={20}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
          <div className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full max-w-xl px-4 text-center">
            <h1
              className="font-bold text-red-800 text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem]"
              style={{ lineHeight: 1 }}
            >
              Zlyft
            </h1>
            <div className="-mt-1">
              <RotatingText
                texts={['Delivering Food', 'Groceries', 'Medicines']}
                mainClassName="px-3 bg-cyan-300 text-black rounded-lg overflow-hidden py-1 text-center"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Drone Image with Annotations */}
      <div className="w-full flex justify-center mt-6 mb-7 px-8 relative">
        <Image
          src="/assets/pic1.png"
          alt="Hero Background"
          width={1200}
          height={350}
          className="w-[80%] max-w-[1200px] rounded-xl sm:w-full"
          style={{ transform: 'translateY(45px)' }}
          loading="lazy"  // Lazy loading enabled
          unoptimized
        />

        {/* Dot 1 */}
        <div
          className="absolute top-[50px] left-[54.5%] z-[60]"
          role="button"
          tabIndex={0}
          aria-label="30 kilometer range"
        >
          <div className="relative group">
            <div className="relative w-15 h-15 rounded-full cursor-pointer ring-2 ring-black ring-opacity-80">
              <div className="absolute inset-0 bg-black rounded-full z-10" />
              <div className="absolute inset-0 rounded-full shadow-[0_0_15px_4px_rgba(255,255,255,0.9)] z-0" />
            </div>
            <div className="absolute bottom-0 left-1/2 h-0 w-[2px] bg-black/50 group-hover:h-16 transition-all duration-500 ease-out origin-bottom transform -translate-x-1/2">
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-white to-transparent group-hover:h-full transition-all duration-300 delay-100" />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0 group-hover:-translate-y-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-end pb-2">
              <div className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm text-white text-sm px-4 py-3 rounded-lg shadow-2xl border border-gray-700 max-w-[220px]">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-300 text-lg">🚀</span>
                  <span className="font-medium">30 Km range</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dot 2 */}
        <div
          className="absolute top-[150px] right-[57%] z-[60]"
          role="button"
          tabIndex={0}
          aria-label="5 kilogram payload capacity"
        >
          <div className="relative group">
            <div className="relative w-10 h-10 rounded-full cursor-pointer ring-2 ring-black ring-opacity-80">
              <div className="absolute inset-0 bg-black rounded-full z-10" />
              <div className="absolute inset-0 rounded-full shadow-[0_0_15px_4px_rgba(255,255,255,0.9)] z-0" />
            </div>
            <div className="absolute bottom-0 right-1/2 h-0 w-[2px] bg-black/50 group-hover:h-16 transition-all duration-500 ease-out origin-bottom transform translate-x-1/2">
              <div className="absolute bottom-0 right-0 w-full h-0 bg-gradient-to-t from-white to-transparent group-hover:h-full transition-all duration-300 delay-100" />
            </div>
            <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-0 group-hover:-translate-y-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-end pb-2">
              <div className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm text-white text-sm px-4 py-3 rounded-lg shadow-2xl border border-gray-700 max-w-[220px]">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-300 text-lg">📦</span>
                  <span className="font-medium">5kg payload capacity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dot 3 */}
        <div
          className="absolute bottom-[40px] left-[56%] z-[60]"
          role="button"
          tabIndex={0}
          aria-label="Level 4 autonomous flights"
        >
          <div className="relative group">
            <div className="relative w-10 h-10 rounded-full cursor-pointer ring-2 ring-black ring-opacity-80">
              <div className="absolute inset-0 bg-black rounded-full z-10" />
              <div className="absolute inset-0 rounded-full shadow-[0_0_15px_4px_rgba(255,255,255,0.9)] z-0" />
            </div>
            <div className="absolute top-0 left-1/2 h-0 w-[2px] bg-black/50 group-hover:h-16 transition-all duration-500 ease-out origin-top transform -translate-x-1/2">
              <div className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-white to-transparent group-hover:h-full transition-all duration-300 delay-100" />
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-0 group-hover:translate-y-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-start pt-2">
              <div className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm text-white text-sm px-4 py-3 rounded-lg shadow-2xl border border-gray-700 max-w-[220px]">
                <div className="flex items-center gap-2">
                  <span className="text-pink-300 text-lg">🤖</span>
                  <span className="font-medium">Level 4 autonomous flights</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dot 4 */}
        <div
          className="absolute bottom-[30px] right-[50%] z-[60]"
          role="button"
          tabIndex={0}
          aria-label="Minimal noise emissions"
        >
          <div className="relative group">
            <div className="relative w-10 h-10 rounded-full cursor-pointer ring-2 ring-black ring-opacity-80">
              <div className="absolute inset-0 bg-black rounded-full z-10" />
              <div className="absolute inset-0 rounded-full shadow-[0_0_15px_4px_rgba(255,255,255,0.9)] z-0" />
            </div>
            <div className="absolute top-0 right-1/2 h-0 w-[2px] bg-black/50 group-hover:h-16 transition-all duration-500 ease-out origin-top transform translate-x-1/2">
              <div className="absolute top-0 right-0 w-full h-0 bg-gradient-to-b from-white to-transparent group-hover:h-full transition-all duration-300 delay-100" />
            </div>
            <div className="absolute top-0 right-1/2 transform translate-x-1/2 translate-y-0 group-hover:translate-y-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-start pt-2">
              <div className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm text-white text-sm px-4 py-3 rounded-lg shadow-2xl border border-gray-700 max-w-[220px]">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-300 text-lg">🔇</span>
                  <span className="font-medium">Minimal noise emissions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <HeroSection />
      </div>

      {/* Contact and Earth Section */}
      <section className="w-full max-w-screen-xl mx-auto px-4 py-10">
        <div className="flex flex-col gap-10 items-center">
          {/* Globe at the top */}
          {/* <div className="w-full h-[350px] sm:h-[450px] ">
            <EarthCanvas />
          </div> */}

          {/* Contact form below */}
          <div className="w-full max-w-[450px]">
            <Contact />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
  