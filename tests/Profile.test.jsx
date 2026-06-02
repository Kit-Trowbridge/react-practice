import {render, screen } from "@testing-library/react";
import Profile from "../src/components/Profile";

test("renders with the correct title", () => {
    render(<Profile />);
})