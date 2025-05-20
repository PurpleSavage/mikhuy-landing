"use client";

import './dashboard.css'
import { motion } from "framer-motion";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronLeft, FaFilter } from "react-icons/fa";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
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
          <div className="dashboard-container">
            <div className="dashboard-layout">
              {/* Sidebar */}
              <div className="sidebar">
                <div className="sidebar-logo">
                  <Image width={40} height={40} src="/mikhuy_icon.webp" alt="Mikhuy Logo" />
                  <h1>MIKHUY</h1>
                  <p>Sistema de gestión</p>
                </div>
                <ul className="sidebar-menu">
                  <li>
                    <i className="fas fa-home"></i> Dashboard
                  </li>
                  <li>
                    <i className="fas fa-bell"></i> Notificaciones
                  </li>
                  <li className="active">
                    <i className="fas fa-warehouse"></i> Almacén
                  </li>
                  <li>
                    <i className="fas fa-shopping-cart"></i> Pedidos
                  </li>
                  <li>
                    <i className="fas fa-box"></i> Productos
                  </li>
                  <li>
                    <i className="fas fa-tags"></i> Categorías
                  </li>
                </ul>
                <div className="user-profile">
                  <div className="user-avatar">C</div>
                  <div className="user-info">
                    <p className="user-name">Ciddas</p>
                    <p className="user-email">prueba@gmail.com</p>
                  </div>
                  <button className="dropdown-toggle">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
              </div>

              {/* Main Content */}
              <div className="main-content">
                <div className="content-header">
                  <h2>Almacén</h2>
                </div>
                <div className="search-bar">
                  <div className="search-input">
                    <input type="text" placeholder="Buscar productos..." />
                  </div>
                  <button className="filter-button">
                    <FaFilter size={16} />
                    Filtro
                  </button>
                </div>
                <table className="products-table">
                  <thead>
                    <tr>
                      <th>IMAGEN</th>
                      <th>PRODUCTOS</th>
                      <th>STOCK</th>
                      <th>ESTADO</th>
                      <th>CADUCIDAD</th>
                      <th>ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="Bebida Láctea"
                          className="product-image"
                        />
                      </td>
                      <td>Bebida Láctea Pro UHT Chocolate 320 ml</td>
                      <td>20</td>
                      <td>
                        <span className="status-badge">Habilitado</span>
                      </td>
                      <td>2026-06-17</td>
                      <td>
                        <div className="action-buttons">
                          <BsThreeDotsVertical />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="Yogurt"
                          className="product-image"
                        />
                      </td>
                      <td>Yogurt Battimix Gloria Vainilla Chocolate 146 Gr</td>
                      <td>38</td>
                      <td>
                        <span className="status-badge">Habilitado</span>
                      </td>
                      <td>2027-07-17</td>
                      <td>
                        <div className="action-buttons">
                          <BsThreeDotsVertical />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="Empanada"
                          className="product-image"
                        />
                      </td>
                      <td>Empanada de Chanchito Oriental</td>
                      <td>20</td>
                      <td>
                        <span className="status-badge">Habilitado</span>
                      </td>
                      <td>2025-05-19</td>
                      <td>
                        <div className="action-buttons">
                          <BsThreeDotsVertical />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="pagination">
                  <div className="pagination-info">
                    Mostrando 3 de 3 productos
                  </div>
                  <div className="pagination-controls">
                    <button className="pagination-button">
                      <FaChevronLeft size={16} />
                    </button>
                    <button className="pagination-button active">1</button>
                    <button className="pagination-button">
                      <FaChevronLeft className="rotate-180" size={16} />
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
