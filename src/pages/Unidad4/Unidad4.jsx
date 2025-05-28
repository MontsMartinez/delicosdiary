import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FiBookOpen, FiChevronsRight, FiArrowLeft, FiArrowRight, FiMessageSquare, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import './Unidad4.css'; 
import { datosUnidades } from '../../data/unidadesData';

function Unidad4() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  let { numeroUnidad: numeroUnidadParam } = useParams();
  const navigate = useNavigate();
  const numeroUnidad = parseInt(numeroUnidadParam) || 4; 
  
  const unidadData = datosUnidades[numeroUnidad];
  const totalUnidades = Object.keys(datosUnidades).length;

  // Estado para las respuestas del usuario y feedback
  const [userAnswers, setUserAnswers] = useState({}); // { dialogueLineId: selectedOption }
  const [feedback, setFeedback] = useState({});     // { dialogueLineId: 'correct' | 'incorrect' }
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (!unidadData || !unidadData.isBookPage || numeroUnidad !== 4) {
      console.warn(`Cargando Unidad4.jsx para unidad ${numeroUnidad} que no es la esperada.`);
      // navigate('/indice', { replace: true }); 
    }
    // Resetear respuestas al cambiar de unidad (si se reusa el componente)
    setUserAnswers({});
    setFeedback({});
    setShowResults(false);
  }, [unidadData, numeroUnidad, navigate]);

  if (!unidadData) return (
    <div className="text-center py-10 animate-fade-in">
        <h2 className="text-4xl font-serif">Cargando datos...</h2>
        <Link to="/indice" className="mt-8 btn-secondary-vintage">Volver al Índice</Link>
      </div>
  );

  const handleOptionSelect = (lineId, option) => {
    if (showResults) return; // No permitir cambios después de mostrar resultados

    setUserAnswers(prev => ({ ...prev, [lineId]: option }));
    // Podrías dar feedback inmediato aquí o esperar al botón "Verificar"
    // if (option === unidadData.dialogueLines.find(l => l.id === lineId)?.correctAnswer) {
    //   setFeedback(prev => ({ ...prev, [lineId]: 'correct' }));
    // } else {
    //   setFeedback(prev => ({ ...prev, [lineId]: 'incorrect' }));
    // }
  };

  const handleCheckAnswers = () => {
    const newFeedback = {};
    unidadData.dialogueLines.forEach(line => {
      if (line.blank) {
        if (userAnswers[line.id] === line.correctAnswer) {
          newFeedback[line.id] = 'correct';
        } else {
          newFeedback[line.id] = 'incorrect';
        }
      }
    });
    setFeedback(newFeedback);
    setShowResults(true);
  };

  const getButtonClass = (lineId, option) => {
    if (!showResults) {
      return userAnswers[lineId] === option ? 'selected' : '';
    }
    if (option === unidadData.dialogueLines.find(l => l.id === lineId)?.correctAnswer) {
      return 'correct';
    }
    if (userAnswers[lineId] === option) { // Si el usuario seleccionó esta y no es la correcta
      return 'incorrect';
    }
    return '';
  };
  
  const dialogueContent = unidadData.dialogueLines?.map(line => (
    <div 
      key={line.id} 
      className={`dialogue-line ${line.speaker === 'vendedor' ? 'speaker-vendedor' : 'speaker-usuario'}`}
    >
      <span className="speaker-name">
        {unidadData.dialogueCharacters[line.speaker]?.name || line.speaker}
        {/* Puedes añadir un avatar aquí si quieres: 
        <img src={unidadData.dialogueCharacters[line.speaker]?.avatar} alt={line.speaker} className="inline w-6 h-6 rounded-full ml-2" /> 
        */}
      </span>
      <p className="dialogue-text">
        {line.linePrefix && <span>{line.linePrefix} </span>}
        {line.blank ? (
          <span className="font-bold text-medium-topaz underline decoration-dotted decoration-medium-topaz/70 underline-offset-4">
            {userAnswers[line.id] || "[선택하세요]"} {/* Mostrar selección o placeholder */}
          </span>
        ) : (
          <span>{line.line}</span>
        )}
        {line.lineSuffix && <span> {line.lineSuffix}</span>}
      </p>
      {line.blank && (
        <div className="dialogue-blank-options mt-2 text-center">
          {line.options.map(option => (
            <button 
              key={option} 
              onClick={() => handleOptionSelect(line.id, option)}
              className={getButtonClass(line.id, option)}
              disabled={showResults}
            >
              {option}
            </button>
          ))}
          {showResults && feedback[line.id] && (
            <p className={`feedback-message ${feedback[line.id]}`}>
              {feedback[line.id] === 'correct' ? '정답! (¡Correcto!)' : `오답. 정답: ${line.correctAnswer} (Incorrecto. Respuesta: ...)`}
            </p>
          )}
        </div>
      )}
    </div>
  ));

  return (
    <div className="animate-fade-in py-8 md:py-12">
      <div className="book-container-u4">
        <div
          className={`book-u4 ${isBookOpen ? 'open' : ''} h-[600px] md:h-[720px]`}
          onClick={() => !isBookOpen && setIsBookOpen(true)}
        >
          {/* Portada del Libro */}
          <div 
            className="book-cover-u4 bg-dark-hazelnut p-6 rounded-r-lg rounded-l-md border-t-4 border-b-4 border-r-4 border-l-8 border-dark-mocha flex flex-col justify-between items-center text-center"
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
          <div className="book-interior-u4 bg-muted-antique text-almost-black rounded-lg shadow-inner-page">
            {/* Página Izquierda: Título, Personajes, Vocabulario Clave */}
            <div className="page-area-u4 custom-scrollbar">
              <div className="p-4 md:p-6 h-full flex flex-col">
                <h2 className="font-korean-title text-3xl md:text-4xl text-dark-mocha mb-2 text-center">
                  {unidadData.tituloCoreano}
                </h2>
                <p className="font-serif text-md text-dark-hazelnut/90 mb-4 text-center italic">
                  ({unidadData.tituloEspanol})
                </p>
                <div className="w-full my-3 h-px bg-dark-hazelnut/20"></div>
                
                <h3 className="font-serif text-xl text-dark-mocha mb-2">등장인물 (Personajes):</h3>
                <div className="flex justify-around mb-4">
                    {Object.entries(unidadData.dialogueCharacters || {}).map(([key, char]) => (
                        <div key={key} className="text-center">
                            {/* <img src={char.avatar || `https://placehold.co/80x80/5C4033/E3C590?text=${char.name.charAt(0)}`} alt={char.name} className="w-16 h-16 rounded-full mx-auto mb-1 border-2 border-dark-mocha"/> */}
                            <div className="w-16 h-16 rounded-full mx-auto mb-1 border-2 border-dark-mocha bg-straw flex items-center justify-center text-dark-mocha font-bold text-2xl font-korean-title">{char.name.charAt(0)}</div>
                            <p className="font-korean-title text-sm text-dark-mocha">{char.name}</p>
                        </div>
                    ))}
                </div>
                <div className="w-full my-3 h-px bg-dark-hazelnut/20"></div>

                <h3 className="font-serif text-xl text-dark-mocha mb-2">주요 표현 (Expresiones Clave):</h3>
                <ul className="space-y-1 font-korean-handwriting text-lg text-almost-black/90 list-inside mb-4">
                  <li className="ml-2">무엇을 드릴까요? (¿Qué le doy?)</li>
                  <li className="ml-2">... 주세요. (Deme ... por favor.)</li>
                  <li className="ml-2">몇 개 드릴까요? (¿Cuántos le doy?)</li>
                  <li className="ml-2">다 얼마예요? (¿Cuánto es todo?)</li>
                </ul>
                 <div className="w-full my-3 h-px bg-dark-hazelnut/20"></div>
                 <h3 className="font-serif text-xl text-dark-mocha mb-2">Gramática:</h3>
                 <p className="font-sans text-sm text-almost-black/80">{unidadData.gramatica.join(', ')}</p>
              </div>
            </div>

            {/* Página Derecha: Diálogo Interactivo */}
            <div className="page-area-u4 custom-scrollbar">
              <div className="p-4 md:p-6">
                <h3 className="font-korean-title text-2xl md:text-3xl text-dark-mocha mb-4 text-center">
                  {unidadData.dialogueTitle || "대화 연습"}
                </h3>
                <div className="space-y-3">
                  {dialogueContent}
                </div>
                {!showResults && (
                  <div className="text-center mt-6">
                    <button onClick={handleCheckAnswers} className="btn-primary-vintage">
                      <FiCheckCircle className="mr-2"/> Verificar Respuestas
                    </button>
                  </div>
                )}
                 {showResults && (
                  <div className="text-center mt-6">
                    <button 
                        onClick={() => { setUserAnswers({}); setFeedback({}); setShowResults(false); }} 
                        className="btn-secondary-vintage !text-dark-mocha !border-dark-mocha hover:!bg-dark-mocha hover:!text-white"
                    >
                        <FiXCircle className="mr-2"/> Intentar de Nuevo
                    </button>
                  </div>
                )}
              </div>
               {isBookOpen && (
                <div className="text-center mt-auto pt-6 pb-4">
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

export default Unidad4;
