"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function MascotSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"], // Empieza cuando el 20% del contenedor entra
  });

  // La animación se dispara temprano y llega a su pico al 50% del contenedor visible
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 2, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0]);
  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 bg-radial from-[#FCB166] from-40% to-[#FFFCD7] rounded-t-full"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Conoce a Mikhuy
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Nuestro amigable asistente que te acompañará en la gestión de tus
            cafeterías.
          </p>
        </motion.div>

        {/* Contenedor con posiciones absolutas */}
        <div className="relative flex justify-center items-center h-[400px] md:h-[500px]">
          {/* Imagen de letras superpuesta con animación */}
          <motion.div style={{ scale, opacity }} className="absolute z-20">
            <Image
              src="/mikhuy_letters.png"
              alt="Texto Mikhuy"
              width={500}
              height={150}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Imagen de la mascota */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <Image
              src="/mikhuy_logo.webp"
              alt="Mikhuy Mascot"
              width={400}
              height={400}
              className="object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
