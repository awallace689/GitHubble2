import { render, screen } from "@testing-library/react";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const lightBackgroundColor = "#bdcfe1";

describe("App", () => {
  it("renders navbar", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const navbar = await screen.findByRole('navigation');

    expect(navbar).toBeInTheDocument();
  });

  it("initializes in light mode", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const navbar = await screen.findByRole('navigation');

    expect(navbar).toHaveStyle(`background-color: ${lightBackgroundColor}`)
  })
});
