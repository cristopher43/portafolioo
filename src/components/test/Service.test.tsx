import { render, screen } from "@testing-library/react";
import Service from "../organisms/Service";

describe("Service component", () => {
    test("muestra el título 'Servicios'", () => {
        render(<Service />);
        expect(screen.getByText("Servicios")).toBeInTheDocument();
    });

    test("renderiza las 8 tarjetas de servicios", () => {
        render(<Service />);

        // Busca todas las cards por texto del título
        const titles = [
            "Web Design",
            "Frontend Development",
            "Backend Development",
            "Database Management",
            "Python Programming",
            "Industrial Maintenance",
            "Electrical & Mechanical Systems",
            "Project Management"
        ];

        titles.forEach(title => {
            expect(screen.getByText(title)).toBeInTheDocument();
        });
    });

    test("muestra las descripciones correctamente", () => {
        render(<Service />);

        expect(
            screen.getByText(/Creación de diseños web/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/Desarrollo de interfaces interactivas/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/Programación de APIs y microservicios/i)
        ).toBeInTheDocument();
    });
});
