import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/mikhuy_logo.webp"
                alt="Mikhuy Logo"
                width={40}
                height={40}
                className="object-contain grayscale brightness-200"
              />
              <span className="font-bold text-xl">Mikhuy</span>
            </div>
            <p className="text-gray-400">Sistema integral de gestión para cafetines universitarios.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#caracteristicas" className="text-gray-400 hover:text-white transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link href="#dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">info@mikhuy.com</li>
              <li className="text-gray-400">+51 123 456 789</li>
              <li className="text-gray-400">Lima, Perú</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Suscríbete</h3>
            <p className="text-gray-400 mb-4">Recibe nuestras novedades y actualizaciones.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-gray-700 text-white rounded-r-md hover:bg-gray-600 transition-colors">
                Enviar
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Mikhuy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}