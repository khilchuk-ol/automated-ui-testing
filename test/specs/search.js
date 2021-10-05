import { expect as chaiExpect } from "chai";
import SearchPage from "../pages/search.page.js";

describe("Pinterest search", () => {
  it("should open the main page and have the right title", () => {
    SearchPage.open();
    expect(browser).toHaveTitle("Pinterest");
  });

  it("should search for a product and verify the search text value", () => {
    SearchPage.searchInput.addValue("forest aesthetic");
    SearchPage.searchBtn.click();

    SearchPage.searchInput.getAttribute("value").then((val) => {
      chaiExpect(val).to.be.equal("forest aesthetic");
    });

    //expect(searchInput).toHaveValue("forest aesthetic");
  });

  it("should redirect to a new page and verify the search box text", () => {
    SearchPage.searchInput.getAttribute("value").then((val) => {
      chaiExpect(val).to.be.equal("forest aesthetic");
      expect(browser).toHaveTitle("Pinterest");
    });
  });

  it("should change filter value", () => {
    SearchPage.searchFilterDropDown.click();

    SearchPage.searchFilterBoardsOption.click();

    //expect(filter).toHaveText("Boards");

    SearchPage.searchFilterDropDown.getText().then((text) => {
      chaiExpect(text).to.be.equal("Boards");
    });
  });
});
