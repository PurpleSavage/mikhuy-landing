"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-white text-black overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="overflow-hidden">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Gestión Inteligente para Cafetines Universitarios
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-600"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Optimiza la operación de tus cafeterías universitarias con nuestro
              sistema integral de gestión. Mejora la experiencia de tus
              estudiantes y aumenta la eficiencia.
            </motion.p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white hover:bg-gray-900 text-lg px-8 py-6">
              Solicitar Demo
            </button>
            <button className="border-black text-black hover:bg-gray-100 text-lg px-8 py-6">
              Conocer Más
            </button>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/mikhuy_logo.webp"
              alt="Mikhuy Mascot"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
