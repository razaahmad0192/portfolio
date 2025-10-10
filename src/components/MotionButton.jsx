import React from "react";
import { motion } from "framer-motion";

const MotionButton = ({ children, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.1,           // button grows
        boxShadow: "0px 5px 15px rgba(0,0,0,0.3)"
      }}
      whileTap={{ scale: 0.95 }} // click effect
      style={{
        border: "none",
        borderRadius: "8px",
        transition: "all 0.08s ease-in-out"
        
      }}
    >
      {children}
    </motion.button>
  );
};

export default MotionButton;
