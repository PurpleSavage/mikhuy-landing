import React from 'react'
import AnimatedBeamDemo from './AnimatedBeamDemo'

export default function Integrate() {
  return (
    <section className='py-16 md:py-24'>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black text-center">Integra diversos módulos</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
             Integra módulos de pedidos, ventas, almacén y estadísticas. ¡Además, podemos incorporar muchos más según tus necesidades!
        </p>
        <AnimatedBeamDemo/>
    </section>
  )
}
