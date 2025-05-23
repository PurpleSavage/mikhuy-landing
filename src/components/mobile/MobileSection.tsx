'use client'
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function MobileSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ 
        target: sectionRef, 
        offset: ["start start", "end start"] 
    });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={sectionRef} className="relative h-[100vh] bg-gray-200 ">
       <div className="sticky top-0 h-screen bg-black overflow-hidden flex items-center justify-start">
        <motion.div 
          className="px-5 min-w-[400vw] h-full gap-10 flex items-center"
          style={{ x }}
        >
          <p className="italic text-9xl font-bold text-white uppercase"> Mikhuy </p>
          <p className="italic text-9xl font-bold text-white uppercase"> Siempre </p>
          <p className="italic text-9xl font-bold text-white uppercase"> Es </p>
          <p className="italic text-9xl font-bold text-white uppercase"> Tu </p>
          <p className="italic text-9xl font-bold text-white uppercase"> Mejor </p>
          <p className="italic text-9xl font-bold text-white uppercase"> Aliado </p>  
        </motion.div>
      </div>
    </section>
  )
}
