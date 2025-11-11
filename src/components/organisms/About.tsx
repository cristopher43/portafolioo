import React from 'react'
import AboutImage from '../../assets/icon2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJs, faJava, faPython, faCodepen, faKeybase, faCss } from '@fortawesome/free-brands-svg-icons';
import { BiLogoTypescript } from "react-icons/bi";

const About = () => {
    return (
        <div className='bg-black text-white py-20' id='sobre-mi'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 font-pixelify'>
                    Sobre Mí
                </h2>

                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img
                        src={AboutImage}
                        alt='Cristopher Candia'
                        className='w-72 h-80 rounded-lg object-cover mb-8 md:mb-0 shadow-lg'
                    />

                    <div className='flex-1'>
                        <p className='text-lg mb-8 text-gray-300'>
                            Soy Cristopher Candia, estudiante de Ingeniería en Informática en Duoc UC y con formación técnica en Electromecánica, especializado en mantenimiento de maquinaria industrial.
                            Me apasiona la tecnología, el desarrollo web y el aprendizaje continuo de nuevas herramientas que potencien mis habilidades profesionales.
                            Además, cuento con experiencia práctica en mantenimiento de ascensores en Heavenward, lo que me ha permitido combinar conocimientos teóricos con soluciones prácticas en entornos reales.
                            En mi tiempo libre me gusta explorar proyectos creativos y seguir desarrollando tanto mis habilidades en informática como mi conocimiento técnico-industrial.
                        </p>

                        <div className='space-y-6'>
                            {/* HTML */}
                            <div className='flex items-center'>
                                <label htmlFor='html' className='w-3/12 flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faHtml5} bounce className='text-orange-500' />
                                    <span>HTML</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 h-2.5 rounded-full w-11/12'></div>
                                </div>
                            </div>

                            {/* Java */}
                            <div className='flex items-center'>
                                <label htmlFor='java' className='w-3/12 flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faJava} bounce className='text-red-500' />
                                    <span>Java</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 h-2.5 rounded-full w-10/12'></div>
                                </div>
                            </div>

                            {/* Python */}
                            <div className='flex items-center'>
                                <label htmlFor='python' className='w-3/12 flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faPython} bounce className='text-yellow-400' />
                                    <span>Python</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 h-2.5 rounded-full w-9/12'></div>
                                </div>
                            </div>

                            {/* Bases de datos */}
                            <div className='flex items-center'>
                                <label htmlFor='db' className='w-3/12 flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faKeybase} bounce className='text-blue-400' />
                                    <span>Bases de Datos</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 h-2.5 rounded-full w-8/12'></div>
                                </div>
                            </div>

                            {/* TypeScript */}
                            <div className='flex items-center'>
                                <label htmlFor='ts' className='w-3/12 flex items-center space-x-2'>
                                    <BiLogoTypescript className="text-blue-400" />
                                    <span>TypeScript</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 h-2.5 rounded-full w-8/12'></div>
                                </div>
                            </div>

                            {/* CSS */}
                            <div className='flex items-center'>
                                <label htmlFor='css' className='w-3/12 flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faCss} bounce className='text-blue-300' />
                                    <span>CSS</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 h-2.5 rounded-full w-10/12'></div>
                                </div>
                            </div>

                            {/* Mantenimiento */}
                            <div className='flex items-center'>
                                <label htmlFor='mantenimiento' className='w-3/12 flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faCodepen} bounce className='text-gray-300' />
                                    <span>Mantenimiento Industrial</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 h-2.5 rounded-full w-10/12'></div>
                                </div>
                            </div>
                            {/* Electromecanica */}
                            <div className='flex items-center'>
                                <label htmlFor='electromecanica' className='w-3/12 flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faCodepen} bounce className='text-yellow-300' />
                                    <span>Electromecánica</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 h-2.5 rounded-full w-9/12'></div>
                                </div>
                            </div>
                            {/* AutoCad */}
                            <div className='flex items-center'>
                                <label htmlFor='autocad' className='w-3/12 flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faCodepen} bounce className='text-red-400' />
                                    <span>AutoCAD</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 h-2.5 rounded-full w-8/12'></div>
                                </div>
                            </div>
                            {/* JavaScript */}
                            <div className='flex items-center'>
                                <label htmlFor='javaScripit' className='w-3/12 flex items-center space-x-2'>
                                    <FontAwesomeIcon icon={faJava} bounce className='text-red-400' />
                                    <span>JavaScript</span>
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 h-2.5 rounded-full w-8/12'></div>
                                </div>
                            </div>

                            {/* Estadisticas */}
                            <div className="mt-12 flex justify-between text-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500">
                                        2+
                                    </h3>
                                    <p>Proyectos personales</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500">
                                        10+
                                    </h3>
                                    <p>Trabajos Prácticas</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500">
                                        2
                                    </h3>
                                    <p>Años universidad</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
