import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../components/templates/App";

test("la página contiene imágenes", () => {
    render(<App />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
});
