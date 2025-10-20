import React from 'react';
import { FaEnvelope, FaGit, FaGithub, FaPhone } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contacto">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 font-pixelify">
          Contacto
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">¡Hola! Soy Cristopher</h3>
            <p className="text-gray-300 mb-6">
              Soy estudiante de Ingeniería en Informática apasionado por el desarrollo web,
              la programación y el aprendizaje constante. Me gusta crear proyectos modernos con React
              y mejorar mis habilidades día a día.
            </p>

            <div className="mb-4 mt-8 flex items-center">
              <FaEnvelope className="inline-block text-purple-700 mr-2" />
              <a href="mailto:cristopher@example.com" className="hover:underline">
                cristopher@example.com
              </a>
            </div>

            <div className="mb-4 flex items-center">
              <FaPhone className="inline-block text-purple-700 mr-2" />
              <span>+56 9 1234 5678</span>
            </div>


            <div className="mb-4 flex items-center">
              <FaGithub className="inline-block text-purple-700 mr-2" />
              <a href="https://github.com/cristopher43?tab=repositories"
                target="_blank"
                rel="noopener  noreferrer"
              >
                GitHub
              </a>
            </div>

          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>

              {/*ingresar nombre*/}
              <div>
                <label htmlFor="name"> Tu Nombre</label>
                <input type="text"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 foccus:outline-none
                focus:border-green-400'
                  placeholder='ingrese su nombre' />
              </div>
              {/*ingrese correo*/}
              <div>
                <label htmlFor="email" className='block nb-2'> Correo</label>
                <input type="text"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 foccus:outline-none
                focus:border-green-400'
                  placeholder='ingrese su email' />
              </div>
              {/*ingrese mensaje */}
              <div>
                <label htmlFor="mensaje" className='block mb-2'>Mensaje</label>
                <textarea
                  id="mensaje"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  rows={5}
                  placeholder='Ingrese mensaje'
                />
              </div>

              {/*boton de nevio */}
              <button className="bg-gradient-to-r from-purple-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                enviar
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};
