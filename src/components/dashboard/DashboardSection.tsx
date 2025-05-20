"use client";

import { products } from "@/const/dashboard";
import "./dashboard.css";
import { motion } from "framer-motion";
import { FaBoxOpen, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

export function DashboardSection() {
  return (
    <section id="dashboard" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Interfaz Intuitiva
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Gestiona tu inventario y productos con nuestra interfaz fácil de
            usar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex border border-slate-300 rounded-sm">
            <div className="w-[250px] h-screen bg-white border-r border-gray-200 flex flex-col text-gray-800">
              <div className="flex flex-col items-center justify-center p-4 gap-1">
                <div className="flex flex-col items-center justify-center">
                  <img
                    alt="mikhuy icon image"
                    className="size-10"
                    src="/mikhuy_icon.webp"
                  />
                  <h2 className="text-mikhuy text-3xl exo2-italic italic font-bold">
                    MIKHUY
                  </h2>
                </div>
                <h3 className="text-gray-400 text-sm">Sistema de gestión</h3>
              </div>

              <div className="w-full h-[1.5px] bg-gray-200 mb-3"></div>

              <nav className="flex-1">
                <ul className="space-y-4 px-2">
                  <li>
                    <a
                      className="flex items-center px-4 py-2 rounded text-black hover:bg-black hover:text-white transition-all duration-200"
                      href="/mikhuy-panel"
                      data-discover="true"
                    >
                      <FaHome className="mr-2" />
                      <span>Dashboard</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center px-4 py-2 rounded hover:bg-black hover:text-white transition-all duration-200 bg-black text-white"
                      href="/mikhuy-panel/storage"
                      data-discover="true"
                    >
                      <FaBoxOpen className="mr-2" />
                      <span>Almacén</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center px-4 py-2 rounded text-black hover:bg-black hover:text-white transition-all duration-200"
                      href="/mikhuy-panel/orders"
                      data-discover="true"
                    >
                      <FaShoppingCart className="mr-2" />
                      <span>Pedidos</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center px-4 py-2 rounded text-black hover:bg-black hover:text-white transition-all duration-200"
                      href="/mikhuy-panel/products"
                      data-discover="true"
                    >
                      <IoGrid className="mr-2" />
                      <span>Productos</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center px-4 py-2 rounded text-black hover:bg-black hover:text-white transition-all duration-200"
                      href="/mikhuy-panel/categories"
                      data-discover="true"
                    >
                      <FaList className="mr-2" />
                      <span>Categorias</span>
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="w-full h-[1.5px] bg-gray-200"></div>

              <div className="mb-2 mt-2 flex items-center justify-center relative">
                <button className="text-black rounded-3xl flex items-center gap-3 outline-none px-3 py-2 hover:bg-gray-50 transition-all duration-200 cursor-pointer">
                  <div className="rounded-full">
                    <img
                      alt="Ciddas profile image"
                      className="size-14 m-1 rounded-sm"
                      src="https://i.pinimg.com/736x/7c/31/d8/7c31d8a44541eebda101b0825c4687cf.jpg"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="font-semibold text-black/80">Ciddas</p>
                    <p className="text-gray-400 text-sm">prueba@gmail.com</p>
                  </div>
                  <svg
                    height="1em"
                    width="1em"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4..."></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
              <div className="content-header">
                <h2>Almacén</h2>
              </div>
              <div className="flex flex-col p-4 sm:p-6 gap-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
                  {/* Search */}
                  <div className="relative w-full sm:max-w-md">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Buscar productos..."
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md outline-none bg-white"
                    />
                  </div>

                  {/* Filtro */}
                  <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-black/80 transition-all duration-200">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M21 4V6H20L15 13.5V22H9V13.5L4 6H3V4H21ZM6.4037 6L11 12.8944V20H13V12.8944L17.5963 6H6.4037Z" />
                    </svg>
                    <span>Filtro</span>
                  </button>
                </div>

                {/* Table */}
                <div className="overflow-auto rounded-lg shadow max-h-[calc(100vh-250px)]">
                  <table className="min-w-full divide-y divide-gray-200 border border-gray-300 text-sm">
                    <thead className="bg-white sticky top-0 shadow-sm z-10">
                      <tr>
                        <th className="px-4 py-3 text-left text-gray-500 uppercase tracking-wide">
                          Imagen
                        </th>
                        <th className="px-4 py-3 text-left text-gray-500 uppercase tracking-wide">
                          Producto
                        </th>
                        <th className="px-4 py-3 text-left text-gray-500 uppercase tracking-wide">
                          Stock
                        </th>
                        <th className="px-4 py-3 text-left text-gray-500 uppercase tracking-wide">
                          Estado
                        </th>
                        <th className="px-4 py-3 text-left text-gray-500 uppercase tracking-wide">
                          Caducidad
                        </th>
                        <th className="px-4 py-3 text-center text-gray-500 uppercase tracking-wide">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {products.map((p, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <img
                              src={p.image}
                              alt={p.name}
                              width={50}
                              height={50}
                              className="rounded-md object-cover"
                            />
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {p.name}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {p.stock}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className="text-emerald-700 bg-emerald-200 px-3 py-1 rounded-full font-semibold text-xs">
                              {p.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {p.expiry}
                          </td>
                          <td className="px-4 py-3 text-center whitespace-nowrap">
                            <button className="text-xl hover:text-gray-600 transition">
                              <svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                className="w-5 h-5"
                              >
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Footer */}
                <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 text-gray-700 text-xs bg-white -mt-4 rounded-sm border-l border-r border-b border-slate-300">
                  <p>
                    Mostrando{" "}
                    <span className="font-medium">{products.length}</span> de{" "}
                    <span className="font-medium">{products.length}</span>{" "}
                    productos
                  </p>
                  <div className="flex gap-2 items-center mt-2 sm:mt-0">
                    <button
                      disabled
                      className="p-2 border rounded disabled:opacity-50"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className="w-4 h-4"
                      >
                        <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
                      </svg>
                    </button>
                    <span>Página 1 de 1</span>
                    <button
                      disabled
                      className="p-2 border rounded disabled:opacity-50"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 rotate-180"
                      >
                        <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
