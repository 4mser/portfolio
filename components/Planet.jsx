import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const Planet = ({ index, totalSlides }) => {
  // Controlador de animación de Framer Motion.
  const controls = useAnimation();

  useEffect(() => {
    // Calcula los grados de rotación en función del índice actual del slider.
    const degreesPerSlide = 180 / totalSlides;
    const newRotation = degreesPerSlide * index;

    // Anima suavemente al nuevo valor de rotación.
    controls.start({ rotate: newRotation });
  }, [index, totalSlides, controls]);

  return (
    <div className="fixed z-50 p-5 select-none -bottom-40 left-1/2 -translate-x-1/2 flex items-center justify-center">
      <motion.div
        className="relative w-56 h-56 border-2 rounded-full flex items-center justify-center"
        animate={controls}
        transition={{ type: "tween", ease: "linear", duration: 0.3 }}
      >
        {/* Orbiting planet */}
        <motion.div
          className="w-7 h-7 bg-gradient-to-tr from-emerald-500 to-sky-400 rounded-full absolute"
          style={{
            right: "87%",
            translateX: "0%",
            translateY: "-200%",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Planet;