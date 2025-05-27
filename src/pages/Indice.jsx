import React from 'react';
import { Link } from 'react-router-dom';

const unidades = [
  { numero: 1, tituloCoreano: "자기소개", tituloEspanol: "Presentación Personal" },
  { numero: 2, tituloCoreano: "일상생활", tituloEspanol: "Vida Diaria" },
  { numero: 3, tituloCoreano: "위치", tituloEspanol: "Ubicación" },
  { numero: 4, tituloCoreano: "물건 사기 1", tituloEspanol: "Comprar Cosas 1" },
  { numero: 5, tituloCoreano: "물건 사기 2", tituloEspanol: "Comprar Cosas 2" },
  { numero: 6, tituloCoreano: "어제 일과", tituloEspanol: "Rutina de Ayer" },
  { numero: 7, tituloCoreano: "날씨", tituloEspanol: "Clima" },
  { numero: 8, tituloCoreano: "시간", tituloEspanol: "Tiempo" },
];

const bookColors = [
  'bg-dark-mocha', 
  'bg-dark-hazelnut', 
  'bg-pewter-gray/70',
  'bg-dark-mocha/80',
  'bg-dark-hazelnut/90',
];

const bookSizes = [
  { height: 'h-64', width: 'w-12 md:w-16', textSize: 'text-sm' },
  { height: 'h-56', width: 'w-16 md:w-20', textSize: 'text-xs' },
  { height: 'h-72', width: 'w-10 md:w-14', textSize: 'text-sm' },
  { height: 'h-60', width: 'w-14 md:w-18', textSize: 'text-sm' },
  { height: 'h-52', width: 'w-20 md:w-24', textSize: 'text-base' },
];

const getRandomBookStyle = (index) => {
  const color = bookColors[index % bookColors.length];
  const size = bookSizes[index % bookSizes.length];
  return { color, ...size };
};

// Colores de Tailwind para usar en JS (asegúrate que coincidan con tu config)
const tailwindColors = {
  'dark-hazelnut': '#8B4513',
  'medium-topaz': '#B8860B',
  'dark-mocha': '#5C4033',
};

function Indice() {
  return (
    <div className="w-full animate-fade-in py-8 md:py-12 overflow-hidden">
      <h2 className="text-5xl font-serif font-bold mb-10 md:mb-16 text-center text-medium-topaz">
        Índice del Diario
      </h2>
      
      {/* Contenedor del marco de la estantería */}
      <div className="flex justify-center px-4">
        <div 
          className="bg-dark-mocha p-2 md:p-3 rounded-md shadow-2xl border-2 border-dark-hazelnut" 
          style={{
            // Un marco exterior más oscuro
            // Podrías usar un gradiente aquí si quieres un efecto más "anaranjado"
            // backgroundImage: `linear-gradient(to bottom right, ${tailwindColors['medium-topaz']}, ${tailwindColors['dark-hazelnut']})`,
          }}
        >
          <div 
            className="bg-almost-black p-1 md:p-2 rounded-sm border-2 border-medium-topaz/50" // Un bisel interior más claro
          >
            {/* Estantería con scroll horizontal */}
            <div 
              className="flex items-end space-x-2 md:space-x-3 px-2 py-4 overflow-x-auto overflow-y-hidden min-h-[20rem] md:min-h-[24rem] rounded-sm"
              style={{ 
                background: `linear-gradient(to bottom, transparent, ${tailwindColors['dark-hazelnut'] || '#8B4513'} 98%)`,
                paddingBottom: '1.5rem', 
              }}
            >
              {unidades.map((unidad, index) => {
                const style = getRandomBookStyle(index);
                return (
                  <Link
                    key={unidad.numero}
                    to={`/unidad/${unidad.numero}`}
                    className={`
                      ${style.height} ${style.width} ${style.color}
                      flex flex-col justify-between items-center 
                      p-2 md:p-3 rounded-t-md shadow-lg 
                      text-straw hover:shadow-glow-topaz transition-all duration-300 ease-in-out
                      transform hover:-translate-y-2 cursor-pointer relative group
                      border-t-2 border-x-2 border-black/20 
                    `}
                    title={`${unidad.tituloCoreano} - ${unidad.tituloEspanol}`}
                  >
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <span 
                        className={`font-korean-title ${style.textSize} md:text-base font-semibold text-medium-topaz group-hover:text-straw block leading-tight`}
                      >
                        {unidad.numero}
                      </span>
                      <span 
                        className={`font-korean-title ${style.textSize} md:text-base group-hover:text-straw mt-1 block leading-tight`}
                        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }} 
                      >
                        {unidad.tituloCoreano.length > 5 ? `${unidad.tituloCoreano.substring(0, 4)}…` : unidad.tituloCoreano}
                      </span>
                    </div>
                    <div className="w-full h-1 bg-medium-topaz/50 opacity-50 group-hover:opacity-100 mb-1"></div>
                    <div className="w-3/4 h-0.5 bg-medium-topaz/30 opacity-50 group-hover:opacity-80"></div>
                  </Link>
                );
              })}

              {/* Libro de Conclusiones */}
              {(() => {
                const style = getRandomBookStyle(unidades.length);
                return (
                  <Link
                    to="/conclusiones"
                    className={`
                      ${style.height} ${style.width} ${bookColors[(unidades.length) % bookColors.length]}
                      flex flex-col justify-between items-center 
                      p-2 md:p-3 rounded-t-md shadow-lg 
                      text-straw hover:shadow-glow-topaz transition-all duration-300 ease-in-out
                      transform hover:-translate-y-2 cursor-pointer relative group
                      border-t-2 border-x-2 border-black/20 ml-4 md:ml-6
                    `}
                    title="Conclusiones del Proyecto"
                  >
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <span 
                        className={`font-serif ${style.textSize} md:text-base font-semibold text-medium-topaz group-hover:text-straw block leading-tight`}
                      >
                        Fin
                      </span>
                      <span 
                        className={`font-serif ${style.textSize} md:text-base group-hover:text-straw mt-1 block leading-tight`}
                        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                      >
                        Concl.
                      </span>
                    </div>
                    <div className="w-full h-1 bg-medium-topaz/50 opacity-50 group-hover:opacity-100 mb-1"></div>
                    <div className="w-3/4 h-0.5 bg-medium-topaz/30 opacity-50 group-hover:opacity-80"></div>
                  </Link>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-center text-muted-antique text-sm mt-6 font-sans italic">
        (Desliza horizontalmente si hay más unidades)
      </p>
    </div>
  );
}

export default Indice;
