import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'; // Añadir useParams y useNavigate
import { FiBookOpen, FiChevronsRight, FiArrowLeft, FiArrowRight } from 'react-icons/fi'; // Añadir iconos de navegación
import './Unidad1.css'; 
import { datosUnidades } from '../../data/unidadesData'; // Importar datos

function Unidad1() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  let { numeroUnidad: numeroUnidadParam } = useParams(); // Obtener de la URL
  const navigate = useNavigate();

  // Asegurar que numeroUnidad sea un entero y manejar si no se provee (aunque la ruta lo requiere)
  const numeroUnidad = parseInt(numeroUnidadParam) || 1; 
  
  const unidadData = datosUnidades[numeroUnidad];
  const totalUnidades = Object.keys(datosUnidades).length;

  // Si la unidad no es la 1 o los datos no corresponden, redirigir o mostrar error
  useEffect(() => {
    if (!unidadData || !unidadData.isBookPage || numeroUnidad !== 1) {
      // Idealmente, si se accede a /unidad/1 y no es la data de libro, hay un problema de lógica.
      // Por ahora, si no es la unidad 1 con formato de libro, redirigimos al índice.
      console.warn(`Intentando cargar Unidad ${numeroUnidad} con el componente Unidad1.jsx, o datos incorrectos.`);
      // navigate('/indice', { replace: true }); // Descomentar si quieres redirección estricta
    }
  }, [unidadData, numeroUnidad, navigate]);


  if (!unidadData) return (
    <div className="text-center py-10 animate-fade-in">
        <h2 className="text-4xl font-serif">Cargando datos de la unidad...</h2>
        <p className="text-muted-antique mt-4">O la unidad no existe.</p>
        <Link to="/indice" className="mt-8 btn-secondary-vintage">
          Volver al Índice
        </Link>
      </div>
  );


  return (
    <div className="animate-fade-in py-8 md:py-12">
      <div className="book-container">
        <div
          className={`book ${isBookOpen ? 'open' : ''} h-[600px] md:h-[700px]`}
          onClick={() => !isBookOpen && setIsBookOpen(true)}
        >
          {/* Portada del Libro */}
          <div className="book-cover bg-dark-hazelnut border-4 border-dark-mocha p-6 rounded-r-lg rounded-l-sm shadow-2xl flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl md:text-6xl font-korean-title text-straw mb-3 !leading-tight" style={{ textShadow: '2px 2px 3px rgba(0,0,0,0.5)' }}>
              {unidadData.coverTitleCoreano}
            </h1>
            <p className="font-manuscript text-2xl text-medium-topaz/90 mb-8 italic">
              - {unidadData.coverTitleEspanol} -
            </p>
            <div className="w-1/3 h-1 bg-medium-topaz/40 my-4"></div>
            <p className="font-korean-title text-3xl text-straw mt-4">
              몬츠의 일기
            </p>
            {!isBookOpen && (
              <button
                onClick={(e) => { e.stopPropagation(); setIsBookOpen(true); }}
                className="mt-10 btn-primary-vintage bg-medium-topaz text-almost-black hover:bg-straw hover:text-dark-mocha py-3 px-6 text-lg"
              >
                <FiBookOpen className="mr-2" /> Abrir Diario
              </button>
            )}
          </div>

          {/* Contenido Interior del Libro */}
          <div className="book-page-content bg-straw text-almost-black p-8 md:p-12 rounded-lg shadow-inner-page">
            <div className="max-h-full overflow-y-auto p-2 md:p-4 custom-scrollbar">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-8">
                <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-dark-mocha shadow-lg">
                  <img
                    src={unidadData.authorImage || "https://placehold.co/300x300/5C4033/E3C590?text=Monts"}
                    alt="Foto de Montserrat"
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.src = "https://placehold.co/300x300/5C4033/E3C590?text=Error"}
                  />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-korean-title text-dark-mocha mb-2 text-center md:text-left">
                    {unidadData.authorNameCoreano}
                  </h2>
                  <p className="font-serif text-lg text-dark-hazelnut text-center md:text-left italic">
                    {unidadData.tituloEspanol}
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none prose-p:font-korean-handwriting prose-p:text-2xl prose-p:leading-relaxed prose-p:text-almost-black/90">
                {unidadData.authorBioCoreano.map((paragraph, index) => (
                  <p key={index} className={index === 0 ? 'drop-cap-korean' : ''}>{paragraph}</p>
                ))}
              </div>

              <div className="text-right mt-8">
                <p className="font-korean-handwriting text-3xl text-dark-mocha">
                  - 몬츠 -
                </p>
              </div>

              <div className="w-full my-8 h-px bg-gradient-to-r from-transparent via-dark-hazelnut/30 to-transparent"></div>

              <div className="font-sans text-sm text-dark-hazelnut/80">
                <h4 className="font-serif text-lg text-dark-mocha mb-1">Gramática clave de esta unidad:</h4>
                <p>{unidadData.gramatica.join(', ')}.</p>
                <h4 className="font-serif text-lg text-dark-mocha mt-3 mb-1">Vocabulario principal:</h4>
                <p>{unidadData.vocabulario.join(', ')}.</p>
              </div>

              {/* El botón "Continuar" ya está aquí, lo cual es bueno */}
              {isBookOpen && (
                <div className="text-center mt-10">
                  <Link to={numeroUnidad < totalUnidades ? `/unidad/${numeroUnidad + 1}` : "/indice"} className="btn-secondary-vintage !text-dark-mocha !border-dark-mocha hover:!bg-dark-mocha hover:!text-straw">
                    Continuar <FiChevronsRight className="inline ml-1" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Navegación general (se muestra si el libro está abierto) */}
      {isBookOpen && (
          <div className="flex justify-between items-center mt-12 mb-6 max-w-3xl mx-auto px-4">
            {/* No hay "Anterior" para la unidad 1 */}
            <div className="w-1/3" /> 
            
            <Link to="/indice" className="font-serif text-medium-topaz hover:underline">
                Volver al Índice
            </Link>

            {/* El botón "Continuar" dentro del libro ya maneja el "Siguiente" */}
            <div className="w-1/3" /> 
          </div>
        )}
    </div>
  );
}

export default Unidad1;
