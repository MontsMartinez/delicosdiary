import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
    FiBookOpen, FiChevronsRight, FiArrowLeft, FiArrowRight, 
    FiMap, FiXCircle, FiHome, FiBook, FiCoffee, FiSun, FiMoon, FiCloud, FiWind, FiSmile, FiMapPin, FiPaperclip, FiImage, FiCalendar
} from 'react-icons/fi';
import './Unidad6.css'; 
import { datosUnidades } from '../../data/unidadesData';

// Importa tu SVG como un componente React. 
// Asegúrate de que la ruta sea correcta desde este archivo.
// Si tu map.svg está en src/assets/map.svg:
// import { ReactComponent as MapaVintage } from '../../assets/map.svg'; // Esta línea causaba el error

// Opción para Vite: Importar la URL del SVG
import MapaVintagePath from '../../assets/map.svg?url'; 

// Mapeo de iconType a componentes de React Icons
const iconMap = {
    home: FiHome,
    book: FiBook,
    coffee: FiCoffee,
    leaf: FiSun, 
    default: FiMapPin,
};

function Unidad6() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  let { numeroUnidad: numeroUnidadParam } = useParams();
  const navigate = useNavigate();
  const numeroUnidad = parseInt(numeroUnidadParam) || 6; 
  
  const unidadData = datosUnidades[numeroUnidad];
  const totalUnidades = Object.keys(datosUnidades).length;

  const [selectedPoi, setSelectedPoi] = useState(null); 
  const svgPathRef = useRef(null);

  useEffect(() => {
    if (!unidadData || !unidadData.isBookPage || numeroUnidad !== 6) {
      console.warn(`Cargando Unidad6.jsx para unidad ${numeroUnidad} que no es la esperada.`);
      // navigate('/indice', { replace: true }); 
    }
    if (isBookOpen && svgPathRef.current) {
        const path = svgPathRef.current;
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        path.getBoundingClientRect(); 
        path.style.transition = 'stroke-dashoffset 5s ease-in-out'; 
        path.style.strokeDashoffset = '0';
    }
  }, [unidadData, numeroUnidad, navigate, isBookOpen]);

  if (!unidadData) return (
    <div className="text-center py-10 animate-fade-in">
        <h2 className="text-4xl font-serif">Cargando datos...</h2>
        <Link to="/indice" className="mt-8 btn-secondary-vintage">Volver al Índice</Link>
      </div>
  );

  const handlePoiClick = (poi) => {
    setSelectedPoi(poi);
  };

  const closePoiModal = () => {
    setSelectedPoi(null);
  };
  
  const MapContent = () => (
    <div className="adventure-map-container">
      {/* Usar la URL importada en una etiqueta <img> */}
      <img 
        src={MapaVintagePath} 
        alt="Mapa de Aventuras de Ayer" 
        className="adventure-map-image"
        onError={(e) => {
            // Fallback si la imagen SVG no carga por alguna razón
            console.error("Error al cargar el mapa SVG:", e);
            e.target.alt = "Error al cargar el mapa"; 
            // Podrías poner un placeholder aquí también si es necesario
        }}
      />

      <svg className="adventure-path" viewBox="0 0 700 400" preserveAspectRatio="xMidYMid meet"> 
        <path ref={svgPathRef} d={unidadData.adventurePathCoords || "M0,0"} />
      </svg>

      {unidadData.pointsOfInterest?.map(poi => {
        const IconComponent = iconMap[poi.iconType] || iconMap.default;
        return (
          <div 
            key={poi.id} 
            className="point-of-interest" 
            style={{ top: poi.position.top, left: poi.position.left }}
            onClick={() => handlePoiClick(poi)}
            title={poi.nameCoreano}
          >
            <IconComponent className="point-of-interest-icon" />
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="animate-fade-in py-8 md:py-12">
      <div className="book-container-u6">
        <div
          className={`book-u6 ${isBookOpen ? 'open' : ''} h-[600px] md:h-[720px]`}
          onClick={() => !isBookOpen && setIsBookOpen(true)}
        >
          {/* Portada del Libro */}
          <div 
            className="book-cover-u6 bg-dark-hazelnut p-6 rounded-r-lg rounded-l-md border-t-4 border-b-4 border-r-4 border-l-8 border-dark-mocha flex flex-col justify-between items-center text-center"
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
               <FiMap className="text-5xl md:text-6xl text-straw mx-auto" style={{filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.5))'}}/>
              <p className="font-korean-title text-3xl text-straw mt-2">
                나의 어제
              </p>
            </div>
            {!isBookOpen ? (
              <button
                onClick={(e) => { e.stopPropagation(); setIsBookOpen(true); }}
                className="mb-8 btn-primary-vintage bg-medium-topaz text-almost-black hover:bg-straw hover:text-dark-mocha py-3 px-6 text-lg"
              >
                <FiBookOpen className="mr-2" /> Ver Mi Aventura
              </button>
            ) : <div className="h-20"></div> }
          </div>

          {/* Contenido Interior del Libro */}
          <div className="book-interior-u6 bg-muted-antique text-almost-black rounded-lg shadow-inner-page">
            <div className="page-area-u6 flex justify-center items-center"> 
                <MapContent />
            </div>
            <div className="page-area-u6 flex justify-center items-center"> 
                 <div className="p-4 md:p-6 h-full flex flex-col justify-center items-center text-center">
                    <FiPaperclip className="text-4xl text-dark-mocha mb-3"/>
                    <h3 className="font-korean-title text-2xl text-dark-mocha mb-2">어제의 기록</h3>
                    <p className="font-serif text-sm text-almost-black/80 mb-4">
                        지도에서 장소를 클릭하여 어제 한 일을 확인하세요!
                        (¡Haz clic en un lugar del mapa para ver qué hice ayer!)
                    </p>
                    <h4 className="font-serif text-lg text-dark-mocha mt-4 mb-1">Gramática:</h4>
                    <p className="font-sans text-xs text-almost-black/70">{unidadData.gramatica.join(', ')}</p>
                    <h4 className="font-serif text-lg text-dark-mocha mt-3 mb-1">Vocabulario:</h4>
                    <p className="font-sans text-xs text-almost-black/70">{unidadData.vocabulario.join(', ')}</p>
                 </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para la Bitácora del Punto de Interés */}
      {selectedPoi && (
        <div className="log-entry-modal" onClick={closePoiModal}>
          <div className="log-entry-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closePoiModal} className="close-button">
              <FiXCircle />
            </button>
            <h3 className="log-entry-title">{selectedPoi.nameCoreano}</h3>
            {unidadData.fecha && (
              <p className="font-manuscript text-md text-dark-hazelnut mb-3 flex items-center">
                <FiCalendar className="mr-2"/> {unidadData.fecha}
              </p>
            )}
            <p className="log-entry-text">{selectedPoi.logEntryCoreano}</p>
            {selectedPoi.logIllustrationSrc && (
              <img 
                src={selectedPoi.logIllustrationSrc || `https://placehold.co/300x200/A4957E/1A1A1A?text=Ilustración`} 
                alt={`Ilustración de ${selectedPoi.nameCoreano}`} 
                className="log-entry-illustration"
                onError={(e) => e.target.src = `https://placehold.co/300x200/A4957E/1A1A1A?text=Error`}
              />
            )}
          </div>
        </div>
      )}
      
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

export default Unidad6;
