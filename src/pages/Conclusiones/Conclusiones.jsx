import React from 'react';
import { Link } from 'react-router-dom';
import { FiBook, FiPenTool } from 'react-icons/fi'; // Iconos para el final
import './Conclusiones.css'; // Importar el CSS específico

function Conclusiones() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()} de ${currentDate.toLocaleString('es-ES', { month: 'long' })} de ${currentDate.getFullYear()}`;

  return (
    <div className="animate-fade-in py-8 md:py-12 px-4">
      {/* CAMBIO: Se cambió bg-muted-antique/30 a bg-straw/20 para un tono de papel más claro y sutil */}
      <article className="max-w-3xl mx-auto bg-muted-antique p-8 md:p-12 rounded-lg shadow-xl border-2 border-dark-mocha/50">
        
        <header className="text-center mb-10 md:mb-12">
          {/* <FiPenTool className="text-5xl text-dark-mocha mx-auto mb-4" /> */}
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-mocha !leading-tight" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            Epílogo
          </h1>
          <div className="w-1/3 mx-auto my-4 h-px bg-dark-hazelnut/40"></div>
          <p className="font-manuscript text-xl text-dark-hazelnut italic">
            Una reflexión al cerrar estas páginas...
          </p>
        </header>
        
        <div className="prose prose-lg md:prose-xl max-w-none 
                        prose-p:font-serif prose-p:text-almost-black/90 prose-p:leading-relaxed 
                        prose-strong:text-dark-hazelnut prose-headings:font-serif prose-headings:text-dark-mocha">
          
          <p>
            Al concluir este diario, "몬츠의 일기", que ha sido tanto un ejercicio académico como un refugio creativo,
            me llevo conmigo no solo un conjunto de nuevas habilidades lingüísticas, sino una apreciación a cada idioma. 
            Este proyecto, originalmente solo era un requisito final para el curso de Coreano 1, sin embargo se conviertio 
            en un verdadero viaje de descubrimiento personal y lingüístico.
          </p>
          <p>
            La creación de cada sección interactiva fue un desafío estimulante, buscando no solo cumplir con los
            objetivos de aprendizaje, sino también infundir un alma y una estética que reflejaran mi personalidad
            y el cariño por este proyecto. La elección del estilo vintage, la animación del libro y los pequeños
            detalles visuales fueron mi manera de hacer de este diario un espacio acogedor y único.
          </p>
          <p>
            Quisiera expresar mi más sincero agradecimiento a la Mtra. Kim María, cuya guía, paciencia y entusiasmo
            han sido fundamentales en este proceso. Su dedicación no solo me ha enseñado coreano, sino que también
            ha inspirado a explorar y amar su cultura.
          </p>
        </div>

        <div className="colophon-section">
          <p className="font-manuscript text-3xl text-dark-mocha mt-8 mb-4">
            Montserrat Martínez {/* Tu firma simulada */}
          </p>
          {/* Sello simulado (Dojang) */}
          <div className="dojang-seal">
            몬츠 {/* Tus iniciales o un carácter coreano que te represente */}
          </div>
          <div className="mt-8 text-xs font-serif text-dark-hazelnut/80 space-y-1">
            <p>
              Este diario, <span className="font-korean-title text-sm">몬츠의 일기</span>, fue completado por Montserrat Martínez
              como proyecto final para el curso <span className="font-semibold">Coreano 1 (Nivel A1)</span>.
            </p>
            <p>
              Universidad Autónoma de Aguascalientes (UAA).
            </p>
            <p>
              Bajo la invaluable guía de la Mtra. Kim María.
            </p>
            <p>
              Finalizado en Aguascalientes, México, a {formattedDate}.
            </p>
          </div>
        </div>

        <div className="finis-button-container">
          <Link 
            to="/" 
            className="btn-primary-vintage py-2 px-6 text-md flex items-center justify-center w-fit mx-auto group"
            title="Volver a la Portada"
          >
            <FiBook className="mr-2 transition-transform duration-300 group-hover:rotate-[360deg]"/>
            Finis
          </Link>
        </div>
      </article>
    </div>
  );
}

export default Conclusiones;
