import Counter from "../src/components/Counter";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renders with initial setup value of 0", () => {
    render(<Counter />);
    expect(screen.getByRole("heading")).toHaveTextContent(0);
});