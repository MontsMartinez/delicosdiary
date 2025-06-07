import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
    FiBookOpen, FiChevronsRight, FiArrowLeft, FiArrowRight, 
    FiClipboard, FiCheckCircle, FiXCircle, FiRefreshCw
} from 'react-icons/fi';
import './Unidad5.css'; 
import { datosUnidades } from '../../data/unidadesData';

// Helper para obtener opciones de respuesta (correcta + incorrectas)
const nativeNumbers = ["한", "두", "세", "네", "다섯", "여섯", "일곱", "여덟", "아홉"];
const generateOptions = (correctCount, counter) => {
    const correctAnswer = `${nativeNumbers[correctCount - 1]} ${counter}`;
    const options = new Set([correctAnswer]);
    while (options.size < 4) {
        const randomCount = Math.floor(Math.random() * 9);
        options.add(`${nativeNumbers[randomCount]} ${counter}`);
    }
    // Mezclar las opciones
    return Array.from(options).sort(() => Math.random() - 0.5);
};

function Unidad5() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  let { numeroUnidad: numeroUnidadParam } = useParams();
  const navigate = useNavigate();
  const numeroUnidad = parseInt(numeroUnidadParam) || 5; 
  
  const unidadData = datosUnidades[numeroUnidad];
  const totalUnidades = Object.keys(datosUnidades).length;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState({ status: '', message: '' }); // { status: 'correct' | 'incorrect', message: '...' }

  const currentItem = unidadData?.inventoryItems[currentQuestionIndex];
  const [answerOptions, setAnswerOptions] = useState([]);

  useEffect(() => {
    if (!unidadData || !unidadData.isBookPage || numeroUnidad !== 5) {
      console.warn(`Cargando Unidad5.jsx para unidad ${numeroUnidad} que no es la esperada.`);
    }
    // Generar nuevas opciones cuando cambia la pregunta
    if (currentItem) {
      setAnswerOptions(generateOptions(currentItem.count, currentItem.counter));
    }
    // Resetear feedback y selección
    setSelectedAnswer(null);
    setFeedback({ status: '', message: '' });
  }, [unidadData, numeroUnidad, currentQuestionIndex, currentItem]);

  if (!unidadData || !unidadData.inventoryItems) return (
    <div className="text-center py-10 animate-fade-in">
        <h2 className="text-4xl font-serif">Cargando datos del inventario...</h2>
        <Link to="/indice" className="mt-8 btn-secondary-vintage">Volver al Índice</Link>
      </div>
  );

  const handleAnswerClick = (option) => {
    if (feedback.status) return; // No permitir cambiar respuesta si ya hay feedback

    setSelectedAnswer(option);
    const correctAnswerText = `${nativeNumbers[currentItem.count - 1]} ${currentItem.counter}`;

    if (option === correctAnswerText) {
        setFeedback({ status: 'correct', message: `네, 맞습니다! ${currentItem.nameSingular}이/가 ${correctAnswerText} 있습니다.` });
    } else {
        setFeedback({ status: 'incorrect', message: `아닙니다. 다시 세어보십시오. 정답은 ${correctAnswerText}입니다.` });
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % unidadData.inventoryItems.length);
  };


  return (
    <div className="animate-fade-in py-8 md:py-12">
      <div className="book-container-u5">
        <div
          className={`book-u5 ${isBookOpen ? 'open' : ''} h-[600px] md:h-[720px]`}
          onClick={() => !isBookOpen && setIsBookOpen(true)}
        >
          {/* Portada del Libro */}
          <div 
            className="book-cover-u5 bg-dark-hazelnut p-6 rounded-r-lg rounded-l-md border-t-4 border-b-4 border-r-4 border-l-8 border-dark-mocha flex flex-col justify-between items-center text-center"
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
               <FiClipboard className="text-5xl md:text-6xl text-straw mx-auto" style={{filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.5))'}}/>
              <p className="font-korean-title text-3xl text-straw mt-2">
                재고 확인
              </p>
            </div>
            {!isBookOpen ? (
              <button
                onClick={(e) => { e.stopPropagation(); setIsBookOpen(true); }}
                className="mb-8 btn-primary-vintage bg-medium-topaz text-almost-black hover:bg-straw hover:text-dark-mocha py-3 px-6 text-lg"
              >
                <FiBookOpen className="mr-2" /> Empezar Inventario
              </button>
            ) : <div className="h-20"></div> }
          </div>

          {/* Contenido Interior del Libro */}
          <div className="book-interior-u5 bg-muted-antique text-almost-black rounded-lg shadow-inner-page">
            {/* Página Izquierda: La Bodega con Emojis */}
            <div className="page-area-u5 custom-scrollbar">
              <div className="warehouse-scene">
                <h3 className="font-korean-title text-2xl text-dark-mocha text-center mb-4">창고 (Bodega)</h3>
                {unidadData.inventoryItems.map(item => (
                    <div key={item.id} className="shelf">
                        {Array.from({ length: item.count }).map((_, i) => (
                            <span key={i} className="shelf-item">{item.emoji}</span>
                        ))}
                    </div>
                ))}
              </div>
            </div>

            {/* Página Derecha: El Juego de Inventario */}
            <div className="page-area-u5 custom-scrollbar">
              <div className="inventory-game-panel">
                <p className="font-serif text-dark-hazelnut mb-4">재고를 확인하십시오 (Revise el inventario)</p>
                
                {currentItem && (
                    <p className="inventory-question">
                        {`${currentItem.nameSingular}이/가 몇 ${currentItem.counter} 있습니까?`}
                    </p>
                )}

                <div className="answer-options">
                    {answerOptions.map(option => (
                        <button 
                            key={option}
                            onClick={() => handleAnswerClick(option)}
                            disabled={!!feedback.status}
                            className={`
                                ${selectedAnswer === option && !feedback.status ? 'selected' : ''}
                                ${feedback.status && option === `${nativeNumbers[currentItem.count - 1]} ${currentItem.counter}` ? 'correct' : ''}
                                ${feedback.status && selectedAnswer === option && option !== `${nativeNumbers[currentItem.count - 1]} ${currentItem.counter}` ? 'incorrect' : ''}
                            `}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <div className={`game-feedback ${feedback.status}`}>
                    {feedback.message && (
                        <p className="feedback-text">{feedback.message}</p>
                    )}
                </div>

                {feedback.status && (
                    <button onClick={handleNextQuestion} className="btn-secondary-vintage mt-6">
                        <FiRefreshCw className="inline mr-2"/> 다음 질문 (Siguiente)
                    </button>
                )}
              </div>
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

export default Unidad5;
