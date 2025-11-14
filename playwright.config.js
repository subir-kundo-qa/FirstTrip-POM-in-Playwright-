// @ts-check
import { defineConfig, devices } from '@playwright/test';
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 40 * 1000, // Global timeout for each test (40s)
  expect: { timeout: 40 * 1000 }, // Timeout for assertions (40s)
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: false, // Recommended for CI or automation
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
});