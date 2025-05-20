"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

export default function SmothWrapper({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1, // Controla la suavidad del scroll (0 a 1)
      wheelMultiplier: 1, // Ajusta la sensibilidad del scroll
      infinite: false, // Evita que el scroll sea infinito
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy(); 
    };
  }, []);

  return (
    <>
        {children}
    </>
  )
}
