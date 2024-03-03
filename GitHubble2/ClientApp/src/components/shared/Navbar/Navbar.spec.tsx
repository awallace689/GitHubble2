import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PaletteMode } from "@mui/material";

import Navbar from "./Navbar";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";

const setPaletteMode = vitest.fn();
const paletteMode: {[key: string]: PaletteMode} = {
  light: "light",
  dark: "dark"
}

const initRoute = "/someRoute";
const rootText = "root";

const brandTestId = "navbar-brand-text";
const logoTestId = "navbar-brand-logo";
const themeSwitchAriaLabel = "dark mode";

const getNavbarRouter = () => (
  <MemoryRouter initialEntries={[initRoute]} initialIndex={0}>
    <Routes>
      <Route
        path={initRoute}
        element={
          <Navbar
            setPaletteMode={setPaletteMode}
            paletteMode={paletteMode.light}
          />
        }
      ></Route>
      <Route path="/" element={<span>{rootText}</span>}></Route>
    </Routes>
  </MemoryRouter>
);

describe("Navbar", () => {
  it("renders brand and logo", async () => {
    render(
      <Navbar setPaletteMode={setPaletteMode} paletteMode={paletteMode.light} />,
      { wrapper: BrowserRouter }
    );

    const logo = screen.queryByTestId(logoTestId);
    const brand = screen.queryByTestId(brandTestId);

    expect(logo).toBeInTheDocument();
    expect(brand).toBeInTheDocument();
  });

  it("logo redirects to root", async () => {
    render(getNavbarRouter());

    const logo = await screen.findByTestId(logoTestId);
    await userEvent.click(logo);

    expect(screen.getByText(rootText)).toBeInTheDocument();
  });

  it("brand redirects to root", async () => {
    render(getNavbarRouter());

    const brand = await screen.findByTestId(brandTestId);
    await userEvent.click(brand);

    expect(screen.getByText(rootText)).toBeInTheDocument();
  })

  it("disables switch on light mode", async () => {
    render(
      <Navbar setPaletteMode={setPaletteMode} paletteMode={paletteMode.light} />,
      { wrapper: BrowserRouter }
    );

    const themeSwitch = screen.findByLabelText(themeSwitchAriaLabel);
    const input = (await themeSwitch).querySelector('input');
    expect(input).not.toBeChecked();
  });

  it("enables switch on dark mode", async () => {
    render(
      <Navbar setPaletteMode={setPaletteMode} paletteMode={paletteMode.dark} />,
      { wrapper: BrowserRouter }
    );

    const themeSwitch = screen.findByLabelText(themeSwitchAriaLabel);
    const input = (await themeSwitch).querySelector('input');
    expect(input).toBeChecked();
  });
});
