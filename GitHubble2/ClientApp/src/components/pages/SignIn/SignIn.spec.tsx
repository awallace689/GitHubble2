import { render, screen } from "@testing-library/react";

import SignIn from "./SignIn";
import { BrowserRouter } from "react-router-dom";

describe("SignIn", () => {
  it("renders navbar", async () => {
    render(<SignIn />, { wrapper: BrowserRouter });
    const navbar = await screen.findByRole('navigation');

    expect(navbar).toBeInTheDocument()
  });
});
