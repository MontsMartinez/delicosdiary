import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FiBookOpen, FiChevronsRight, FiArrowLeft, FiArrowRight, FiMapPin } from 'react-icons/fi'; // FiMapPin para vocabulario
import './Unidad3.css'; 
import { datosUnidades } from '../../data/unidadesData';

function Unidad3() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  let { numeroUnidad: numeroUnidadParam } = useParams();
  const navigate = useNavigate();
  const numeroUnidad = parseInt(numeroUnidadParam) || 3; 
  
  const unidadData = datosUnidades[numeroUnidad];
  const totalUnidades = Object.keys(datosUnidades).length;

  useEffect(() => {
    if (!unidadData || !unidadData.isBookPage || numeroUnidad !== 3) {
      console.warn(`Cargando Unidad3.jsx para unidad ${numeroUnidad} que no es la esperada.`);
      // navigate('/indice', { replace: true }); 
    }
  }, [unidadData, numeroUnidad, navigate]);

  if (!unidadData) return (
    <div className="text-center py-10 animate-fade-in">
        <h2 className="text-4xl font-serif">Cargando datos...</h2>
        <Link to="/indice" className="mt-8 btn-secondary-vintage">Volver al Índice</Link>
      </div>
  );

  const locationWords = ["위 (arriba)", "아래 (abajo)", "밑 (debajo)", "안 (adentro)", "밖 (afuera)", "옆 (al lado)", "앞 (delante)", "뒤 (detrás)", "사이 (entre)"];

  return (
    <div className="animate-fade-in py-8 md:py-12">
      <div className="book-container-u3">
        <div
          className={`book-u3 ${isBookOpen ? 'open' : ''} h-[600px] md:h-[720px]`}
          onClick={() => !isBookOpen && setIsBookOpen(true)}
        >
          {/* Portada del Libro */}
          <div 
            className="book-cover-u3 bg-dark-hazelnut p-6 rounded-r-lg rounded-l-md border-t-4 border-b-4 border-r-4 border-l-8 border-dark-mocha flex flex-col justify-between items-center text-center"
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
                <FiBookOpen className="mr-2" /> Abrir Capítulo
              </button>
            ) : <div className="h-20"></div> }
          </div>

          {/* Contenido Interior del Libro: Páginas Café Claro (muted-antique) */}
          <div className="book-interior-u3 bg-muted-antique text-almost-black rounded-lg shadow-inner-page">
            {/* Página Izquierda: Título y Vocabulario de Ubicación */}
            <div className="page-area-u3 custom-scrollbar">
              <div className="p-4 md:p-6 h-full flex flex-col">
                <h2 className="font-korean-title text-3xl md:text-4xl text-dark-mocha mb-2 text-center">
                  {unidadData.tituloCoreano}
                </h2>
                <p className="font-serif text-md text-dark-hazelnut/90 mb-6 text-center italic">
                  ({unidadData.tituloEspanol})
                </p>
                <div className="w-full my-4 h-px bg-dark-hazelnut/20"></div>
                
                <h3 className="font-serif text-xl text-dark-mocha mb-3 flex items-center">
                  <FiMapPin className="mr-2 text-dark-hazelnut"/> 주요 위치 단어 (Palabras Clave de Ubicación):
                </h3>
                <ul className="space-y-1 font-korean-handwriting text-lg text-almost-black/90 list-inside">
                  {locationWords.map(word => (
                    <li key={word} className="ml-2"><span className="font-korean-title text-dark-mocha">{word.split(" ")[0]}</span>: {word.split(" ")[1]}</li>
                  ))}
                </ul>
                <div className="w-full my-4 h-px bg-dark-hazelnut/20"></div>
                 <h3 className="font-serif text-xl text-dark-mocha mb-3">Gramática:</h3>
                 <p className="font-sans text-sm text-almost-black/80">{unidadData.gramatica.join(', ')}</p>

              </div>
            </div>

            {/* Página Derecha: Imagen del Ropero y Frases */}
            <div className="page-area-u3 custom-scrollbar">
              <div className="wardrobe-image-container">
                <img 
                  src={unidadData.wardrobeImageSrc || "https://placehold.co/400x500/A4957E/1A1A1A?text=Ropero"} 
                  alt="Disposición de un ropero" 
                  className="wardrobe-image"
                  onError={(e) => e.target.src = "https://placehold.co/400x500/A4957E/1A1A1A?text=Error+Imagen"}
                />
                {unidadData.wardrobeItems?.map(item => (
                  <div 
                    key={item.id} 
                    className={`location-phrase ${item.positionClasses}`}
                    title={item.itemCoreano} // Tooltip con el nombre del objeto
                  >
                    {item.descriptionCoreano}
                  </div>
                ))}
              </div>
               {isBookOpen && (
                <div className="text-center mt-auto pt-6 pb-4"> {/* mt-auto para empujar al fondo si hay espacio */}
                  <Link to={numeroUnidad < totalUnidades ? `/unidad/${numeroUnidad + 1}` : "/indice"} className="btn-secondary-vintage !text-dark-mocha !border-dark-mocha hover:!bg-dark-mocha hover:!text-white">
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

export default Unidad3;
