"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiCoffee, FiUsers } from "react-icons/fi";
import { LuChartColumn } from "react-icons/lu";

export function FeaturesSection() {
  const features = [
    {
      icon: <FiCoffee className="w-10 h-10 text-gray-700" />,
      title: "Gestión de Inventario",
      description:
        "Control preciso de ingredientes y productos con alertas de stock bajo.",
    },
    {
      icon: <FiUsers className="w-10 h-10 text-gray-700" />,
      title: "Gestión de Personal",
      description:
        "Administra turnos, roles y permisos para todo el personal de cafetería.",
    },
    {
      icon: <FiCalendar className="w-10 h-10 text-gray-700" />,
      title: "Planificación de Menús",
      description: "Crea y programa menús semanales o mensuales con facilidad.",
    },
    {
      icon: <LuChartColumn className="w-10 h-10 text-gray-700" />,
      title: "Reportes y Análisis",
      description:
        "Estadísticas detalladas sobre ventas, consumo y preferencias.",
    },
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Características Principales
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestro sistema ofrece todas las herramientas necesarias para
            administrar eficientemente los cafetines universitarios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
