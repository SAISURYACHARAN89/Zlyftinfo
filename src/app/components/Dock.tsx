"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  type HTMLMotionProps,
  AnimatePresence,
  MotionStyle,
} from "framer-motion";
import React, {
  Children,
  cloneElement,
  useEffect,
  useState,
  ReactNode,
  DetailedReactHTMLElement,
  MouseEventHandler,
} from "react";

export type DockItemData = {
  icon: ReactNode;
  label: ReactNode;
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

interface DockItemProps extends Omit<HTMLMotionProps<"div">, "onClick"> {
  children: ReactNode;
  spring: SpringOptions;
  baseItemSize: number;
  magnification: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string; // Explicitly declare className
}

function DockItem({
  children,
  className = "",
  onClick,
  spring,
  magnification,
  baseItemSize,
  ...rest
}: DockItemProps) {
  const isHovered = useMotionValue(0);

  const scale = useSpring(
    useTransform(isHovered, [0, 1], [1, magnification / baseItemSize]),
    spring
  );

  // Clone children to inject isHovered
  const enhancedChildren = Children.map(children, (child) =>
    cloneElement(child as React.ReactElement<any>, { isHovered })
  );

  return (
  
  <motion.div<HTMLDivElement>
    style={{
      width: baseItemSize,
      height: baseItemSize,
      scale,
    } as MotionStyle}
    onHoverStart={() => isHovered.set(1)}
    onHoverEnd={() => isHovered.set(0)}
    onClick={onClick}
    className={`relative inline-flex items-center justify-center rounded-2xl transition-transform duration-200 ${className}`}
    tabIndex={0}
    role="button"
    aria-haspopup="true"
    onFocus={() => isHovered.set(1)}
    onBlur={() => isHovered.set(0)}
    {...rest}
  >
    {enhancedChildren}
  </motion.div>
);
  
}

type DockLabelProps = {
  className?: string;
  children: ReactNode;
  isHovered: ReturnType<typeof useMotionValue>;
};

function DockLabel({ children, className = "", isHovered }: DockLabelProps) {
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
  children: ReactNode;
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
  return (
    <motion.div
      className={`fixed z-[9999] w-full flex justify-center items-center ${className}`}
      role="toolbar"
      aria-label="Application dock"
      style={{
        pointerEvents: "none",
        top: "30px",
      }}
    >
      <div
        className="flex items-center justify-center gap-4 px-8 py-1.5 rounded-full bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 shadow-lg"
        style={{
          width: "25%",
          height: 42,
          pointerEvents: "auto",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
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
            <DockLabel isHovered={useMotionValue(0)}>{item.label}</DockLabel>
          </DockItem>
        ))}
      </div>
    </motion.div>
  );
}
