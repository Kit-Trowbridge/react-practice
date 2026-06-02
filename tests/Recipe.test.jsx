import { render, screen } from "@testing-library/react";
import Recipe from "../src/components/Recipe";

// <Recipe title="Finnish cinnamon buns" type="dessert" duration={60} />


test("renders the correct title", () => {
    render(<Recipe name="Finnish cinnamon buns"/>);
    expect(screen.getByRole("heading")).toHaveTextContent("Finnish cinnamon buns");
});

test("renders the correct type", () => {
    render(<Recipe type="dessert"/>);
    expect(screen.getByTestId("type")).toHaveTextContent("dessert");
});

test("renders the correct duration", () => {
    render(<Recipe duration={60}/>);
    expect(screen.getByTestId("duration")).toHaveTextContent(60);
});