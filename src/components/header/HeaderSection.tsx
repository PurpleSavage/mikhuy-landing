"use client";

import { useState } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-scroll"   
export function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className=" border-b border-slate-400/50"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" smooth={true} duration={800} className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/mikhuy_icon.webp"
            alt="Mikhuy Logo"
            width={50}
            height={50}
            priority
            className="object-contain"
            style={{ height: "auto", width:"auto" }}
          />

          <span className="font-bold text-2xl text-black">Mikhuy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
          
            to='caracteristicas'
            smooth={true} duration={800}
            className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Características
          </Link>
          <Link
            to="como-funciona"
            smooth={true} duration={800}
            className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Cómo Funciona
          </Link>
          <Link
            to="panel"
            smooth={true} duration={800}
            className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Dashboard
          </Link>
          <Link
            to="contacto"
            smooth={true} duration={800}
            className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                to="caracteristicas"
                smooth={true} duration={800}
                className="text-gray-700 hover:text-gray-900 transition-colors py-2 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Características
              </Link>
              <Link
                to="como-funciona"
                smooth={true} duration={800}
                className="text-gray-700 hover:text-gray-900 transition-colors py-2 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Cómo Funciona
              </Link>
              <Link
                to="dashboard"
                smooth={true} duration={800}
                className="text-gray-700 hover:text-gray-900 transition-colors py-2 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="contacto"
                smooth={true} duration={800}
                className="text-gray-700 hover:text-gray-900 transition-colors py-2 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
