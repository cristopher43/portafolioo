import React from 'react'
import Heroimagen from '../assets/pedropas.png'

export const Hero = () => {
    return (
        <div className='bg-black text-white text-center py-16'>
            <img src={Heroimagen} alt='Cristopher Candia' className='mx-auto w-48 h-48 rounded-full mb-6' />

            <h1 className='text-4xl font-bold'>
                Yo{" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    soy Cristopher Candia
                </span>
                , estudiante de Ingeniería en Informática
            </h1>

            <p className='mt-4 text-lg text-gray-300'>
                Soy estudiante y me apasiona la tecnología
            </p>

            <div className='mt-8 space-x-4'>
                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                    Contáctame
                </button>

                <button className="bg-gradient-to-r from-pink-400 to-pink-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                    Resumen
                </button>
            </div>
        </div>
    );
};

export default Hero;
