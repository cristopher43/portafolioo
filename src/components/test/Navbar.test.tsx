import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import Navbar from "../organisms/Navbar";

describe("Navbar Component", () => {
    test("renderiza el logo", () => {
        render(<Navbar />);
        const logo = screen.getByText("CC");
        expect(logo).toBeInTheDocument();
    });

    test("renderiza los links de escritorio", () => {
        render(<Navbar />);
        // Contenedor de escritorio tiene clases 'md:flex'
        const desktopMenu = screen.getByRole("navigation").querySelector("div.md\\:flex");
        expect(desktopMenu).toBeInTheDocument();

        const links = ["Home", "Sobre mí", "Servicios", "Proyectos", "Contacto"];
        links.forEach((link) => {
            const element = within(desktopMenu!).getByText(link);
            expect(element).toBeInTheDocument();
        });
    });

    test("menú móvil no se muestra por defecto", () => {
        render(<Navbar />);
        const mobileMenu = screen.getByRole("navigation").querySelector("div.flex-col");
        expect(mobileMenu).toBeNull();
    });

    test("al hacer clic en el botón hamburguesa, se muestra el menú móvil", () => {
        render(<Navbar />);
        const button = screen.getByRole("button");
        fireEvent.click(button);

        const mobileMenu = screen.getByRole("navigation").querySelector("div.flex-col");
        expect(mobileMenu).toBeInTheDocument();

        const mobileLinks = ["Home", "Sobre mí", "Servicios", "Proyectos", "Contacto"];
        mobileLinks.forEach((link) => {
            const element = within(mobileMenu!).getByText(link);
            expect(element).toBeInTheDocument();
        });
    });

    test("al hacer clic nuevamente en el botón hamburguesa, se oculta el menú móvil", () => {
        render(<Navbar />);
        const button = screen.getByRole("button");
        fireEvent.click(button); // abrir
        fireEvent.click(button); // cerrar

        const mobileMenu = screen.getByRole("navigation").querySelector("div.flex-col");
        expect(mobileMenu).toBeNull();
    });
});
