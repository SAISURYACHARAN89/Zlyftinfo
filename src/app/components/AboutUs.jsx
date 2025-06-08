"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PixelCard from "./Pixel";
import Dock from "./Dock";
import { AiOutlineTeam } from "react-icons/ai";
import { VscHome } from "react-icons/vsc";
import RollingGallery from "./Rolling";
import SplitText from "./Split";
import ScrambledText from "./Scramble";
const addLineBreaks = (text) => {
  const words = text.split(" ");
  const parts = [];

  for (let i = 0; i < words.length; i += 5) {
    parts.push(words.slice(i, i + 5).join(" "));
  }

  return parts.map((part, idx) => (
    <React.Fragment key={idx}>
      {part}
      <br />
    </React.Fragment>
  ));
};

const AboutHeroCards = () => {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const descriptionLeft = `With a passion for innovation, Sai Surya drives the tech vision of ZLYFT, crafting autonomous drone navigation and AI-powered delivery systems.`;
  const descriptionRight = `Krishna brings a unique blend of leadership and technical insight to ZLYFT, steering product strategy and user experience.`;

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex flex-col items-center justify-center px-6 md:px-12 py-12">
      {/* Dock */}
      <Dock
        items={[
          {
            icon: <VscHome size={22} />,
            label: "Home",
            onClick: () => router.push("/"),
          },
          {
            icon: <AiOutlineTeam size={22} />,
            label: "Team",
            onClick: () => router.push("/aboutus"),
          },
        ]}
        panelHeight={68}
        baseItemSize={54}
        magnification={74}
        distance={160}
        spring={{ mass: 0.1, stiffness: 150, damping: 12 }}
      />

      {/* Adjusted wrapper to reduce gap */}

      {/* Card + Gallery Container */}
      <div className="bg-black bg-opacity-80 rounded-xl p-6 md:p-8 max-w-4xl w-full mt-0 flex flex-col items-center gap-8">
        {/* Team Cards + Gallery */}
        <div
          className={`flex ${
            isMobile ? "flex-col" : "flex-row"
          } flex-wrap justify-center items-center gap-8 w-full`}
        >
          <PixelCard
            name="Krishna Vegiraju"
            title="Co-Founder & CEO"
            age={20}
            education="Medical Student"
            description={addLineBreaks(descriptionRight)}
          />

          <div className={`${isMobile ? "w-full" : "w-[750px]"}`}>
            <RollingGallery autoplay={true} pauseOnHover={true} />
          </div>

          <PixelCard
            name="Sai Surya Charan Pentapati"
            title="Co-Founder & CTO"
            age={20}
            education="B.Tech in Computer Science"
            description={addLineBreaks(descriptionLeft)}
          />
        </div>
      </div>
      <div className="text-7xl font-semibold text-center mb-1">
        <SplitText
          text="ZLYFT moves what matters—autonomously"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          rootMargin="-100px"
        />
      </div>

      <ScrambledText
        text="Welcome to ZLYFT"
        className="text-base font-semibold text-center mt-0"
        delay={200}
        duration={0.8}
        speed={0.5}
        scrambleChars=".:"
      >
        <p style={{ fontSize: "12px", lineHeight: "1.3", marginTop: "0.1rem" }}>
          While others pitch ideas, we build. At Zlyft, we’re not waiting for
          the future—we’re flying into it. In just days, we’ve turned vision
          into hardware, code into action, and talk into test flights. Our
          mission is clear: dominate last-mile delivery with AI-driven drones
          that are faster, cheaper, smarter, and built for scale. From groceries
          and medicine to hot meals delivered quicker than any bike—we’re
          proving it city by city. Because execution trumps everything.
        </p>
      </ScrambledText>
    </section>
  );
};

export default AboutHeroCards;
