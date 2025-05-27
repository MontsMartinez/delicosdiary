import React from 'react';
// Podrías usar un icono de pluma o similar
import { FaRegHeart } from "react-icons/fa"; // Un corazón más sutil

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-almost-black/70 text-center py-8 border-t-2 border-dark-hazelnut/50 mt-12">
      {/* Aquí podrías poner un SVG de línea ornamental */}
      {/* <img src="/assets/ornaments/divider_simple.svg" alt="Ornamental Divider" className="ornamental-divider mx-auto w-1/4 mb-4" /> */}
      
      <p className="text-muted-antique text-sm font-serif">
        &copy; {currentYear} 몬츠의 일기 (El Diario de Monts).
      </p>
      <p className="text-muted-antique text-sm flex items-center justify-center mt-2 font-serif">
        Hecho con <FaRegHeart className="text-medium-topaz mx-1.5" /> por Montserrat.
      </p>
      <p className="text-xs text-muted-antique/70 mt-3 font-sans">
        Proyecto Final - Coreano 1 (A1) - UAA - Mtra. Kim María
      </p>
    </footer>
  );
}

export default Footer;