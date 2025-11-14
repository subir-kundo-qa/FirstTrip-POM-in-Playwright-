# Flight Search Automation Assessment

## Overview
This project is an automated test suite for flight search functionality, implemented using **Playwright** and **JavaScript**.  
The test simulates a user searching for a one-way flight, selecting a date, handling popups for sign-in, and capturing flight prices.  
The framework follows the **Page Object Model (POM)** to improve readability, maintainability, and scalability.

---

## Framework Structure
```
FirstTrip-POM-in-Playwright-/
│
├─ tests/
│ └─ Main.spec.js # Main executable test
│
├─ pages/
│ ├─ FlightPage.js # Page Object Model for flight search page
│ ├─ SearchResultPage.js # POM for search results page
│ └─ SignInPage.js # POM for sign-in popup
│
├─ playwright.config.js # Playwright configuration
├─ package.json # Node.js dependencies
├─ package-lock.json
└─ README.md # This file
```

### Key Features
- **Page Object Model (POM):** Each page has its own class with methods to interact with elements, making test logic clean and reusable.  
- **Popup Handling:** Uses `page.waitForEvent('popup')` to wait for sign-in popups reliably.  
- **Data Capture:** Flight prices are collected and logged to verify search results.  
- **Scalable Structure:** Adding new pages or tests requires minimal changes, supporting future expansion.  

---

## How to Run the Tests

1. **Clone the repository**  

```bash
git clone https://github.com/subir-kundo-qa/FirstTrip-POM-in-Playwright-.git
```

2.Navigate to the project directory
```bash

cd FirstTrip-POM-in-Playwright-
```

3.Install dependencies
```bash

npm install playwright
```

4.Run the tests
```bash

npx playwright test tests/Main.spec.js
```

## Design Choices & Reasoning

POM for Maintainability: Separates page interactions from test logic, making tests easier to read, maintain, and scale.

Explicit Popup Handling: Waits for popups before interacting, ensuring stability and reliability.

Logging Key Data: Captures flight prices to verify results and assist in debugging.

Clean & Scalable: The structure supports future expansion, like adding round-trip searches or multi-browser testing.


---




