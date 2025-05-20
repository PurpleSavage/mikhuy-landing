"use client";

import { motion } from "framer-motion";

export function ContactForm() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Interesado en implementar Mikhuy en tu institución? Completa el
            formulario y nos pondremos en contacto contigo.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="+51 123 456 789"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="imageUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  URL de Imagen
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-black hover:bg-black text-white py-3">
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
