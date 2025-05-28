import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Portada from './pages/Portada';
import Indice from './pages/Indice';
import Conclusiones from './pages/Conclusiones/Conclusiones';

// Importa los componentes de cada unidad individualmente
import Unidad1 from './pages/Unidad1/Unidad1';
import Unidad2 from './pages/Unidad2/Unidad2';
import Unidad3 from './pages/Unidad3/Unidad3';
import Unidad4 from './pages/Unidad4/Unidad4';
import Unidad6 from './pages/Unidad6/Unidad6';
import Unidad7 from './pages/Unidad7/Unidad7';
import Unidad8 from './pages/Unidad8/Unidad8';
// Deberás crear estos componentes. Puedes empezar copiando UnidadGenerica.
// import Unidad3 from './pages/Unidad3/Unidad3';
// ... y así sucesivamente para todas las unidades.
// Si para las unidades 3-8 quieres usar un diseño genérico por ahora:


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Portada />} />
        <Route path="indice" element={<Indice />} />
        
        {/* Rutas explícitas para cada unidad */}
        <Route path="unidad/1" element={<Unidad1 />} />
        <Route path="unidad/2" element={<Unidad2 />} />
        {/* Para las unidades 3 a 8, puedes apuntar a UnidadGenerica 
            o crear componentes específicos como Unidad2.jsx */}
        <Route path="unidad/3" element={<Unidad3/>} /> 
        <Route path="unidad/4" element={<Unidad4/>} />
        <Route path="unidad/5" element={<Unidad1 />} />
        <Route path="unidad/6" element={<Unidad6 />} />
        <Route path="unidad/7" element={<Unidad7 />} />
        <Route path="unidad/8" element={<Unidad8 />} />
        
        <Route path="conclusiones" element={<Conclusiones />} />
        {/* Puedes añadir una página 404 aquí */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
