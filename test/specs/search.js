describe("Pinterest search", () => {
  it("should open the main page and have the right title", () => {
    browser.url("https://www.pinterest.com/");
    expect(browser).toHaveTitle("Pinterest");
  });

  it("should search for a product and verify the search text value", () => {
    const searchInput = $("#searchBoxContainer input");
    const searchBtn = $("#searchBoxContainer svg");

    searchInput.addValue("forest aesthetic");
    searchBtn.click();

    expect(searchInput).toHaveValue("forest aesthetic");
  });

  it("should redirect to a new page and verify the search box text", () => {
    const searchInput = $("#searchBoxContainer input");

    expect(searchInput).toHaveValue("forest aesthetic");
    expect(browser).toHaveTitle("Pinterest");
  });

  it("should change filter value", () => {
    const filter = $('div[data-test-id="search-filter"] span');
    filter.click();

    const filterOpt = $('div[data-test-id="search-filter-boards]');
    filterOpt.click();

    expect(filter).toHaveText("Boards");
  });
});
