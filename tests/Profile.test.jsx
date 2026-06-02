import {render, screen } from "@testing-library/react";
import Profile from "../src/components/Profile";

test("renders with the correct title", () => {
    render(<Profile name="Quackie Makers"/>);
    expect(screen.getByRole("heading")).toHaveTextContent("Quackie Makers");
});

test("renders with the correct job", () => {
    render(<Profile job="Makers' favourite rubber duck"/>);
    expect(screen.getByTestId("job")).toHaveTextContent("Makers' favourite rubber duck");
});

test("renders with the correct birthdate", () => {
    render(<Profile birthdate="2013"/>);
    expect(screen.getByTestId("birthdate")).toHaveTextContent("2013");
});