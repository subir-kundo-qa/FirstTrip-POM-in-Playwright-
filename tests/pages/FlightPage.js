export class FlightPage {
  constructor(page) {
    this.page = page;
    this.oneWayBtn = page.getByTestId('One Way-input');
    this.datePicker = page.locator('p.mt-2.font-medium');
    this.searchBtn = page.getByTestId('search-flight-button');
  }

  async open() {
    await this.page.goto('https://firsttrip.com/flight');
  }

  async selectOneWay() {
    await this.oneWayBtn.click();
  }

  async chooseDate(daySelector) {
    await this.datePicker.first().click();
    await this.page.locator(daySelector).click();
  }

  async search() {
    await this.searchBtn.click();
  }
}
