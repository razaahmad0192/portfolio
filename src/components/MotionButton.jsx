import React from "react";
import { motion } from "framer-motion";

const MotionButton = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 5px 15px rgba(0,0,0,0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: "inline-block",
        transition: "all 0.08s ease-in-out",
        borderRadius: "8px"
      }}
    >
      {children}
    </motion.div>
  );
};
export default MotionButton;
