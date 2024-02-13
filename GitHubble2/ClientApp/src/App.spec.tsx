import { render, screen } from "@testing-library/react";
import { it, describe } from "vitest";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  it("renders headline", () => {
    render(<App />, { wrapper: BrowserRouter });

    screen.debug();
  });
});
