import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/',
    specPattern: 'cypress/e2e/**/*.cy.{ts,js,jsx,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      // Add custom plugins or tasks here if needed
    },
  },
});
