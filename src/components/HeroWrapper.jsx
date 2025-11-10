import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HeroWrapper = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  const handleMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const offsetX = (e.clientX - innerWidth / 20) / 40; // smaller value = stronger effect
    const offsetY = (e.clientY - innerHeight / 20) / 40;
    x.set(offsetX);
    y.set(offsetY);
  };

  return (
    <motion.div
    className="w-full h-full flex items-center justify-center xl:justify-end"
      onMouseMove={handleMove}
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      {children}
    </motion.div>
  );
};

export default HeroWrapper;
