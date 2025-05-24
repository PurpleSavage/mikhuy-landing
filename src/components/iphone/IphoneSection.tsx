import { FaBatteryFull } from 'react-icons/fa';
import { FaSignal } from 'react-icons/fa'; // barras de señal
import { FaWifi } from 'react-icons/fa';
export default function IphoneSection() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-white gap-10  p-8">
        <div>
            <h2 className="text-3xl text-center md:text-4xl font-bold mb-4 text-black"> 
                Mikhuy App
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">Los usuarios conectarán con tus servicios por medio de nuestra app</p>
        </div>
      {/* iPhone Container */}
      <div className="relative w-80 h-[640px] bg-black rounded-[3rem] p-2 shadow-2xl">
        {/* iPhone Screen */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 pt-4 pb-2">
            <div className="text-sm font-semibold text-black">9:41</div>
            <div className="flex items-center space-x-1">
              <FaSignal className="w-4 h-4 text-black"/>
              <FaWifi className="w-4 h-4 text-black"/>
              <FaBatteryFull className="w-4 h-4 text-black" />
            </div>
          </div>

          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>

          {/* Notification */}
          <div className="mx-4 mt-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-4 animate-pulse">
              <div className="flex items-start space-x-3">
                {/* App Icon */}
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">M</span>
                </div>

                {/* Notification Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-black">Mikhuy</p>
                    <span className="text-xs text-gray-500">ahora</span>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">Tu pedido está listo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Home Screen Background */}
          <div className="px-6 pt-4">
            {/* App Grid */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-14 h-14 bg-gray-300 rounded-xl"></div>
              ))}
            </div>

            {/* Dock */}
            <div className="absolute bottom-8 left-6 right-6">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3">
                <div className="flex justify-center space-x-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="w-14 h-14 bg-gray-400 rounded-xl"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
