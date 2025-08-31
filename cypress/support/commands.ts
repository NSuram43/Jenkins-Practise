Cypress.Commands.add('login', (email: string, password: string) => {
  cy.get('input[name="username"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('input[type="submit"]').click();
});
