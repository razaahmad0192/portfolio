// ScrollComponent.jsx
import React from 'react';
import { motion, useScroll, useSpring   } from 'framer-motion';

function ScrollComponent() {
const { scrollYProgress } = useScroll();

  // smooth animation
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "5px",
        background: "linear-gradient(to right, #4f46e5, #3b82f6)",
        transformOrigin: "0%",
        scaleX: scaleX,
        zIndex: 9999
      }}
    />
  );
};

export default ScrollComponent;
