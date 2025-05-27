import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiList, FiBookOpen, FiMessageSquare } from 'react-icons/fi'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const projectTitle = "몬츠의 일기";

  const navItems = [
    { path: "/", label: "Portada", icon: <FiHome /> },
    { path: "/indice", label: "Índice", icon: <FiList /> },
    { path: "/conclusiones", label: "Conclusiones", icon: <FiMessageSquare /> },
  ];

  return (
    <nav className="bg-almost-black/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-2 border-dark-hazelnut/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Título del Proyecto con fuente coreana para títulos */}
          <NavLink 
            to="/" 
            className="text-3xl md:text-4xl font-korean-title text-medium-topaz hover:text-straw transition-colors animate-fade-in"
          >
            {projectTitle}
          </NavLink>

          <div className="hidden md:flex space-x-1">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link flex items-center space-x-2 ${isActive ? 'nav-link-active' : ''}`
                }
              >
                {item.icon && React.cloneElement(item.icon, { className: "mr-1 h-4 w-4" })}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-straw focus:outline-none">
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-mocha/95 backdrop-blur-sm pb-4 border-t border-dark-hazelnut/30 animate-fade-in">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-3 text-lg font-serif flex items-center space-x-3 ${isActive ? 'bg-medium-topaz text-almost-black font-semibold' : 'text-straw hover:bg-dark-hazelnut hover:text-medium-topaz'}`
              }
            >
              {item.icon && React.cloneElement(item.icon, { className: "mr-2 h-5 w-5" })}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;