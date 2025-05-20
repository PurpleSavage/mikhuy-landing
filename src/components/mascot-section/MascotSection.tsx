"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function MascotSection() {
  return (
    <section className="py-16 md:py-24 bg-radial from-[#FCB166] from-40% to-[#FFFCD7] rounded-t-full">
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

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
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
