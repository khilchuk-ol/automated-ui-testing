describe("Pinterest pin", () => {
  it("should show the photo", () => {
    browser.url("https://www.pinterest.com/pin/674484481701538807/");

    const pinPhoto = $('div[data-test-id="closeup-image"] img');
    expect(pinPhoto).toBeDisplayed();
  });

  it("should show the pin title", () => {
    const title = $('div[data-test-id="closeup-title"] h1');
    expect(title).toHaveTextContaining("Pic");
  });

  it("should contain clickable link to user profile", () => {
    const link = $('div[data-test-id="maybe-clickthrough-link"] a');

    expect(link).toHaveLinkContaining("MidoRedwan");
    expect(link).toBeClickable();
  });

  it("should contain valid new url after clicking username", () => {
    const link = $('div[data-test-id="maybe-clickthrough-link"] a');
    link.click();

    expect(browser).toHaveUrl("https://www.pinterest.com/MidoRedwan/_created/");
  });
});
