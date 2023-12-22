
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 1,
  reporter: [
    ['list', { printSteps: true }],
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "allure-results",
        suiteTitle: false,
      },
    ]
  ],
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: "on",
    trace: 'retain-on-failure',
  }
});

