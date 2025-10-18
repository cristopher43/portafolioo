import React from 'react'
import AboutImage from '../assets/pedropas.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJs, faJava, faPython, faCodepen, faKeybase, faCss } from '@fortawesome/free-brands-svg-icons';
import { BiLogoTypescript } from "react-icons/bi";

const About = () => {
    return (
        <div className='bg-black text-white py-20' id='sobre-mi'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Sobre Mí</h2>

                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img
                        src={AboutImage}
                        alt='Cristopher Candia'
                        className='w-72 h-80 rounded-lg object-cover mb-8 md:mb-0 shadow-lg'
                    />

                    <div className='flex-1'>
                        <p className='text-lg mb-8 text-gray-300'>
                            Soy Cristopher Candia, estudiante de Ingeniería en Informática.
                            Me apasiona la tecnología, el desarrollo web y aprender nuevas herramientas
                            que me ayuden a crecer profesionalmente. En mi tiempo libre me gusta explorar
                            proyectos creativos y mejorar mis habilidades día a día.
                        </p>

                        <div className='space-y-6'>

                            {/* Barra 1 */}
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss' className='w-3/12 flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faHtml5} bounce className='text-orange-500' />
                                    <span>HTML</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'></div>
                                </div>
                            </div>

                            {/* Barra 2 */}
                            <div className='flex items-center'>
                                <label htmlFor='javaandjs' className='w-3/12 flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faJava} bounce className='text-red-500' />
                                    <span>Java</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                                </div>
                            </div>

                            {/* Barra 3 */}
                            <div className='flex items-center'>
                                <label htmlFor='python' className='w-3/12 flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faPython} bounce className='text-blue-400' />
                                    <span>Python</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                                </div>
                            </div>
                            {/* Barra 4 */}
                            <div className='flex items-center'>
                                <label htmlFor='python' className='w-3/12 flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faKeybase} bounce className='text-blue-400' />
                                    <span>Base de datos</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                                </div>
                            </div>
                            {/* Barra 5 */}
                            <div className='flex items-center'>
                                <label htmlFor='python' className='w-3/12 flex items-center space-x-2'>
                                    <BiLogoTypescript className="text-blue-400 w-5 h-5 transform transition-transform duration-300 hover:scale-105" />
                                    <span>Typescript</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                                </div>
                            </div>
                            {/* Barra 6 */}
                            <div className='flex items-center'>
                                <label htmlFor='python' className='w-3/12 flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faCss} bounce className='text-blue-400' />
                                    <span>Css</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                                </div>
                            </div>

                            {/*proyectos*/}
                            <div className="mt-12 flex justify-between text-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                        3+
                                    </h3>
                                    <p>proyectos</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                        20+
                                    </h3>
                                    <p>trabajos</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                        2
                                    </h3>
                                    <p>Años univercidad</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About
