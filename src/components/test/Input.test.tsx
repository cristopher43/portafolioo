import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../atoms/Input";

describe("Input Component", () => {

    test("renderiza el input con el placeholder correcto", () => {
        render(<Input type="text" placeholder="Escribe aquí" />);
        const input = screen.getByPlaceholderText("Escribe aquí");
        expect(input).toBeInTheDocument();
    });

    test("tiene el tipo correcto", () => {
        render(<Input type="email" placeholder="Correo" />);
        const input = screen.getByPlaceholderText("Correo");
        expect(input).toHaveAttribute("type", "email");
    });

    test("permite escribir texto", () => {
        render(<Input type="text" placeholder="Nombre" />);
        const input = screen.getByPlaceholderText("Nombre") as HTMLInputElement;

        fireEvent.change(input, { target: { value: "Cristopher" } });

        expect(input.value).toBe("Cristopher");
    });

});
