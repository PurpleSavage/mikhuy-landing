"use client";

import { motion } from "framer-motion";
import { features } from "@/const/features"; // <-- features ahora contiene funciones (IconType), no JSX

export function FeaturesSection() {
  return (
    <section id="caracteristicas" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Características Principales
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestro sistema ofrece todas las herramientas necesarias para
            administrar eficientemente los cafetines universitarios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon; // 👈 renderizamos el componente aquí
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-gray-700" /> {/* 👈 así se usa */}
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

