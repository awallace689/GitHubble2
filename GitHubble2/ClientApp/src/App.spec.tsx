import { render, screen } from "@testing-library/react";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  it("renders navbar", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const navbar = await screen.findByRole('navigation');

    expect(navbar).toBeInTheDocument()
  });
});
