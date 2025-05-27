import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi'; 

function Portada() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-12rem)] animate-fade-in p-4">
      {/* <div className="absolute inset-0 bg-cover bg-center z-[-1]" style={{backgroundImage: "url('/assets/textures/book_cover_texture.jpg')"}}></div> */}
      {/* <img src="/assets/ornaments/ex_libris_monts.svg" alt="Ex Libris" className="w-24 h-24 mb-6 opacity-80" /> */}

      <h1 
        className="text-6xl md:text-8xl font-korean-title font-bold mb-3 text-medium-topaz !leading-tight animate-subtle-pulse" 
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
      >
        몬츠의 일기
      </h1>
      <p className="text-2xl md:text-3xl font-manuscript text-straw mb-10 italic">
        - El Diario de Monts - {/* Subtítulo en español con fuente manuscrita diferente */}
      </p>
      
      <div className="content-card max-w-md mx-auto text-left p-6 mb-12 shadow-2xl border-2 border-dark-hazelnut">
        <p className="font-serif text-straw mb-2"><strong className="text-medium-topaz">Curso:</strong> Coreano 1 (Nivel A1)</p>
        <p className="font-serif text-straw mb-2"><strong className="text-medium-topaz">Escuela:</strong> UAA</p>
        <p className="font-serif text-straw mb-2"><strong className="text-medium-topaz">Estudiante:</strong> Tu Nombre Completo</p>
        <p className="font-serif text-straw"><strong className="text-medium-topaz">Maestra:</strong> Kim María</p>
      </div>

      <Link
        to="/indice"
        className="btn-primary-vintage text-xl"
      >
        Explorar el Diario
        <FiChevronRight className="ml-3 h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

export default Portada;