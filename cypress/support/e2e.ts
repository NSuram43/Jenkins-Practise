import './commands';

// Prevent TypeScript from throwing errors on Cypress globals
declare global {
  namespace Cypress {
    interface Chainable {
      // Add custom command types here
      login(email: string, password: string): Chainable<void>;
    }
  }
}
