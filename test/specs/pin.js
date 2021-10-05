import { expect as chaiExpect } from "chai";

describe("Pinterest pin", () => {
  it("should show the photo", () => {
    browser.url("https://www.pinterest.com/pin/674484481701538807/");

    const pinPhoto = $('div[data-test-id="closeup-image"] img');
    expect(pinPhoto).toBeDisplayed();
  });

  it("should show the pin title", async () => {
    const title = $('div[data-test-id="closeup-title"] h1');
    //expect(title).toHaveTextContaining("Pic");

    title.getText().then((text) => {
      chaiExpect(text).to.contain("Pic");
    });
  });

  it("should contain clickable link to user profile", () => {
    const link = $('div[data-test-id="maybe-clickthrough-link"] a');

    //expect(link).toHaveLinkContaining("MidoRedwan");

    link.getAttribute("href").then((href) => {
      chaiExpect(href).to.contain("MidoRedwan");
      expect(link).toBeClickable();
    });
  });
});
