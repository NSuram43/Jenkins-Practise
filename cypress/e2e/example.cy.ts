describe('Example Test Suite', () => {
  beforeEach(() => {
    cy.visit('/loginpagePractise');
  });

  it('should login successfully', () => {
    cy.fixture('example').then(
      (data: { username: string; password: string }) => {
        cy.login(data.username, data.password);
        cy.url().should('include', '/angularpractice');
        cy.get('h1').should('contain', 'Shop Name');
      }
    );
  });
});
