import React from 'react'

const services = [
    {
        id: 1,
        title: "Web Design",
        description: "Creación de diseños web visualmente atractivos y fáciles de usar, utilizando HTML, CSS y frameworks modernos como Tailwind."
    },
    {
        id: 2,
        title: "Frontend Development",
        description: "Desarrollo de interfaces interactivas con React.js y TypeScript, aplicando buenas prácticas y componentes reutilizables."
    },
    {
        id: 3,
        title: "Backend Development",
        description: "Programación de APIs y microservicios en Java y Node.js, gestionando bases de datos y lógica de negocio."
    },
    {
        id: 4,
        title: "Database Management",
        description: "Diseño y administración de bases de datos relacionales y no relacionales, consultas SQL avanzadas y optimización de datos."
    },
    {
        id: 5,
        title: "Python Programming",
        description: "Automatización de procesos y análisis de datos con Python para proyectos académicos y personales."
    },
    {
        id: 6,
        title: "Industrial Maintenance",
        description: "Mantenimiento preventivo y correctivo de maquinaria industrial, con experiencia práctica en Heavenward."
    },
    {
        id: 7,
        title: "Electrical & Mechanical Systems",
        description: "Conocimientos en sistemas electromecánicos aplicados a la industria, reparación y ajustes de equipos complejos."
    },
    {
        id: 8,
        title: "Project Management",
        description: "Planificación y ejecución de proyectos tecnológicos e industriales, aplicando metodologías ágiles y documentación técnica."
    }
];


export const Service = () => {
    return (
        <div className='bg-black text-white py-20' id='servicios'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Servicios</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map(service => (
                        <div key={service.id}
                            className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
                            transition-transform duration-300 hover:scale-105'>
                            
                            <div className='text-right text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-green-600 to-blue-400'>
                                {service.id}
                            </div>

                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-green-400 to-blue-500'>
                                {service.title}
                            </h3>

                            <p className='mt-2 text-gray-300'>{service.description}</p>
                            <a href='#' className='mt-4 inline-block text-green-400 hover:text-blue-500'>
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service
