import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../atoms/Button";

describe("Button Component", () => {
    test("renderiza el texto dentro de children", () => {
        render(<Button>Enviar</Button>);
        expect(screen.getByText("Enviar")).toBeInTheDocument();
    });

    test("ejecuta onClick al hacer click", () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click aquí</Button>);

        fireEvent.click(screen.getByText("Click aquí"));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("acepta className extra", () => {
        render(<Button className="extra-class">Hola</Button>);
        const btn = screen.getByText("Hola");

        expect(btn.className).toContain("extra-class");
    });
});
