import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FiBookOpen, FiChevronsRight, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './Unidad2.css'; 
import { datosUnidades } from '../../data/unidadesData';

function Unidad2() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  let { numeroUnidad: numeroUnidadParam } = useParams();
  const navigate = useNavigate();
  const numeroUnidad = parseInt(numeroUnidadParam) || 2; 
  
  const unidadData = datosUnidades[numeroUnidad];
  const totalUnidades = Object.keys(datosUnidades).length;

  useEffect(() => {
    if (!unidadData || !unidadData.isBookPage || numeroUnidad !== 2) {
      console.warn(`Cargando Unidad2.jsx para unidad ${numeroUnidad} que no es la esperada.`);
    }
  }, [unidadData, numeroUnidad, navigate]);

  if (!unidadData) return (
    <div className="text-center py-10 animate-fade-in">
        <h2 className="text-4xl font-serif">Cargando datos...</h2>
        <Link to="/indice" className="mt-8 btn-secondary-vintage">Volver al Índice</Link>
      </div>
  );

  // Dividir los paneles para las dos páginas (3 paneles por página)
  const panelsPage1 = unidadData.comicPanels?.slice(0, 3) || [];
  const panelsPage2 = unidadData.comicPanels?.slice(3, 6) || [];

  const ComicPage = ({ panels }) => (
    <div className="comic-page-layout">
      {panels.map(panel => (
        <div key={panel.id} className={`comic-panel group ${panel.layoutClass || ''}`}>
          <img 
            src={panel.imageSrc || `https://placehold.co/400x500/A4957E/1A1A1A?text=${panel.altText}`} 
            alt={panel.altText} 
            onError={(e) => e.target.src = `https://placehold.co/400x500/A4957E/1A1A1A?text=Error`}
          />
          <div 
            className={`comic-text-strip ${panel.textPosition === 'top' ? 'comic-text-strip-top' : 'comic-text-strip-bottom'}`}
          >
            {panel.hoverTextCoreano}
          </div>
        </div>
      ))}
    </div>
  );


  return (
    <div className="animate-fade-in py-8 md:py-12">
      <div className="book-container-u2">
        <div
          className={`book-u2 ${isBookOpen ? 'open' : ''} h-[600px] md:h-[720px]`}
          onClick={() => !isBookOpen && setIsBookOpen(true)}
        >
          {/* Portada del Libro */}
          <div 
            className="book-cover-u2 bg-dark-hazelnut p-6 rounded-r-lg rounded-l-md border-t-4 border-b-4 border-r-4 border-l-8 border-dark-mocha flex flex-col justify-between items-center text-center"
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
                <FiBookOpen className="mr-2" /> Abrir Capítulo
              </button>
            ) : <div className="h-20"></div> }
          </div>

          {/* Contenido Interior del Libro */}
          <div className="book-interior-u2 bg-muted-antique text-almost-black rounded-lg shadow-inner-page">
            <div className="page-area-u2 custom-scrollbar">
              <ComicPage panels={panelsPage1} />
            </div>
            <div className="page-area-u2 custom-scrollbar">
              <ComicPage panels={panelsPage2} />
              {isBookOpen && (
                <div className="absolute bottom-4 right-4 text-center">
                  <Link to={numeroUnidad < totalUnidades ? `/unidad/${numeroUnidad + 1}` : "/indice"} className="btn-secondary-vintage !text-dark-mocha !border-dark-mocha hover:!bg-dark-mocha hover:!text-white text-sm">
                    Continuar <FiChevronsRight className="inline ml-1"/>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {isBookOpen && (
          <div className="flex justify-between items-center mt-12 mb-6 max-w-3xl mx-auto px-4">
            <Link to={`/unidad/${numeroUnidad - 1}`} className="btn-secondary-vintage">
                <FiArrowLeft className="mr-2" /> Anterior
            </Link>
            <Link to="/indice" className="font-serif text-medium-topaz hover:underline">
                Volver al Índice
            </Link>
            {numeroUnidad < totalUnidades ? (
                <Link to={`/unidad/${numeroUnidad + 1}`} className="btn-secondary-vintage">
                    Siguiente <FiArrowRight className="ml-2" />
                </Link>
            ) : <div className="w-1/3" /> }
          </div>
        )}
    </div>
  );
}

export default Unidad2;
