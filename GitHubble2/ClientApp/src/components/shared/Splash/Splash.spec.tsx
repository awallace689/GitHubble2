import { render, screen } from "@testing-library/react";

import Splash from "./Splash";

const headerText = "header";
const bodyText = "body";
const additionalInfoText = "additionalInfo";

const headerFragment = <>{headerText}</>;
const bodyFragment = <>{bodyText}</>;
const additionalInfoFragment = <>{additionalInfoText}</>;

const additionalInfoTag = "hr";

describe("Splash", () => {
  describe("no additionalInfo", () => {
    it("renders body and header", async () => {
      render(<Splash header={headerFragment} body={bodyFragment} />);

      const hText = screen.queryByText(headerText);
      const bText = screen.queryByText(bodyText);

      expect(hText).toBeInTheDocument();
      expect(bText).toBeInTheDocument();
    });

    it("does not render additionalInfo section", async () => {
      render(<Splash header={headerFragment} body={bodyFragment} />);

      const rule = document.querySelector(additionalInfoTag);

      expect(rule).not.toBeInTheDocument();
    });
  });

  describe("with additionalInfo", () => {
    it("renders additionalInfo section", async () => {
      render(<Splash header={headerFragment} body={bodyFragment} additionalInfo={additionalInfoFragment} />);

      const rule = document.querySelector(additionalInfoTag);
      const additionalInfo = screen.queryByText(additionalInfoText);

      expect(rule).toBeInTheDocument();
      expect(additionalInfo).toBeInTheDocument();
    });
  });
});
