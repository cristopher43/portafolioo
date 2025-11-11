import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Projects from "../organisms/Projects";

test("renderiza todas las imágenes de los proyectos", () => {
    render(<Projects />);

    const images = screen.getAllByRole("img");

    // Deben existir las imágenes
    expect(images.length).toBeGreaterThan(0);

    // Se asegura que cada imagen tenga un alt correcto
    expect(images[0]).toHaveAttribute("alt", "EduTech - Sistema de Gestión de Cursos");
    expect(images[1]).toHaveAttribute("alt", "Portfolio Personal");
});

test("renderiza los nombres de los proyectos", () => {
    render(<Projects />);

    expect(screen.getByText("EduTech - Sistema de Gestión de Cursos")).toBeInTheDocument();
    expect(screen.getByText("Portfolio Personal")).toBeInTheDocument();
});

test("renderiza los enlaces de GitHub", () => {
    render(<Projects />);

    const links = screen.getAllByRole("link");

    expect(links.length).toBeGreaterThan(0);

    expect(links[0]).toHaveAttribute("href", "https://github.com/VoodoooQ/Evaluaci-n-2");
    expect(links[1]).toHaveAttribute("href", "https://github.com/cristopher43/portafolioo");
});
