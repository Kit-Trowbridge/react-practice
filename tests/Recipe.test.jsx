import { render, screen } from "@testing-library/react";
import Recipe from "../src/components/Recipe";

test("renders the correct title", () => {
    render(<Recipe name="Finnish cinnamon buns"/>);
    expect(screen.getByRole("heading")).toHaveTextContent("Finnish cinnamon buns");
})