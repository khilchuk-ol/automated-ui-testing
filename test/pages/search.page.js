import Page from "./page.js";

class SearchPage extends Page {
  get searchInput() {
    return $("#searchBoxContainer input");
  }

  get searchBtn() {
    return $("#searchBoxContainer svg");
  }

  get searchFilterDropDown() {
    return $('div[data-test-id="search-filter"] span');
  }

  get searchFilterBoardsOption() {
    return $('div[data-test-id="search-filter-boards]');
  }

  open() {
    super.open("https://www.pinterest.com/");
  }
}

export default new SearchPage();
