import React from "react";
import { motion } from "framer-motion";

const MotionCard = ({ children }) => {
  return (
    <motion.div
    
      whileHover={{
        scale: 1.05,
        rotate: 1,
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionCard;