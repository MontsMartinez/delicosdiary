import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-space-cadet">
      {/* Puedes usar bg-cosmic-gradient aquí si lo prefieres */}
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet /> {/* El contenido de cada página se renderizará aquí */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;