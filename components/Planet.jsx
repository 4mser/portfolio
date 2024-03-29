import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const Planet = ({ index, totalSlides }) => {
  const controls = useAnimation();

  useEffect(() => {
    // Calcula los grados de rotación en función del índice actual del slider.
    const degreesPerSlide = 142 / totalSlides;
    const newRotation = degreesPerSlide * index;

    // Anima directamente al nuevo valor de rotación.
    controls.start({ rotate: newRotation });
  }, [index, totalSlides, controls]);

  return (
    <div className="fixed z-50 p-5 select-none -bottom-60 left-1/2 -translate-x-1/2 flex items-center justify-center">
      <motion.div
        className="relative w-72 h-72 border-2 rounded-full flex items-center justify-center"
        animate={controls}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Orbiting planet */}
        <motion.div
          className="w-7 h-7 shadow-custom2 rounded-full absolute p-px flex justify-center items-center"
          style={{
            right: "82%",
            translateX: "0%",
            translateY: "-350%",
            background: "var(--degree)",
            animation: "gradient 7s ease infinite",
            backgroundSize: "200% 30%",
          }}
        >
          <div className="bg-custom-btn w-full h-full rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Planet;
