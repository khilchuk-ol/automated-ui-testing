import Page from "./page.js";

class PinPage extends Page {
  get pinPhoto() {
    return $('div[data-test-id="closeup-image"] img');
  }

  get pinTitle() {
    return $('div[data-test-id="closeup-title"] h1');
  }

  get authorProfileLink() {
    return $('div[data-test-id="maybe-clickthrough-link"] a');
  }

  open() {
    super.open("https://www.pinterest.com/pin/674484481701538807/");
  }
}

export default new PinPage();
