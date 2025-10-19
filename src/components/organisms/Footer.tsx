import React from "react";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 mt-20 border-t border-purple-500/30">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500">
                            Cristopher Candia
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Estudiante de Ingeniería en Informática — Santiago, Chile 🇨🇱
                        </p>
                    </div>

                    {/*formulario*/}
                    <div className="flex-1">
                        <form className="flex items-center bg-gray-900 rounded-lg overflow-hidden">
                            <input
                                type="email"
                                placeholder="Ingresa tu correo"
                                className="flex-grow px-4 py-2 bg-transparent text-white outline-none placeholder-gray-400"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2 font-semibold hover:opacity-90 transition-opacity"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>

                {/* redes */}
                <div className="flex justify-center mt-10 space-x-6 text-2xl">
                    <a
                        href="mailto:tuemail@gmail.com"
                        className="text-violet-400 hover:text-fuchsia-400 transition-colors duration-300"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://github.com/cristopher43"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-400 hover:text-fuchsia-400 transition-colors duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.instagram.com/tu_usuario/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-400 hover:text-fuchsia-400 transition-colors duration-300"
                    >
                        <FaInstagram />
                    </a>
                </div>

                <p className="text-center text-gray-500 text-sm mt-6">
                    © {new Date().getFullYear()} Cristopher Candia — Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
