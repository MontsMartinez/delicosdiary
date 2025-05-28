import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
    FiBookOpen, FiChevronsRight, FiArrowLeft, FiArrowRight, 
    FiThermometer, FiWind, FiSun, FiCloud, FiCloudSnow, FiCloudRain, FiCalendar, FiWatch
} from 'react-icons/fi';
import './Unidad7.css'; 
import { datosUnidades } from '../../data/unidadesData';

// Iconos para las estaciones
const seasonIcons = {
    "봄": <FiSun className="text-yellow-400" />, // Sol para primavera
    "여름": <FiSun className="text-orange-500" />, // Sol más intenso para verano
    "가을": <FiWind className="text-orange-600" />, // Viento/hoja para otoño
    "겨울": <FiCloudSnow className="text-blue-300" />, // Nieve para invierno
};

function Unidad7() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  let { numeroUnidad: numeroUnidadParam } = useParams();
  const navigate = useNavigate();
  const numeroUnidad = parseInt(numeroUnidadParam) || 7; 
  
  const unidadData = datosUnidades[numeroUnidad];
  const totalUnidades = Object.keys(datosUnidades).length;

  // Estados para los instrumentos del observatorio
  const observatoryConfig = unidadData?.observatoryData;
  const [selectedSeason, setSelectedSeason] = useState(observatoryConfig?.seasons[0]);
  const [selectedTempIndex, setSelectedTempIndex] = useState(Math.floor((observatoryConfig?.temperatures.length || 0) / 2));
  const [selectedWind, setSelectedWind] = useState(observatoryConfig?.winds[0]);
  const [selectedSky, setSelectedSky] = useState(observatoryConfig?.skyConditions[0]); // Opcional

  const [weatherReport, setWeatherReport] = useState("");

  useEffect(() => {
    if (!unidadData || !unidadData.isBookPage || numeroUnidad !== 7) {
      console.warn(`Cargando Unidad7.jsx para unidad ${numeroUnidad} que no es la esperada.`);
    }
    // Resetear estados si la unidad cambia o no hay datos
    if (observatoryConfig) {
        setSelectedSeason(observatoryConfig.seasons[0]);
        setSelectedTempIndex(Math.floor(observatoryConfig.temperatures.length / 2));
        setSelectedWind(observatoryConfig.winds[0]);
        setSelectedSky(observatoryConfig.skyConditions[0]);
    }
  }, [unidadData, numeroUnidad, navigate, observatoryConfig]);

  // Generar el informe del clima cuando cambian las selecciones
  useEffect(() => {
    if (!observatoryConfig) return;

    const tempInfo = observatoryConfig.temperatures[selectedTempIndex];
    
    let report = `${selectedSeason.text} ${tempInfo.text} 그리고 ${selectedWind.text}.`;
    if (selectedSky) { // Si se usa el selector de cielo
        report += ` ${selectedSky.text}.`;
    }

    // Ejemplo de uso de "안"
    if (selectedSeason.value === "여름" && !tempInfo.isHot) {
        report += ` 오늘은 많이 덥지 않아요.`;
    } else if (selectedSeason.value === "겨울" && !tempInfo.isCold) {
        report += ` 오늘은 별로 춥지 않아요.`;
    } else if (selectedSky && selectedSky.isGoodWeather && (selectedSeason.value === "봄" || selectedSeason.value === "가을")) {
        report += ` 밖에 나가기 좋은 날씨예요. 비가 안 와요.`;
    } else if (selectedSky && !selectedSky.isGoodWeather) {
        report += ` 날씨가 안 좋아요.`;
    }
    
    setWeatherReport(report);

  }, [selectedSeason, selectedTempIndex, selectedWind, selectedSky, observatoryConfig]);


  if (!unidadData || !observatoryConfig) return (
    <div className="text-center py-10 animate-fade-in">
        <h2 className="text-4xl font-serif">Cargando datos del observatorio...</h2>
        <Link to="/indice" className="mt-8 btn-secondary-vintage">Volver al Índice</Link>
      </div>
  );

  const handleSeasonChange = (event) => {
    const seasonValue = event.target.value;
    setSelectedSeason(observatoryConfig.seasons.find(s => s.value === seasonValue));
  };

  const handleTempChange = (event) => {
    setSelectedTempIndex(parseInt(event.target.value));
  };

  const handleWindChange = (event) => {
    const windValue = event.target.value;
    setSelectedWind(observatoryConfig.winds.find(w => w.value === windValue));
  };
  
  const handleSkyChange = (event) => {
    const skyValue = event.target.value;
    setSelectedSky(observatoryConfig.skyConditions.find(s => s.value === skyValue));
  };


  return (
    <div className="animate-fade-in py-8 md:py-12">
      <div className="book-container-u7">
        <div
          className={`book-u7 ${isBookOpen ? 'open' : ''} h-[600px] md:h-[720px]`}
          onClick={() => !isBookOpen && setIsBookOpen(true)}
        >
          {/* Portada del Libro */}
          <div 
            className="book-cover-u7 bg-dark-hazelnut p-6 rounded-r-lg rounded-l-md border-t-4 border-b-4 border-r-4 border-l-8 border-dark-mocha flex flex-col justify-between items-center text-center"
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
               <FiWatch className="text-5xl md:text-6xl text-straw mx-auto" style={{filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.5))'}}/>
              <p className="font-korean-title text-3xl text-straw mt-2">
                날씨 관찰
              </p>
            </div>
            {!isBookOpen ? (
              <button
                onClick={(e) => { e.stopPropagation(); setIsBookOpen(true); }}
                className="mb-8 btn-primary-vintage bg-medium-topaz text-almost-black hover:bg-straw hover:text-dark-mocha py-3 px-6 text-lg"
              >
                <FiBookOpen className="mr-2" /> Abrir Observatorio
              </button>
            ) : <div className="h-20"></div> }
          </div>

          {/* Contenido Interior del Libro */}
          <div className="book-interior-u7 bg-muted-antique text-almost-black rounded-lg shadow-inner-page">
            {/* Página Izquierda: Panel de Control del Observatorio */}
            <div className="page-area-u7 custom-scrollbar">
              <div className="observatory-panel">
                <h3 className="font-korean-title text-2xl text-dark-mocha mb-6">관측 장비 (Instrumentos)</h3>

                {/* Selector de Estaciones (Dial Simulado con Select) */}
                <div className="instrument-slider-container mb-6">
                  <label htmlFor="season-select" className="flex items-center justify-center">
                    {seasonIcons[selectedSeason.value] || <FiCalendar/>} 계절 (Estación):
                  </label>
                  <select 
                    id="season-select"
                    value={selectedSeason.value} 
                    onChange={handleSeasonChange}
                    className="mt-2 p-2 rounded-md border-2 border-dark-mocha bg-straw text-almost-black font-korean-title w-full focus:ring-medium-topaz focus:border-medium-topaz"
                  >
                    {observatoryConfig.seasons.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                  </select>
                </div>
                
                {/* Termómetro (Slider) */}
                <div className="instrument-slider-container mb-6">
                  <label htmlFor="temp-slider" className="flex items-center justify-center">
                    <FiThermometer className="mr-2 text-red-600"/> 온도 (Temperatura):
                  </label>
                  <input 
                    type="range" 
                    id="temp-slider"
                    min="0" 
                    max={observatoryConfig.temperatures.length - 1} 
                    value={selectedTempIndex} 
                    onChange={handleTempChange}
                    className="w-full h-2 bg-dark-mocha/30 rounded-lg appearance-none cursor-pointer accent-medium-topaz"
                  />
                  <p className="slider-value">{observatoryConfig.temperatures[selectedTempIndex].label}</p>
                </div>

                {/* Medidor de Viento (Select) */}
                 <div className="instrument-slider-container mb-6">
                  <label htmlFor="wind-select" className="flex items-center justify-center">
                    <FiWind className="mr-2 text-blue-500"/> 바람 (Viento):
                  </label>
                  <select 
                    id="wind-select"
                    value={selectedWind.value} 
                    onChange={handleWindChange}
                    className="mt-2 p-2 rounded-md border-2 border-dark-mocha bg-straw text-almost-black font-korean-title w-full focus:ring-medium-topaz focus:border-medium-topaz"
                  >
                    {observatoryConfig.winds.map(w => <option key={w.value} value={w.value}>{w.label}</option>)}
                  </select>
                </div>

                {/* Selector de Cielo (Opcional) */}
                 <div className="instrument-slider-container">
                  <label htmlFor="sky-select" className="flex items-center justify-center">
                    <FiCloud className="mr-2 text-gray-500"/> 하늘 (Cielo):
                  </label>
                  <select 
                    id="sky-select"
                    value={selectedSky.value} 
                    onChange={handleSkyChange}
                    className="mt-2 p-2 rounded-md border-2 border-dark-mocha bg-straw text-almost-black font-korean-title w-full focus:ring-medium-topaz focus:border-medium-topaz"
                  >
                    {observatoryConfig.skyConditions.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Página Derecha: Libreta de Anotaciones */}
            <div className="page-area-u7 custom-scrollbar">
              <div className="weather-report-page">
                <h3 className="weather-report-title">{unidadData.tituloCoreano}</h3>
                <div className="weather-report-text-area">
                  <p className="weather-report-text">
                    {weatherReport.split('. ').map((sentence, index, arr) => (
                        <span key={index}>
                            {sentence.trim() ? `${sentence.trim()}${index < arr.length -2 ? '.' : ''} ` : ''}
                            {/* Añadir un salto de línea después de cada frase para mejor formato de diario */}
                            {index < arr.length -2 && sentence.trim() ? <><br/><br/></> : ''} 
                        </span>
                    ))}
                  </p>
                </div>
                <div className="mt-4 text-center">
                    <h4 className="font-serif text-lg text-dark-mocha mb-2">오늘 뭐 입을까요? (¿Qué me pongo hoy?)</h4>
                    <div className="clothing-suggestion">
                        {selectedSeason.clothing?.map(item => (
                            <img key={item} src={`/assets/clothing/${item}`} alt={item.split('.')[0]} title={item.split('.')[0]}
                                 onError={(e) => e.target.src = `https://placehold.co/80x80/A4957E/1A1A1A?text=${item.split('.')[0]}`}
                            />
                        ))}
                        {/* Añadir paraguas si llueve, o gorro si nieva/hace mucho frío */}
                        {selectedSky.value === "비가 와요" && <img src="/assets/clothing/umbrella.png" alt="paraguas" title="paraguas" onError={(e) => e.target.src = `https://placehold.co/80x80/A4957E/1A1A1A?text=우산`}/>}
                        {selectedSky.value === "눈이 와요" && <img src="/assets/clothing/winter_hat.png" alt="gorro de invierno" title="gorro de invierno" onError={(e) => e.target.src = `https://placehold.co/80x80/A4957E/1A1A1A?text=모자`}/>}
                    </div>
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

export default Unidad7;
