import Counter from "../src/components/Counter";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renders with initial setup value of 0", () => {
    render(<Counter />);
    expect(screen.getByRole("heading")).toHaveTextContent(0);
});

test("renders incremented count (3) when button is pressed three times", async () => {
    render(<Counter />);

    await userEvent.click(screen.getByText("Increment"));
    await userEvent.click(screen.getByText("Increment"));
    await userEvent.click(screen.getByText("Increment"));

    expect(screen.getByRole("heading")).toHaveTextContent(3);
});

test("renders decremented count of -1 when button is pressed once", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText("Decrement"));

    expect(screen.getAllByRole("heading")).toHaveTextContent(-1);

})