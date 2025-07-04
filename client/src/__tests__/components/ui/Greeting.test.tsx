import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "@/components/ui/Greeting";

describe("Greeting", () => {
    it("should render Greeting component correctly", () => {
        render(<Greeting />);
        const element = screen.getByText("Welcome to GrowIQ !!!");
        expect(element).toBeInTheDocument();
    });

    it("should show log message when you click button", async () => {
        render(<Greeting />);
        const element = screen.getByRole("button");
        await userEvent.click(element);
        screen.debug();
    });
});
