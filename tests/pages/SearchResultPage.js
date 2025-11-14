export class SearchResultPage {
  constructor(page) {
    this.page = page;
    this.cards = page.locator('[data-testid^="flight_card_"]');
  }

  async clickFirstSelectButton() {
    await this.page.getByTestId('flight_card_0').getByRole('button', { name: 'Select' }).click();
  }

  async getPrices() {
    return await this.cards.locator(':text("BDT")').allTextContents();
  }
}
