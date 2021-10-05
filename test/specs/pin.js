import { expect as chaiExpect } from "chai";
import PinPage from "../pages/pin.page.js";

describe("Pinterest pin", () => {
  before(() => {
    PinPage.open();
  });

  it("should show the photo", () => {
    expect(PinPage.pinPhoto).toBeDisplayed();
  });

  it("should show the pin title", async () => {
    //expect(title).toHaveTextContaining("Pic");

    PinPage.pinTitle.getText().then((text) => {
      chaiExpect(text).to.contain("Pic");
    });
  });

  it("should contain clickable link to author profile", () => {
    //expect(link).toHaveLinkContaining("MidoRedwan");

    PinPage.authorProfileLink.getAttribute("href").then((href) => {
      chaiExpect(href).to.contain("MidoRedwan");
      expect(link).toBeClickable();
    });
  });
});
