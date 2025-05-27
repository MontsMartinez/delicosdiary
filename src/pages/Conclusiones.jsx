import React from 'react';
import { Link } from 'react-router-dom';

function Conclusiones() {
  return (
    <div className="max-w-3xl mx-auto animate-fade-in p-4">
      <article className="content-card p-8 md:p-10">
        <h2 className="text-5xl font-serif font-bold mb-10 text-center text-medium-topaz">Conclusiones</h2>
        
        {/* Se usa la configuración de 'prose' que ya tiene font-serif para los párrafos */}
        <div className="prose prose-xl max-w-none prose-p:font-serif prose-p:text-lg prose-p:text-straw prose-strong:text-medium-topaz prose-headings:font-serif prose-headings:text-medium-topaz/90">
          <p className="drop-cap"> {/* Usamos la clase drop-cap normal para texto en español */}
            Al finalizar este proyecto, el "Diario de Monts", siento una mezcla de satisfacción y nostalgia.
            Esta travesía a través de las unidades del curso de Coreano 1 no solo ha sido un ejercicio académico,
            sino una oportunidad para conectar de una manera más personal y creativa con el idioma.
          </p>
          <p>
            Cada "página" de este diario digital fue un pequeño reto y una alegría. Recordar y aplicar la gramática,
            buscar el vocabulario adecuado, y tratar de expresar mis ideas y vivencias en coreano ha sido
            fundamental para afianzar lo aprendido. Desde el <code className="font-semibold">이에요/예요</code> de las presentaciones iniciales
            hasta el manejo del tiempo con <code className="font-semibold">시</code> y <code className="font-semibold">분</code>, cada estructura gramatical cobró vida al ser utilizada en un contexto real,
            aunque fuera simulado en estas entradas.
          </p>
          <p>
            El aspecto visual, con este aire vintage que intenté plasmar, también fue parte importante de la experiencia.
            Quería que no solo fuera un repositorio de textos, sino un espacio agradable y evocador, como
            hojear un viejo cuaderno lleno de recuerdos y descubrimientos.
          </p>
          <p>
            Este curso y este proyecto me han enseñado que aprender un idioma va más allá de memorizar reglas;
            es abrir una puerta a una nueva forma de pensar y de ver el mundo. Aunque el camino del aprendizaje del coreano
            es largo, este primer paso ha sido increíblemente enriquecedor.
          </p>
          <p>
            Agradezco a la Maestra Kim María por su guía y paciencia, y a la UAA por la oportunidad.
            Espero seguir explorando la riqueza del idioma y la cultura coreana.
          </p>
          <p className="text-right font-manuscript text-2xl text-medium-topaz/90 mt-8">
            - Montserrat
          </p>
        </div>

         <div className="w-1/3 mx-auto my-10 h-px bg-gradient-to-r from-transparent via-pewter-gray/50 to-transparent"></div>

        <div className="text-center mt-12">
          <Link to="/indice" className="btn-primary-vintage">
            Volver al Índice
          </Link>
        </div>
      </article>
    </div>
  );
}

export default Conclusiones;