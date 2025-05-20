"use client";

import { motion } from "framer-motion";
import { steps } from "@/const/steps";
export function HowItWorks() {
  
 
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Cómo Funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un proceso simple para transformar la gestión de tus cafetines
            universitarios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative border border-slate-400/50 p-4 rounded-lg container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-gray-700">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>

              {index < 2 && (
                <div className="hidden md:block absolute top-8 left-full w-16 h-1 bg-gray-300 -ml-8 -translate-x-full">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-500 rounded-full"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
