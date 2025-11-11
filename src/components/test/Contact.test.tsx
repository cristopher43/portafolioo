import { render, screen } from "@testing-library/react";
import { Contact } from "../organisms/Contact";

describe("Contact component", () => {
    test("renderiza el formulario con campos de nombre, correo y mensaje", () => {
        render(<Contact />);

        // Con label + id arreglado en tu componente
        expect(screen.getByLabelText("Tu Nombre")).toBeInTheDocument();
        expect(screen.getByLabelText("Correo")).toBeInTheDocument();
        expect(screen.getByLabelText("Mensaje")).toBeInTheDocument();
    });

    test("renderiza los inputs correctos", () => {
        render(<Contact />);

        expect(screen.getByPlaceholderText("ingrese su nombre")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("ingrese su email")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Ingrese mensaje")).toBeInTheDocument();
    });

    test("renderiza el botón de enviar", () => {
        render(<Contact />);
        const button = screen.getByRole("button", { name: /enviar/i });
        expect(button).toBeInTheDocument();
    });

    test("renderiza íconos svg (buscando por 'svg', no por role)", () => {
        const { container } = render(<Contact />);
        const svgs = container.querySelectorAll("svg");

        expect(svgs.length).toBeGreaterThan(0); // comprueba que existan
    });
});
