import React from 'react';
import imageen from '../../assets/pedropas.png';

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
        github: "https://github.com/cristopher43/portafolioo"
    },
];

const Projects = () => {
    return (
        <div className="bg-black text-white py-20" id="proyectos">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 font-pixelify">
                    Proyectos
                </h2>

                {/* Contenedor de tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-900 p-6 rounded-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transform transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="rounded-lg mb-4 w-full h-48 object-cover"
                            />
                            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500">
                                {project.name}
                            </h3>
                            <p className="text-gray-400 mb-4">
                                {project.technologies.join(" • ")}
                            </p>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-violet-400 hover:text-fuchsia-400 transition-colors"
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
