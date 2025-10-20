import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="flex justify-between items-center py-2">
        {/* Logo */}
        <div className="text-2xl font-bold">CC</div>

        {/* Boton */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menu */}
        <div
          className={`flex flex-col md:flex-row md:space-x-6 w-full md:w-auto ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <a href="#Navbar" className="hover:text-gray-400 py-2 md:py-0">Home</a>
          <a href="#sobre-mi" className="hover:text-gray-400 py-2 md:py-0">Sobre mí</a>
          <a href="#servicios" className="hover:text-gray-400 py-2 md:py-0">Servicios</a>
          <a href="#proyectos" className="hover:text-gray-400 py-2 md:py-0">Proyectos</a>
          <a href="#contacto" className="hover:text-gray-400 py-2 md:py-0">Contacto</a>
        </div>

        {/*contacto*/}
        <a
          href="#contacto"
          className="hidden md:inline bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
