import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
    FiBookOpen, FiChevronsRight, FiArrowLeft, FiArrowRight, 
    FiClock, FiSearch, FiNavigation, FiCalendar, FiAnchor // CAMBIO: FiTrain a FiNavigation
} from 'react-icons/fi';
import './Unidad8.css'; 
import { datosUnidades } from '../../data/unidadesData';

function Unidad8() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  let { numeroUnidad: numeroUnidadParam } = useParams();
  const navigate = useNavigate();
  const numeroUnidad = parseInt(numeroUnidadParam) || 8; 
  
  const unidadData = datosUnidades[numeroUnidad];
  const totalUnidades = Object.keys(datosUnidades).length;

  const scheduleData = unidadData?.trainSchedule;
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [filteredTrains, setFilteredTrains] = useState(scheduleData?.trains || []);
  const [queryResult, setQueryResult] = useState('');

  useEffect(() => {
    if (!unidadData || !unidadData.isBookPage || numeroUnidad !== 8) {
      console.warn(`Cargando Unidad8.jsx para unidad ${numeroUnidad} que no es la esperada.`);
    }
    // Resetear filtros al cargar o cambiar de unidad
    if (scheduleData) {
        setFilteredTrains(scheduleData.trains);
        setSelectedDestination('');
        setSelectedDay('');
        setQueryResult('');
    }
  }, [unidadData, numeroUnidad, navigate, scheduleData]);

  if (!unidadData || !scheduleData) return (
    <div className="text-center py-10 animate-fade-in">
        <h2 className="text-4xl font-serif">Cargando datos del horario...</h2>
        <Link to="/indice" className="mt-8 btn-secondary-vintage">Volver al Índice</Link>
      </div>
  );

  const handleSearch = () => {
    let result = scheduleData.trains;
    let queryText = "";

    if (selectedDestination) {
      result = result.filter(train => train.destination === selectedDestination);
      queryText += `${selectedDestination} 가는 기차는 `;
    } else {
      queryText += "기차는 ";
    }

    if (selectedDay) {
      result = result.filter(train => train.departureDay === selectedDay);
      queryText += `${selectedDay}에 `;
    }
    
    setFilteredTrains(result);

    if (result.length > 0 && selectedDestination && selectedDay) {
        const firstTrain = result[0];
        queryText += `${firstTrain.departureTime}에 출발해요.`;
        if (firstTrain.destination.includes("제주")) {
            queryText += ` (배편이에요.)`;
        }
    } else if (result.length > 0 && selectedDestination) {
        queryText += ` 여러 시간에 출발해요.`;
    } else if (result.length > 0 && selectedDay) {
        queryText += ` 여러 목적지로 출발해요.`;
    } 
     else if (result.length === 0) {
      queryText = `${selectedDay || ''} ${selectedDestination || ''} 가는 기차가 없어요.`;
    } else {
        queryText = "모든 기차 시간표입니다. (Este es el horario de todos los trenes.)";
    }
    setQueryResult(queryText);
  };

  const resetFilters = () => {
    setSelectedDestination('');
    setSelectedDay('');
    setFilteredTrains(scheduleData.trains);
    setQueryResult('');
  };

  return (
    <div className="animate-fade-in py-8 md:py-12">
      <div className="book-container-u8">
        <div
          className={`book-u8 ${isBookOpen ? 'open' : ''} h-[600px] md:h-[750px]`} 
          onClick={() => !isBookOpen && setIsBookOpen(true)}
        >
          {/* Portada del Libro */}
          <div 
            className="book-cover-u8 bg-dark-hazelnut p-6 rounded-r-lg rounded-l-md border-t-4 border-b-4 border-r-4 border-l-8 border-dark-mocha flex flex-col justify-between items-center text-center"
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
               {/* CAMBIO: FiTrain a FiNavigation */}
               <FiNavigation className="text-5xl md:text-6xl text-straw mx-auto" style={{filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.5))'}}/>
              <p className="font-korean-title text-3xl text-straw mt-2">
                시간 여행
              </p>
            </div>
            {!isBookOpen ? (
              <button
                onClick={(e) => { e.stopPropagation(); setIsBookOpen(true); }}
                className="mb-8 btn-primary-vintage bg-medium-topaz text-almost-black hover:bg-straw hover:text-dark-mocha py-3 px-6 text-lg"
              >
                <FiBookOpen className="mr-2" /> Ver Horarios
              </button>
            ) : <div className="h-20"></div> }
          </div>

          {/* Contenido Interior del Libro */}
          <div className="book-interior-u8 bg-muted-antique text-almost-black rounded-lg shadow-inner-page">
            {/* Ambas páginas mostrarán el horario y controles */}
            <div className="page-area-u8 custom-scrollbar">
              <div className="train-schedule-container">
                <h2 className="schedule-title">{unidadData.tituloCoreano}</h2>
                <div className="schedule-controls">
                  <div>
                    <label htmlFor="destination-select">목적지 (Destino):</label>
                    <select id="destination-select" value={selectedDestination} onChange={(e) => setSelectedDestination(e.target.value)}>
                      <option value="">모든 목적지 (Todos)</option>
                      {scheduleData.destinations.map(dest => <option key={dest} value={dest}>{dest}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="day-select">요일 (Día):</label>
                    <select id="day-select" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
                      <option value="">모든 요일 (Todos)</option>
                      {scheduleData.daysOfWeek.map(day => <option key={day} value={day}>{day}</option>)}
                    </select>
                  </div>
                  <button onClick={handleSearch} className="flex items-center"><FiSearch className="mr-1"/> 검색 (Buscar)</button>
                  <button onClick={resetFilters}>초기화 (Reset)</button>
                </div>

                <div className="query-result-display">
                    <p className="query-result-text">
                        {queryResult || "원하는 목적지와 요일을 선택하고 검색 버튼을 누르세요."}
                    </p>
                </div>
              </div>
            </div>

            <div className="page-area-u8 custom-scrollbar">
              <div className="train-schedule-container">
                <div className="train-schedule-table-wrapper">
                  <table className="train-schedule-table">
                    <thead>
                      <tr>
                        <th>기차 번호 (Tren N°)</th>
                        <th>목적지 (Destino)</th>
                        <th>출발 요일 (Día Salida)</th>
                        <th>출발 시간 (Salida)</th>
                        <th>도착 시간 (Llegada)</th>
                        <th>플랫폼 (Andén)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTrains.map(train => (
                        <tr key={train.id} className={
                            (selectedDestination && train.destination !== selectedDestination) || (selectedDay && train.departureDay !== selectedDay) 
                            ? 'opacity-50' 
                            : 'hover:bg-medium-topaz/20'
                        }>
                          {/* CAMBIO: FiTrain a FiNavigation */}
                          <td>{train.id.includes("F") ? <FiAnchor className="inline mr-1 text-blue-600"/> : <FiNavigation className="inline mr-1"/>}{train.id}</td>
                          <td>{train.destination}</td>
                          <td>{train.departureDay}</td>
                          <td>{train.departureTime}</td>
                          <td>{train.arrivalTime}</td>
                          <td>{train.platform}</td>
                        </tr>
                      ))}
                      {filteredTrains.length === 0 && (
                        <tr>
                            <td colSpan="6" className="text-center font-korean-handwriting text-lg py-4">
                                선택하신 조건에 맞는 기차가 없습니다. (No hay trenes para su selección.)
                            </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                 <div className="mt-auto pt-6 text-center">
                    <p className="font-serif text-xs text-dark-hazelnut/80">
                        Gramática: <span className="font-sans">{unidadData.gramatica.join(', ')}</span>
                    </p>
                </div>
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

export default Unidad8;
