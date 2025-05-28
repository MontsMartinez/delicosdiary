import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FiBookOpen, FiChevronsRight, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './Unidad1.css'; 
import { datosUnidades } from '../../data/unidadesData';

function Unidad1() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  let { numeroUnidad: numeroUnidadParam } = useParams();
  const navigate = useNavigate();
  const numeroUnidad = parseInt(numeroUnidadParam) || 1; 
  
  const unidadData = datosUnidades[numeroUnidad];
  const totalUnidades = Object.keys(datosUnidades).length;

  useEffect(() => {
    if (!unidadData || !unidadData.isBookPage || numeroUnidad !== 1) {
      console.warn(`Cargando Unidad1.jsx para unidad ${numeroUnidad} que no es la esperada o no tiene datos de libro.`);
      // navigate('/indice', { replace: true }); 
    }
  }, [unidadData, numeroUnidad, navigate]);

  if (!unidadData) return (
    <div className="text-center py-10 animate-fade-in">
        <h2 className="text-4xl font-serif">Cargando datos...</h2>
        <Link to="/indice" className="mt-8 btn-secondary-vintage">Volver al Índice</Link>
      </div>
  );

  return (
    <div className="animate-fade-in py-8 md:py-12">
      <div className="book-container">
        <div
          className={`book ${isBookOpen ? 'open' : ''} h-[600px] md:h-[720px]`}
          onClick={() => !isBookOpen && setIsBookOpen(true)}
        >
          {/* Portada del Libro Mejorada */}
          <div 
            className="book-cover bg-dark-hazelnut p-6 rounded-r-lg rounded-l-md border-t-4 border-b-4 border-r-4 border-l-8 border-dark-mocha flex flex-col justify-between items-center text-center"
            // style={{ backgroundImage: "url('/assets/textures/leather_texture.png')", backgroundSize: 'cover' }}
          >
            <div> 
              <h1 className="text-4xl md:text-5xl font-korean-title text-straw mt-8 mb-2 !leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.6)'}}>
                {unidadData.coverTitleCoreano}
              </h1>
              <p className="font-manuscript text-xl md:text-2xl text-medium-topaz/80 mb-6 italic">
                - {unidadData.coverTitleEspanol} -
              </p>
            </div>
            
            <div className="my-auto p-4 border-2 border-medium-topaz/50 rounded bg-dark-mocha/30">
              <p className="font-korean-title text-4xl md:text-5xl text-straw" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                몬츠의 일기
              </p>
            </div>

            {!isBookOpen ? (
              <button
                onClick={(e) => { e.stopPropagation(); setIsBookOpen(true); }}
                className="mb-8 btn-primary-vintage bg-medium-topaz text-almost-black hover:bg-straw hover:text-dark-mocha py-3 px-6 text-lg"
              >
                <FiBookOpen className="mr-2" /> Abrir Diario
              </button>
            ) : <div className="h-20"></div> }
          </div>

          {/* Contenido Interior del Libro con Dos Páginas CAFÉ CLARO y Asimétricas */}
          <div className="book-interior bg-muted-antique text-almost-black rounded-lg shadow-inner-page"> {/* CAMBIO: bg-muted-antique */}
            {/* Página Izquierda (1/3 del ancho) */}
            <div className="left-page-area custom-scrollbar">
              <div className="flex flex-col items-center text-center pt-4 md:pt-8">
                <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-dark-mocha shadow-lg mb-6">
                  <img
                    src={unidadData.authorImage || "https://placehold.co/300x300/5C4033/1A1A1A?text=Monts"} // Placeholder con colores oscuros
                    alt="Foto de Montserrat"
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.src = "https://placehold.co/300x300/5C4033/1A1A1A?text=Error"}
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-korean-title text-dark-mocha mb-1"> 
                  {unidadData.authorNameCoreano}
                </h2>
                <p className="font-serif text-sm md:text-md text-dark-hazelnut italic"> 
                  ({unidadData.tituloEspanol})
                </p>
                <div className="w-2/3 my-4 md:my-6 h-px bg-dark-hazelnut/30"></div>
                 <div className="font-sans text-xs text-dark-hazelnut/90 text-left w-full"> 
                  <h4 className="font-serif text-sm md:text-md text-dark-mocha mb-1">Gramática:</h4>
                  <p className="leading-snug text-xs">{unidadData.gramatica.join(', ')}.</p>
                  <h4 className="font-serif text-sm md:text-md text-dark-mocha mt-2 mb-1">Vocabulario:</h4>
                  <p className="leading-snug text-xs">{unidadData.vocabulario.join(', ')}.</p>
                </div>
              </div>
            </div>

            {/* Página Derecha (2/3 del ancho) */}
            <div className="right-page-area custom-scrollbar">
              <div className="prose prose-lg max-w-none 
                              prose-p:font-korean-handwriting prose-p:text-xl md:prose-p:text-2xl prose-p:leading-relaxed prose-p:text-almost-black/90 
                              prose-headings:font-korean-title prose-headings:text-dark-mocha 
                              pt-4 md:pt-8">
                {unidadData.authorBioCoreano.map((paragraph, index) => (
                  <p key={index} className={index === 0 ? 'drop-cap-korean !text-dark-mocha' : ''}>{paragraph}</p>
                ))}
              </div>
              <div className="text-right mt-6">
                <p className="font-korean-handwriting text-2xl md:text-3xl text-dark-mocha">
                  - 몬츠 -
                </p>
              </div>
              {isBookOpen && (
                <div className="text-center mt-8 pb-4">
                  <Link to={numeroUnidad < totalUnidades ? `/unidad/${numeroUnidad + 1}` : "/indice"} className="btn-secondary-vintage !text-dark-mocha !border-dark-mocha hover:!bg-dark-mocha hover:!text-white"> {/* Ajustar hover para contraste con café claro */}
                    Continuar <FiChevronsRight className="inline ml-1" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {isBookOpen && (
          <div className="flex justify-between items-center mt-12 mb-6 max-w-3xl mx-auto px-4">
            <div className="w-1/3" /> 
            <Link to="/indice" className="font-serif text-medium-topaz hover:underline">
                Volver al Índice
            </Link>
            <div className="w-1/3" /> 
          </div>
        )}
    </div>
  );
}

export default Unidad1;
