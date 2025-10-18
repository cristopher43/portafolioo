import React from 'react';
import imageen from '../assets/pedropas.png';

const projects = [
    {
        id: 1,
        name: "EduTech - Sistema de Gestión de Cursos",
        technologies: ["Java", "Spring Boot", "HATEOAS", "Swagger", "JUnit", "Mockito"],
        image: imageen,
        github: "https://github.com/VoodoooQ/Evaluaci-n-2",
    },
    {
        id: 2,
        name: "Portfolio Personal",
        technologies: ["React", "TailwindCSS", "TypeScript", "Vite"],
        image: imageen,
        github: "https://github.com/CristopherCandia/portfolio",
    },
];

const Projects = () => {
    return (
        <div className="bg-black text-white py-20" id="proyectos">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">proyectos</h2>

                {/* Contenedor de tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="rounded-lg mb-4 w-full h-48 object-cover"
                            />
                            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                            <p className="text-gray-400 mb-4">
                                {project.technologies.join(" • ")}
                            </p>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-green-400 hover:text-blue-500 transition-colors"
                            >
                                Ver en GitHub →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
