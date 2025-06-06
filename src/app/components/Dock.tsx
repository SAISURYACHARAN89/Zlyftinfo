"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from "framer-motion";
import React, {
  Children,
  cloneElement,
  useEffect,
  useState,
} from "react";

export type DockItemData = {
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  panelHeight?: number;
  baseItemSize?: number;
  dockHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  spring: SpringOptions;
  baseItemSize: number;
  magnification: number;
};

function DockItem({
  children,
  className = "",
  onClick,
  spring,
  magnification,
  baseItemSize,
}: DockItemProps) {
  const isHovered = useMotionValue(0);
  const magnificationScale = magnification / baseItemSize;

  // Scale from 1 to magnificationScale based on hover
  const scale = useSpring(
    useTransform(isHovered, [0, 1], [1, magnificationScale]),
    spring
  );

  return (
    <motion.div
      style={{ width: baseItemSize, height: baseItemSize, scale }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-2xl transition-transform duration-200 ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) =>
        cloneElement(child as React.ReactElement, { isHovered })
      )}
    </motion.div>
  );
}

type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
};

function DockLabel({ children, className = "", ...rest }: DockLabelProps) {
  const { isHovered } = rest as { isHovered: MotionValue<number> };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 3 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`${className} absolute top-full left-1/2 w-fit whitespace-nowrap rounded-md bg-black/80 px-2 py-0.5 text-xs text-white`}
          role="tooltip"
          style={{ x: "-50%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type DockIconProps = {
  className?: string;
  children: React.ReactNode;
};

function DockIcon({ children, className = "" }: DockIconProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.15, stiffness: 50, damping: 25 },
  magnification = 70,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
}: DockProps) {
  // Calculate fixed dock width to prevent shifting
  const dockWidth = baseItemSize * items.length + 32;

  return (
   <motion.div
  className={`fixed z-[9999] w-full flex justify-center items-center ${className}`}
  role="toolbar"
  aria-label="Application dock"
  style={{
    pointerEvents: 'none',
    top: '30px',  // pulls dock down from top
  }}
>
  <div
    className="flex items-center justify-center gap-4 px-8 py-1.5 rounded-full bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 shadow-lg"
    style={{
      width: '25%',
      height: 42,
      pointerEvents: 'auto',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
    }}
  >
    {items.map((item, index) => (
      <DockItem
        key={index}
        onClick={item.onClick}
        className={item.className}
        spring={spring}
        magnification={magnification}
        baseItemSize={baseItemSize}
      >
        <DockIcon>{item.icon}</DockIcon>
        <DockLabel>{item.label}</DockLabel>
      </DockItem>
    ))}
  </div>
</motion.div>

  );
}
