// Projects.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from '../organisms/Projects';

describe('Projects Component', () => {
    test('renders the title', () => {
        render(<Projects />);
        const titleElement = screen.getByText(/Proyectos/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders all project cards', () => {
        render(<Projects />);
        // Cada tarjeta tiene una imagen, usamos eso para contar
        const projectCards = screen.getAllByRole('img');
        expect(projectCards.length).toBe(2); // Ajusta si agregas más proyectos
    });

    test('renders project names and technologies', () => {
        render(<Projects />);

        // Nombres de proyectos
        expect(screen.getByText(/EduTech - Sistema de Gestión de Cursos/i)).toBeInTheDocument();
        expect(screen.getByText(/Portfolio Personal/i)).toBeInTheDocument();

        // Tecnologías
        expect(screen.getByText(/Java • Spring Boot • HATEOAS • Swagger • JUnit • Mockito/i)).toBeInTheDocument();
        expect(screen.getByText(/React • TailwindCSS • TypeScript • Vite/i)).toBeInTheDocument();
    });

    test('renders GitHub links correctly', () => {
        render(<Projects />);

        const links = screen.getAllByRole('link');
        expect(links[0]).toHaveAttribute('href', 'https://github.com/VoodoooQ/Evaluaci-n-2');
        expect(links[1]).toHaveAttribute('href', 'https://github.com/cristopher43/portafolioo');
    });
});
