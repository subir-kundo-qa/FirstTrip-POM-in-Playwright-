import { test, expect } from '@playwright/test';

import { FlightPage } from './pages/FlightPage';
import { SearchResultPage } from './pages/SearchResultPage';
import { SignInPage } from './pages/SignInPage';

test('Flight Search Assessment', async ({ page }) => {

  const flightPage = new FlightPage(page);
  const resultPage = new SearchResultPage(page);

 
  await flightPage.open();
  await flightPage.selectOneWay();


  await flightPage.chooseDate('.react-datepicker__day--015');


  await flightPage.search();


  const popupPromise = page.waitForEvent('popup');
  await resultPage.clickFirstSelectButton();
  const popup = await popupPromise;


  const signInPopup = new SignInPage(popup);
  await signInPopup.verifyVisible();


  await popup.close();

  const prices = await resultPage.getPrices();
  console.log("Prices:", prices);

});
