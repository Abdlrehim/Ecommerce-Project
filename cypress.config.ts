import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/seleniumPractise/#/',
    specPattern: 'cypress/e2eTests/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    downloadsFolder: 'cypress/downloads',
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    video: false,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 10000,
    setupNodeEvents(on, config) {
      // Optional: add plugin config here
    }
  }
});
