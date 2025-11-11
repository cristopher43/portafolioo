import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">CC</div>

        {/* Menú de escritorio */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <a href="#Navbar" className="hover:text-gray-400">Home</a>
          <a href="#sobre-mi" className="hover:text-gray-400">Sobre mí</a>
          <a href="#servicios" className="hover:text-gray-400">Servicios</a>
          <a href="#proyectos" className="hover:text-gray-400">Proyectos</a>
          <a
            href="#contacto"
            className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform"
          >
            Contacto
          </a>
        </div>

        {/* Botón hamburguesa para móvil */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="flex flex-col md:hidden space-y-2 pb-4">
          <a href="#Navbar" className="hover:text-gray-400">Home</a>
          <a href="#sobre-mi" className="hover:text-gray-400">Sobre mí</a>
          <a href="#servicios" className="hover:text-gray-400">Servicios</a>
          <a href="#proyectos" className="hover:text-gray-400">Proyectos</a>
          <a
            href="#contacto"
            className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
