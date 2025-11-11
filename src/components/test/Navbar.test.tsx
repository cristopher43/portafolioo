import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../organisms/Navbar";

describe("Navbar Component", () => {
    
    test("debería mostrar el logo", () => {
        render(<Navbar />);
        expect(screen.getByText("CC")).toBeInTheDocument();
    });

    test("debería mostrar los enlaces principales", () => {
        render(<Navbar />);

        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Sobre mí")).toBeInTheDocument();
        expect(screen.getByText("Servicios")).toBeInTheDocument();
        expect(screen.getByText("Proyectos")).toBeInTheDocument();

        // Contacto aparece dos veces → usamos getAllByText
        const contactoLinks = screen.getAllByText("Contacto");
        expect(contactoLinks.length).toBeGreaterThanOrEqual(1);
    });

    test("debería mostrar el botón de menú móvil", () => {
        render(<Navbar />);
        expect(screen.getByText("☰")).toBeInTheDocument();
    });

    test("debería abrir y cerrar el menú cuando se hace click en el botón ☰", () => {
        render(<Navbar />);
        
        const button = screen.getByText("☰");

        // Antes del click: el menu está oculto (clase "hidden")
        let menu = screen.getByRole("navigation").querySelector("div.flex-col");
        expect(menu?.className.includes("hidden")).toBe(true);

        // Click → el menú se abre
        fireEvent.click(button);
        menu = screen.getByRole("navigation").querySelector("div.flex-col");
        expect(menu?.className.includes("hidden")).toBe(false);

        // Click nuevamente → el menú se cierra
        fireEvent.click(button);
        menu = screen.getByRole("navigation").querySelector("div.flex-col");
        expect(menu?.className.includes("hidden")).toBe(true);
    });

});
